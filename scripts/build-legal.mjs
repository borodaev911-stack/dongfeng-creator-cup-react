import {mkdir,writeFile} from 'node:fs/promises';
import {legalDocuments,legalVersion} from '../src/legalDocuments.js';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
await mkdir(new URL('../public/legal/',import.meta.url),{recursive:true});
for(const [key,doc] of Object.entries(legalDocuments)){
 const html=`<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(doc.title)} — АСЦ</title><style>body{background:#080c22;color:#e6ecfa;font:16px/1.8 system-ui;margin:0}main{max-width:800px;margin:auto;padding:28px 22px}h1{font-size:30px;line-height:1.3}h2{font-size:20px;color:#ffe58b}a{color:#a4efff}.note{padding:16px;border:1px solid #ffe58b;color:#ffe58b}p{overflow-wrap:anywhere}</style><main><a href="../">← Вернуться к конкурсу</a><h1>${escape(doc.title)}</h1><p>Редакция ${legalVersion}</p><p class="note">Проект для согласования: оператору необходимо подтвердить фактические поля и инфраструктуру бота, сроки хранения и юридический адрес.</p>${doc.sections.map(([title,text])=>`<h2>${escape(title)}</h2><p>${escape(text)}</p>`).join('')}<p><a href="https://ascauto.ru/privacy-policy">Политика ООО «АСЦ» на основном сайте</a></p></main></html>`;
 await writeFile(new URL(`../public/legal/${key}.html`,import.meta.url),html);
}
