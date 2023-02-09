import * as chalk from "chalk";
import { EMOJIS } from "../constants/emojis";
import { print } from "./console";

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
