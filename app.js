const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <style>
      body{
        min-height: 100vh;
        background-color: beige;
      }
    
      div{
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width: 100%;
        height: 100%;
      }
      h1{
        color: #0054E0;
      }
    </style>
    <div>
      <h1>Wellcome To The</h1>
      <h1>Pipline App!</h1>
      <h2>Test!</h2>
    </div>
    
  `);
});

app.listen(8080);
