const express = require("express");
const PORT = 8080;
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
require('./config/db.ts')
const user_router = require('./routers/user.router.ts');

app.use('/api/users', user_router);

app.listen(PORT, () => {
  console.log(`app listening on PORT:${PORT}`);
});












  

  