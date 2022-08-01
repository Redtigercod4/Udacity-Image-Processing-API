import express from 'express';
import processor from './components/processor';

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello World!')
});

const name = "icelandwaterfall";

processor(name, 200, 200);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});