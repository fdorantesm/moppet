import { log } from "../helpers/console";
import { getSize, readDirs, rmdir } from "../helpers/files";
import { bytesToHuman } from "../helpers/humanize";

export async function mop(node: string) {
  let size = 0;
  log("yellow", `Looking for node_modules directories in ${node}`);
  const dirs = await readDirs(node);
  try {
    await Promise.all(
      dirs.map((dir) => {
        getSize(dir).then((dirSize) => {
          size += dirSize;
          rmdir(dir);
          log("red", "DELETED", dir);
        });
      })
    );
    log("green", "FINISHED", `${bytesToHuman(size)} removed`);
  } catch (error) {
    log("red", "ERROR", error.message);
  }
}
