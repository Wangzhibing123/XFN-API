// 搭建node.js服务器
const PORT = 8090;
const express = require('express');
let app = express();
app.listen(PORT,()=>{
  console.log('Server Listening ' +PORT+' ....');
});