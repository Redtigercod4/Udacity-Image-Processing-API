const fs = require('fs');
const path = require('path');

export function checkFileExists(name: string, width: number, height: number) {
  const checkFile = fs.readFileSync(
    path.resolve(`./src/assets/${name}_${height}x${width}.jpg`)
  );

  if (checkFile === undefined) {
    return false;
  }
  return true;
}
