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

const ICON_VUE_ES_TEMPLATE = readFileSync(
  resolve(__dirname, './ejs/icon-vue-es.js.ejs'),
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
        checkPath('./dist/icon/lib', `./dist/icon/lib/${fileNameFull}`, content)
        // fs.writeFile(`./dist/icon/lib/${fileNameFull}`, content, (err) => {
        //   if (err) throw err;
        // });

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
        checkPath('./dist/icon/es', `./dist/icon/es/${fileNameFull}`, content)

        // fs.writeFile(`./dist/icon/es/${fileNameFull}`, content, (err) => {
        //   if (err) throw err;
        // });

        // 保存为jsx
        // content = ejs.render(
        //   ICON_JSX_TEMPLATE, 
        //   {
        //     svgIdentifier: fileName,
        //   },
        //   {
        //     escape: (res) => res.toString()
        //   }
        // )
        // fs.writeFile(`./dist/icon-vue/${fileNameFullJsx}`, content, (err) => {
        //   if (err) throw err;
        // });

        // 保存为vue-es.js
        content = ejs.render(
          ICON_VUE_ES_TEMPLATE,
          {
            svgIdentifier: fileName,
          },
          {
            escape: (res) => res.toString()
          }
        )
        checkPath('./dist/icon-vue', `./dist/icon-vue/${fileNameFull}`, content)

        // fs.writeFile(`./dist/icon-vue/${fileNameFull}`, content, (err) => {
        //   if (err) throw err;
        // });
      })
    })
  });
});

const checkPath = (dirPath, filePath, content) => {
  fs.access(dirPath, fs.constants.F_OK, (err) => {
    if (err) {
      // 目录不存在，创建目录
      fs.mkdir(dirPath, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
          console.error('创建目录失败:', mkdirErr);
        } else {
          // 目录创建成功，写入文件
          fs.writeFile(filePath, content, (writeErr) => {
            if (writeErr) {
              console.error('写入文件失败:', writeErr);
            }
          });
        }
      });
    } else {
      // 目录存在，直接写入文件
      fs.writeFile(filePath, content, (writeErr) => {
        if (writeErr) {
          console.error('写入文件失败:', writeErr);
        }
      });
    }
  });
}

