#!/usr/bin/env node
/**
 * Build a VFS flavour snapshot by merging base snapshot + flavour files
 * Usage: node scripts/build-flavour.mjs <flavour-name>
 * Output: dist/flavours/<name>-vfs-snapshot.json
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, relative } from 'path';

const name = process.argv[2];
if (!name) { console.error('Usage: node scripts/build-flavour.mjs <name>'); process.exit(1); }

const FLAVOUR_DIR = `vfs-flavours/${name}`;
const BASE_SNAPSHOT = 'dist/openclaw/openclaw-vfs-snapshot.json';
const OUT_DIR = 'dist/flavours';
const OUT_FILE = `${OUT_DIR}/${name}-vfs-snapshot.json`;

if (!existsSync(FLAVOUR_DIR)) { console.error(`Flavour dir not found: ${FLAVOUR_DIR}`); process.exit(1); }

// Start from base snapshot
const snapshot = JSON.parse(readFileSync(BASE_SNAPSHOT, 'utf8'));

function walk(dir, base) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = '/' + relative(base, full);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (!snapshot.files.find(f => f.path === rel)) {
        snapshot.files.push({ path: rel, type: 'directory' });
      }
      walk(full, base);
    } else {
      const content = readFileSync(full);
      const b64 = content.toString('base64');
      const existing = snapshot.files.findIndex(f => f.path === rel);
      if (existing >= 0) {
        snapshot.files[existing] = { path: rel, type: 'file', content: b64 };
        console.log(`  updated: ${rel} (${content.length}b)`);
      } else {
        snapshot.files.push({ path: rel, type: 'file', content: b64 });
        console.log(`  added:   ${rel} (${content.length}b)`);
      }
    }
  }
}

console.log(`Building flavour: ${name}`);
walk(FLAVOUR_DIR, FLAVOUR_DIR);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(snapshot));
const size = statSync(OUT_FILE).size;
console.log(`\n✅ ${OUT_FILE}`);
console.log(`   ${(size / 1024 / 1024).toFixed(1)}MB, ${snapshot.files.length} entries`);
