"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytesToHuman = void 0;
const byteSize = require("byte-size");
function bytesToHuman(value) {
    return byteSize(value);
}
exports.bytesToHuman = bytesToHuman;
//# sourceMappingURL=humanize.js.map