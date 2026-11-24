// This entry writes the answer for A one-line gadget roast (a single witty sentence) to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'My phone dies at four every afternoon, precisely when I need it to prove that I am working late.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');

console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}.`);
