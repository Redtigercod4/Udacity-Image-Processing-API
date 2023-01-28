const sharp = require('sharp');
const path = require('path');

export function ImageProcessor(name: string, height: number, width: number) {
  const imagePath = `${path.resolve(`./src/assets/${name}.jpg`)}`;
  sharp(imagePath)
    .resize(width, height)
    .toFile(`./src/assets/output/${name}_${height}x${width}.jpg`);
}
