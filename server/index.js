import express from 'express';
import bodyParser from 'body-parser';
import users from './mocks/users';
import cors from 'cors'
import logger from './middleware/logger';
import withAdminPermission from './middleware/withAdminPermission';
import withAuthenticated  from './middleware/withAuthentication';
import getUserRoutes  from './routes/users';
import getProductsRoutes from './routes/products';
import db from '../db/index';
import getAuthRoutes from './routes/auth';
import getOrderRoute from './routes/orders';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT;
app.use(withAuthenticated);
app.use(withAdminPermission);
app.use(logger);
getUserRoutes(app);
getProductsRoutes(app);
getAuthRoutes(app);
getOrderRoute(app);

app.get('/heartbeat',(req, res) => res.send({datetime: new Date().toJSON()}));



app.listen(port, () => {
  console.log(`Example app listen on port ${port}`)
});