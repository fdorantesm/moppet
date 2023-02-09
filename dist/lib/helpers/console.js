"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.retrieveCols = exports.print = exports.printPostInstall = void 0;
const child_process_1 = require("child_process");
const chalk = require("chalk");
const emojis_1 = require("../constants/emojis");
function printPostInstall() {
    const dim = print("dim");
    const yellow = print("yellow");
    const emptyLine = print();
    emptyLine();
    yellow(`Thanks for installing moppet ${emojis_1.EMOJIS.PRAY}`);
    dim("Please star the repository");
    dim("to help to maintain this package.");
    emptyLine();
    emptyLine();
    print("cyan")(`${chalk.bold(`${emojis_1.EMOJIS.SPONGE} Moppet`)} ${chalk.underline("https://github.com/fdorantesm/moppet")}`);
    emptyLine();
}
exports.printPostInstall = printPostInstall;
function print(color = null) {
    return function (action = "", str = "", pad = false) {
        const terminalCols = retrieveCols();
        const strLength = action.replace(/\u001b\[[0-9]{2}m/g, "").length;
        const leftPaddingLength = Math.floor((terminalCols - strLength) / 2);
        const leftPadding = " ".repeat(Math.max(leftPaddingLength, 0));
        if (color) {
            action = chalk[color](action);
        }
        console.log(pad ? leftPadding : "", `${action} ${str}`);
    };
}
exports.print = print;
function retrieveCols() {
    const defaultCols = 80;
    try {
        const terminalCols = (0, child_process_1.execSync)("tput cols", {
            stdio: ["pipe", "pipe", "ignore"],
        });
        return parseInt(terminalCols.toString(), 10) || defaultCols;
    }
    catch (_a) {
        return defaultCols;
    }
}
exports.retrieveCols = retrieveCols;
function log(color, title, text) {
    print(color)(chalk.bold(title), text);
}
exports.log = log;
//# sourceMappingURL=console.js.map