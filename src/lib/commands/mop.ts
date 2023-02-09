import { log } from "../helpers/console";
import { getSize, readDirs, rmdir } from "../helpers/files";
import { bytesToHuman } from "../helpers/humanize";

export async function mop(node: string) {
  let size = 0;
  const dirs = await readDirs(node);
  log("yellow", `Looking for node_modules directories in ${node}`);
  try {
    await Promise.all(
      dirs.map(async (dir) => {
        const dirSize = await getSize(dir);
        size += dirSize;
        rmdir(dir);
        log("red", "DELETED", dir);
      })
    );
    log("green", "FINISHED", `${bytesToHuman(size)} removed`);
  } catch (error) {
    log("red", "ERROR", error.message);
  }
}
