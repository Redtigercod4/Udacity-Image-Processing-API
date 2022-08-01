import sharp from "sharp";
import path from "path";
import fs from 'fs';

function processor(image: string, width: number, height: number) {
  const imagePath = () => {
    const sourcePath = path.resolve(__dirname, "./assets");
    const imagePath = path.resolve(sourcePath, `${image}.jpg`);
    return imagePath;
  };

  try {
    sharp(imagePath()).resize(width, height).toFile('output.png')
  } catch (error) {
    console.error(error);
  }
}

export default processor;