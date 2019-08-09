import express from 'express';
import bodyParser from 'body-parser';
import users from './mocks/users';
import cors from 'cors'
import logger from './middleware/logger';
import withAuthenticated  from './middleware/withAuthentication';
import getUserRoutes  from './routes/users';
import getProductsRoutes from './routes/products';
import db from '../db/index';
import getAuthRoutes from './routes/auth';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT;
app.use(withAuthenticated);
app.use(logger);
getUserRoutes(app);
getProductsRoutes(app);
getAuthRoutes(app);

app.get('/heartbeat',(req, res) => res.send({datetime: new Date().toJSON()}));



app.listen(port, () => {
  console.log(`Example app listen on port ${port}`)
});