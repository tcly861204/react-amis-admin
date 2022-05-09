const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(
  cors({
    credentials: true,
    origin: '*',
  }),
);

const getStream = (api) => {
  return new Promise((resolve) => {
    const stream = fs.createReadStream(path.resolve(__dirname, '../public', api), 'utf8');
    const chunks = [];
    stream.on('data', (chunk) => {
      chunks.push(chunk);
    });
    stream.on('end', () => {
      resolve(JSON.parse(chunks.join(''), null, 2));
    });
  });
};

app.get('/api/app/form/full', async (req, res) => {
  const data = await getStream('api/app_form_full.json');
  res.send({
    code: 200,
    msg: 'OK',
    data: data,
  });
});

app.get('/api/app/form/hint', async (req, res) => {
  const data = await getStream('api/app_form_hint.json');
  res.send({
    code: 200,
    msg: 'OK',
    data: data,
  });
});

app.get('/api/app/form/mode', async (req, res) => {
  const data = await getStream('api/app_form_mode.json');
  res.send({
    code: 200,
    msg: 'OK',
    data: data,
  });
});

app.get('/api/app/form/static', async (req, res) => {
  const data = await getStream('api/app_form_static.json');
  res.send({
    code: 200,
    msg: 'OK',
    data: data,
  });
});

app.listen(3001);
