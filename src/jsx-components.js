
import { stringify } from 'svgson'
import fs, { readFileSync } from 'fs'
import path, { resolve } from 'path'
import { fileURLToPath } from "url"
import ejs from 'ejs'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const ICON_JSX_TEMPLATE = readFileSync(
  resolve(__dirname, './ejs/icon-jsx.js.ejs'),
  'utf8'
);

const directoryPath = path.join(__dirname, './icon-js/es'); 
 
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
      const fileNameFull = `${file.split('.')[0]}.jsx`
      stringify(content)
      // parse(content).then((json) => {
      //   content = ejs.render(
      //     ICON_JSX_TEMPLATE, 
      //     {
      //       svgIdentifier: fileName,
      //       content: JSON.stringify(json, null, 2)
      //       // content: JSON.stringify(json)        // 压缩模式
      //     },
      //     {
      //       escape: (res) => res.toString()
      //     }
      //   )
      //   fs.writeFile(`./icon/${fileNameFull}`, content, (err) => {
      //     if (err) throw err;
      //     console.log('文件已被保存');
      //   });
      // })
    })
  });
});

// console.log(Jia)






// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



// import { FunctionalComponent } from 'vue';
// import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
// import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

// export interface TranslationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
//   displayName: string;
// }

// const TranslationOutlined: TranslationOutlinedIconType = (props, context) => {
//   const p = { ...props, ...context.attrs };
//   return <AntdIcon {...p} icon={TranslationOutlinedSvg}></AntdIcon>;
// };

// TranslationOutlined.displayName = 'TranslationOutlined';
// TranslationOutlined.inheritAttrs = false;
// export default TranslationOutlined;