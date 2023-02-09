#!/usr/bin/env node
import { Command } from "commander";
import { mop } from "./lib/commands/mop";

const program = new Command();

program.option("-d, --dir <directory>");

program.parse(process.argv);

const options = program.opts();

const directory = options.dir || ".";

if (options.dir) {
  mop(`${directory}/**/node_modules`);
}
