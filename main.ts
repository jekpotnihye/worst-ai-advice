import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "To impress your boss, reply-all to every company email with 'Noted, thanks!' — visibility is the fastest path to promotion.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
