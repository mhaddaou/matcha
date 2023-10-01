import express from 'express'
import router from './routes/AllRoutes';

var cors = require('cors')

const app = express();


app.use(cors());

app.use(router);

export default app;