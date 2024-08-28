
import { parse } from 'svgson'
import fs, { readFileSync } from 'fs'
import path, { resolve } from 'path'
import { fileURLToPath } from "url"
import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const ICON_LIB_TEMPLATE = readFileSync(
  resolve(__dirname, './ejs/icon-lib.js.ejs'),
  'utf8'
);

const ICON_ES_TEMPLATE = readFileSync(
  resolve(__dirname, './ejs/icon-es.js.ejs'),
  'utf8'
);

const ICON_JSX_TEMPLATE = readFileSync(
  resolve(__dirname, './ejs/icon.jsx.ejs'),
  'utf8'
);
 
const directoryPath = path.join(__dirname, './svg'); 
 
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('读取文件夹出错:', err);
  }
  files.forEach(file => {
    fs.readFile(path.join(directoryPath, file), 'utf8', (err, content) => {
      if (err) {
        console.log('Error reading file: ' + file);
        return;
      }
      const fileName = file.split('.')[0]
      const fileNameFull = `${file.split('.')[0]}.js`
      const fileNameFullJsx = `${file.split('.')[0]}.jsx`
      parse(content).then((json) => {
        content = ejs.render(
          ICON_LIB_TEMPLATE, 
          {
            svgIdentifier: fileName,
            content: JSON.stringify(json, null, 2)
            // content: JSON.stringify(json)        // 压缩模式
          },
          {
            escape: (res) => res.toString()
          }
        )
        fs.writeFile(`./src/icon-js/lib/${fileNameFull}`, content, (err) => {
          if (err) throw err;
          console.log('文件已被保存');
        });

        // es
        content = ejs.render(
          ICON_ES_TEMPLATE, 
          {
            svgIdentifier: fileName,
            content: JSON.stringify(json, null, 2)
            // content: JSON.stringify(json)        // 压缩模式
          },
          {
            escape: (res) => res.toString()
          }
        )
        fs.writeFile(`./src/icon-js/es/${fileNameFull}`, content, (err) => {
          if (err) throw err;
          console.log('文件已被保存');
        });

        // 保存为jsx
        content = ejs.render(
          ICON_JSX_TEMPLATE, 
          {
            svgIdentifier: fileName,
          },
          {
            escape: (res) => res.toString()
          }
        )
        fs.writeFile(`./icon-vue/${fileNameFullJsx}`, content, (err) => {
          if (err) throw err;
          console.log('文件已被保存');
        });

      })
    })
  });
});