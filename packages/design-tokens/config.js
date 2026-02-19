import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sd = new StyleDictionary({
  source: [resolve(__dirname, 'tokens/**/*.json')],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab'],
      buildPath: resolve(__dirname, 'build/') + '/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true },
        },
      ],
    },
    json: {
      transforms: ['attribute/cti', 'name/kebab'],
      buildPath: resolve(__dirname, 'build/') + '/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('Design tokens built successfully.');
