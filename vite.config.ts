import { defineConfig } from 'vite'
import { createRequire } from 'module'
import preact from '@preact/preset-vite'
import buildCommon from './src/lib/buildCommon';
//
const directoryPath = './src/client';

//@ts-ignore
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    const entryFiles = await buildCommon.getEntryItems(directoryPath);
    //console.log(entryFiles);
    //
    return {
      plugins: [preact()], 
      build: {
        lib: {
          entry:entryFiles,
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        preact({
          babel: {
            // Change cwd to load Preact Babel plugins
            cwd: createRequire(import.meta.url).resolve('@preact/preset-vite')
          }
        })
      ]
    }
  }
})
