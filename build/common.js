import { addExtension } from '@rollup/pluginutils';
import { normalizePath } from '@rollup/pluginutils';
import { fileURLToPath } from 'node:url'
// 依次判断目录下是否有 .js .jsx /index.js /index.jsx
const __dirname = fileURLToPath(new URL('.', import.meta.url))
// console.log(__dirname);
// 只默认加 JS，不判断是否存在？
export  function jsxExtension(options = {}) {
  return {
    resolveId(code, id) {
      // only adds an extension if there isn't one already
      // console.log(code,id);
      if(!id) return
      // const pathURL = code.replace(__dirname,'')
      // console.log("🚀 ~ file: common.js:13 ~ resolveId ~ pathURL:", code)
      code = addExtension(code); // `foo` -> `foo.js`, `foo.js` -> `foo.js`
      // code = addExtension(code, '.jsx'); // `foo` -> `foo.jsx`, `foo.js` -> `foo.js`
      // code = addExtension(code, '/index.jsx'); // `foo` -> `foo.jsx`, `foo.js` -> `foo.js`
      // id = addExtension(code, '/index.js'); // `foo` -> `foo.jsx`, `foo.js` -> `foo.js`
      // console.log("🚀 ~ file: common.js:13 ~ resolveId ~ pathURL:", id)

    }
  };
}