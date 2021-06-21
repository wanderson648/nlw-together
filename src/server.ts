import express from 'express';

const app = express();


app.get('/test', (request, response) => {
  return response.json({ msg: 'Hello World' });
});

app.post('/test-post', (request, response) => {
  return response.status(201).json({ msg: 'Done'})
});


app.listen(3333, () => {
  console.log('Server is running');
})