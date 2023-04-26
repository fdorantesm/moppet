"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mop = void 0;
const console_1 = require("../helpers/console");
const files_1 = require("../helpers/files");
const humanize_1 = require("../helpers/humanize");
const promise_pool_1 = require("@supercharge/promise-pool");
function mop(node) {
    return __awaiter(this, void 0, void 0, function* () {
        let size = 0;
        (0, console_1.log)("yellow", `Looking for node_modules directories in ${node}`);
        try {
            const dirs = yield (0, files_1.readDirs)(node);
            yield promise_pool_1.PromisePool.withConcurrency(10)
                .for(dirs)
                .process((dir) => __awaiter(this, void 0, void 0, function* () {
                const dirSize = yield (0, files_1.getSize)(dir);
                size += dirSize;
                (0, files_1.rmdir)(dir);
                (0, console_1.log)("red", "DELETED", dir);
            }));
            (0, console_1.log)("green", "FINISHED", `${(0, humanize_1.bytesToHuman)(size)} removed`);
        }
        catch (error) {
            (0, console_1.log)("red", "ERROR", error.message);
        }
    });
}
exports.mop = mop;
//# sourceMappingURL=mop.js.map