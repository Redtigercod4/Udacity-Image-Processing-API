import sharp from "sharp";
import path from "path";
import fs from 'fs';

function processor(image: string, width: number, height: number) {
  const activePath = `${path.resolve(`./src/assets/${image}.jpg`)}`
  try {
    sharp(activePath).resize(width, height).toFile(`./src/assets/output/${image}_${width}x${height}.jpg`)
  } catch (error) {
    console.error(error);
  }
}

export default processor;