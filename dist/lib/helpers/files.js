"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = exports.rmdir = exports.readDirs = void 0;
const rimraf_1 = require("rimraf");
const glob = require("glob");
const fastFolderSize = require("fast-folder-size");
function readDirs(pattern) {
    return new Promise((resolve, reject) => {
        glob(pattern, {}, (error, files) => {
            if (error) {
                reject(error);
            }
            resolve(files);
        });
    });
}
exports.readDirs = readDirs;
function rmdir(node) {
    return rimraf_1.rimraf.sync(node);
}
exports.rmdir = rmdir;
function getSize(node) {
    return new Promise((resolve, reject) => {
        fastFolderSize(node, (err, size) => {
            if (err) {
                reject(err);
            }
            resolve(size);
        });
    });
}
exports.getSize = getSize;
//# sourceMappingURL=files.js.map