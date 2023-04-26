import { log } from "../helpers/console";
import { getSize, readDirs, rmdir } from "../helpers/files";
import { bytesToHuman } from "../helpers/humanize";
import { PromisePool } from "@supercharge/promise-pool";

export async function mop(node: string) {
  let size = 0;
  log("yellow", `Looking for node_modules directories in ${node}`);
  try {
    const dirs = await readDirs(node);
    await PromisePool.withConcurrency(10)
      .for(dirs)
      .process(async (dir) => {
        const dirSize = await getSize(dir);
        size += dirSize;
        rmdir(dir);
        log("red", "DELETED", dir);
      });
    log("green", "FINISHED", `${bytesToHuman(size)} removed`);
  } catch (error) {
    log("red", "ERROR", error.message);
  }
}
