"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPostInstall = void 0;
const chalk = require("chalk");
const emojis_1 = require("../constants/emojis");
const console_1 = require("./console");
function printPostInstall() {
    const dim = (0, console_1.print)("dim");
    const yellow = (0, console_1.print)("yellow");
    const emptyLine = (0, console_1.print)();
    emptyLine();
    yellow(`Thanks for installing moppet ${emojis_1.EMOJIS.PRAY}`);
    dim("Please star the repository");
    dim("to help to maintain this package.");
    emptyLine();
    emptyLine();
    (0, console_1.print)("cyan")(`${chalk.bold(`${emojis_1.EMOJIS.SPONGE} Moppet`)} ${chalk.underline("https://github.com/fdorantesm/moppet")}`);
    emptyLine();
}
exports.printPostInstall = printPostInstall;
//# sourceMappingURL=scripts.js.map