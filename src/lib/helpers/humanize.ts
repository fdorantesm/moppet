const byteSize = require("byte-size");

export function bytesToHuman(value: number): string {
  return byteSize(value);
}
