const express = require('express')

const images = require('./routes/imageRouter');

const app = express();
const port = 4000;

// TODO
// 1. Check file exists function
// 2. Read file function
// 3. Test image processor function

app.use("/", images);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
