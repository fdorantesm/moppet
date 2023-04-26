#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const mop_1 = require("./lib/commands/mop");
const program = new commander_1.Command();
program.option("-d, --dir <directory>");
program.parse(process.argv);
const options = program.opts();
const directory = options.dir || ".";
if (options.dir) {
    (0, mop_1.mop)(`${directory}/**/node_modules`);
}
//# sourceMappingURL=index.js.map