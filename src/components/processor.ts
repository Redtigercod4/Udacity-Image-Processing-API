import sharp from "sharp";
import path, { dirname } from "path";
import fs from 'fs';

function processor(image: string, width: number, height: number) {
  const activePath = `${path.resolve(`${__dirname}/assets/${image}.jpg`)}`
  const outputPath = `${path.resolve(`${__dirname}/components/output/${image}_${width}x${height}`)}`
  try {
    sharp(activePath).resize(width, height)
  } catch (error) {
    console.error(error);
  }
}

export default processor;