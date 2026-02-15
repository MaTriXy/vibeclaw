#!/usr/bin/env node
/**
 * Merge extra VFS files into the existing openclaw-vfs-snapshot.json
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const SNAPSHOT = 'dist/openclaw/openclaw-vfs-snapshot.json';
const EXTRA_DIR = 'vfs-extra';

// Load existing snapshot
const snapshot = JSON.parse(readFileSync(SNAPSHOT, 'utf8'));

// Collect extra files
function walk(dir, base) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const rel = '/' + relative(base, full);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      // Add directory entry if not exists
      if (!snapshot.files.find(f => f.path === rel)) {
        snapshot.files.push({ path: rel, type: 'directory' });
      }
      walk(full, base);
    } else {
      const content = readFileSync(full);
      const b64 = content.toString('base64');
      // Replace or add
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

console.log('Merging extra VFS files...');
walk(EXTRA_DIR, EXTRA_DIR);

writeFileSync(SNAPSHOT, JSON.stringify(snapshot));
const size = statSync(SNAPSHOT).size;
console.log(`\nSnapshot: ${(size / 1024 / 1024).toFixed(1)}MB, ${snapshot.files.length} entries`);
