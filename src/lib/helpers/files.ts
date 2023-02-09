import { rimraf } from "rimraf";
import * as glob from "glob";
import fastFolderSize = require("fast-folder-size");

export function readDirs(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(pattern, {}, (error, files) => {
      if (error) {
        reject(error);
      }
      resolve(files);
    });
  });
}

export function rmdir(node: string) {
  return rimraf.sync(node);
}

export function getSize(node: string): Promise<number> {
  return new Promise((resolve, reject) => {
    fastFolderSize(node, (err: any, size: number) => {
      if (err) {
        reject(err);
      }
      resolve(size);
    });
  });
}
