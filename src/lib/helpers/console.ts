import { execSync } from "child_process";
import * as chalk from "chalk";

import { EMOJIS } from "../constants/emojis";

export function printPostInstall() {
  const dim = print("dim");
  const yellow = print("yellow");
  const emptyLine = print();
  emptyLine();
  yellow(`Thanks for installing moppet ${EMOJIS.PRAY}`);
  dim("Please star the repository");
  dim("to help to maintain this package.");
  emptyLine();
  emptyLine();
  print("cyan")(
    `${chalk.bold(`${EMOJIS.SPONGE} Moppet`)} ${chalk.underline(
      "https://github.com/fdorantesm/moppet"
    )}`
  );
  emptyLine();
}

export function print(color: string | null = null) {
  return function (action = "", str = "", pad = false) {
    const terminalCols = retrieveCols();
    const strLength = action.replace(/\u001b\[[0-9]{2}m/g, "").length;
    const leftPaddingLength = Math.floor((terminalCols - strLength) / 2);
    const leftPadding = " ".repeat(Math.max(leftPaddingLength, 0));
    if (color) {
      action = (chalk as any)[color](action);
    }
    console.log(pad ? leftPadding : "", `${action} ${str}`);
  };
}

export function retrieveCols() {
  const defaultCols = 80;
  try {
    const terminalCols = execSync("tput cols", {
      stdio: ["pipe", "pipe", "ignore"],
    });
    return parseInt(terminalCols.toString(), 10) || defaultCols;
  } catch {
    return defaultCols;
  }
}

export function log(color: string, title: string, text?: string) {
  print(color)(chalk.bold(title), text);
}
