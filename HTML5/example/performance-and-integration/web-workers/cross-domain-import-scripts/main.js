// 代码字符串
const proxyScript = `importScripts('http://localhost:3001/worker.js')`;
console.log('生成代码字符串');
const proxyURL = window.URL.createObjectURL(
  new Blob(
    [proxyScript],
    {
      type: 'text/javascript',
    },
  ),
);
// blob:http://localhost:3000/cb45199f-ca39-4800-8bfd-1c16b97c8910
console.log(proxyURL);
console.log('生成同源 URL');
const worker = new Worker(proxyURL);

worker.postMessage('send');

worker.addEventListener('message', e => {
  console.log(e.data);
  console.log('成功跨域');
});