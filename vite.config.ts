import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { promises as fs } from 'fs'
//
const directoryPath = './src/client';
const targetFiles:any[] = [];
//
async function readDirAsync(): Promise<any>
{
  try {
    const files = await fs.readdir(directoryPath);
    files.forEach(file => {
      const vEnd = file.endsWith(".tsx");
      if(vEnd) {
      let tmpName = "./src/client/" + file;
       targetFiles.push(tmpName);
      }
    });
    return targetFiles;
  } catch (error) {
    console.error('Error readDirAsync:', error);
  }
}
//@ts-ignore
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    const entryFiles = await readDirAsync();
    //console.log(entryFiles);
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
      plugins: [preact()]
    }
  }
})
