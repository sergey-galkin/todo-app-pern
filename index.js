const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes");

const cwd = process.cwd();
const envFileName = process.env.NODE_ENV === 'development' ? '.env' : '.env.production'
dotenv.config({path: path.join(cwd, envFileName)});

const app = express();
app.listen(process.env.APP_PORT);

app.use(express.json());

const staticFolder = path.join(cwd, 'public');
app.use('/', express.static(staticFolder));

routes(app);