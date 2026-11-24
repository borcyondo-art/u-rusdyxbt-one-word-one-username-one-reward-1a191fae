// SPDX-License-Identifier: MIT
// The entry must be the entrant's own verified make.fun handle, sent as
// one word. That handle is jpmax02, so it is fixed here by rule — no
// alternative name may be substituted, and no extra text is added.
import * as fs from "node:fs";
import * as path from "node:path";

// Fixed entry: the entrant's own make.fun username, exactly one word.
const entry = "jpmax02";

const outputDir = "/output";
const outputPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, entry, "utf8");
