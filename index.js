const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes");

const cwd = process.cwd();
const envFileName = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({path: path.join(cwd, envFileName)});

const app = express();
app.listen(process.env.APP_PORT);

app.use(express.json());
app.use(require('./db/session'));

const staticFolder = path.join(cwd, 'public');
app.use('/', express.static(staticFolder));

routes(app);