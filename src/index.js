 import express from 'express';
 import {dirname, join} from 'path';
 import {fileURLToPath} from 'url';
 import indexRoutes from "../src/routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(indexRoutes);

app.set('views',join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(join(__dirname,'public')));

app.listen(3000);
console.log("Iniciando servidor en puerto 3000")