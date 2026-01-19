import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const images = [
  {
    input: 'public/images/ecommerce.jpg',
    width: 1600,
    webpQuality: 75,
    jpegQuality: 82
  },
  {
    input: 'public/images/horse_racing.jpeg',
    width: 1600,
    webpQuality: 75,
    jpegQuality: 82
  },
  {
    input: 'public/images/logistics.jpeg',
    width: 1600,
    webpQuality: 75,
    jpegQuality: 82
  },
  {
    input: 'public/images/hero.jpeg',
    width: 1920,
    webpQuality: 80,
    jpegQuality: 85
  }
];

async function optimizeImage(config) {
  const { input, width, webpQuality, jpegQuality } = config;

  if (!existsSync(input)) {
    console.log(`⚠️  Skipping ${input} - file not found`);
    return;
  }

  console.log(`\n📸 Processing ${input}...`);

  const inputDir = dirname(input);
  const baseName = input.replace(/\.(jpg|jpeg|png)$/i, '');
  const outputWebP = `${baseName}.webp`;
  const outputJpeg = input.endsWith('.jpeg')
    ? input.replace('.jpeg', '.jpg')
    : baseName + '.jpg';

  try {
    // Get original file size
    const originalStats = await sharp(input).metadata();
    console.log(`   Original: ${originalStats.width}x${originalStats.height}`);

    // Generate WebP
    console.log(`   Creating WebP...`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: webpQuality })
      .toFile(outputWebP);

    const webpStats = await sharp(outputWebP).metadata();
    console.log(`   ✅ WebP: ${outputWebP} (${Math.round(webpStats.size / 1024)}KB)`);

    // Generate optimized JPEG
    console.log(`   Creating optimized JPEG...`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: jpegQuality, mozjpeg: true })
      .toFile(outputJpeg + '.tmp');

    // If the output filename is different from input, rename the temp file
    if (outputJpeg !== input) {
      const { renameSync, unlinkSync } = await import('fs');
      if (existsSync(outputJpeg)) {
        unlinkSync(outputJpeg);
      }
      renameSync(outputJpeg + '.tmp', outputJpeg);
    } else {
      // Overwrite the original
      const { renameSync, unlinkSync } = await import('fs');
      unlinkSync(input);
      renameSync(outputJpeg + '.tmp', outputJpeg);
    }

    const jpegStats = await sharp(outputJpeg).metadata();
    console.log(`   ✅ JPEG: ${outputJpeg} (${Math.round(jpegStats.size / 1024)}KB)`);

  } catch (error) {
    console.error(`   ❌ Error processing ${input}:`, error.message);
  }
}

console.log('🚀 Starting image optimization...\n');

for (const config of images) {
  await optimizeImage(config);
}

console.log('\n✨ Image optimization complete!\n');
