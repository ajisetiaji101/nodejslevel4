const express = require("express");
const app = express();
const cors = require("cors");
const compress = require("compression");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(compress());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
