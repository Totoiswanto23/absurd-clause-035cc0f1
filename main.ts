// The Absurd Clause Contest: a deadpan terms-of-service clause that quietly
// turns absurd — the user lends the Company their soul every second Tuesday.
// The joke lands through the legal register itself: boilerplate until the
// absurdity hits, then it is too late to unread it.
// This program writes that one clause to /output/entry.txt for the gate.
import * as fs from 'node:fs';
import * as path from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The clause: a soul lent out on a schedule, returnable only in triplicate.
const ENTRY = "Section 14.2: By accepting these terms, you agree to lend the Company your soul every second Tuesday, returnable only upon written request submitted in triplicate.";

// Count characters the way the gate does: one per code point.
const charCount = (text: string): number => [...text].length;

function main(): void {
  const chars = charCount(ENTRY);
  if (chars < 1 || chars > 200 || ENTRY.includes('\n')) {
    throw new Error(`entry must be one line of 1-200 characters, got ${chars}`);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'entry.txt'), ENTRY);
  console.log(`wrote ${chars} chars to ${path.join(OUT_DIR, 'entry.txt')}`);
}

main();
