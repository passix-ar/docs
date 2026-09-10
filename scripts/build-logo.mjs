// Arma el lockup del header (marca + wordmark) a partir de los archivos REALES de
// la app. La marca no se redibuja a mano: cualquier recreación queda distinta y se
// nota al lado del panel y de la landing.
//
// Proporción: la misma que el sidebar del panel (marca 40 + gap 8 + wordmark 140),
// escalada a marca 44. Se genera a 4x para que quede nítido en pantallas retina.
//
//   node scripts/build-logo.mjs [ruta/a/hi-events/frontend/public/logos]

import sharp from 'sharp';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const logos = process.argv[2] ?? join(here, '../../hi-events/frontend/public/logos');
const out = join(here, '../src/assets');

const SCALE = 4;
const MARK = 44 * SCALE;
const GAP = 9 * SCALE;
const WORD = 154 * SCALE;
const WIDTH = (44 + 9 + 154) * SCALE;
const HEIGHT = 54 * SCALE;

const mark = await sharp(join(logos, 'passix-mark.png'))
  .resize(MARK, MARK, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

for (const [name, source] of [
  ['passix-logo-light', 'passix-light-bg.svg'],
  ['passix-logo-dark', 'passix-dark-bg.svg'],
]) {
  const word = await sharp(join(logos, source), { density: 72 * SCALE * 1.5 })
    .resize({ width: WORD })
    .toBuffer();
  const { height } = await sharp(word).metadata();

  await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      { input: mark, left: 0, top: Math.round((HEIGHT - MARK) / 2) },
      { input: word, left: MARK + GAP, top: Math.round((HEIGHT - height) / 2) },
    ])
    .png()
    .toFile(join(out, `${name}.png`));

  console.log(`${name}.png  ${WIDTH}x${HEIGHT}`);
}

// La marca sola, para el hero de la portada.
await sharp(join(logos, 'passix-mark.png')).toFile(join(out, 'passix-mark.png'));
console.log('passix-mark.png');
