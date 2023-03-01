import express,{ Application,Request,Response,NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import "dotenv/config";
import bodyParser from 'body-parser';
import Routes from './route';
import Connect from './connect';
import * as productCRUD from './controller/product-crud';
//import * as productCRUD from './controller/product-crud-mongo';

const app : Application = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req:Request,res : Response ) => {
    res.send('TS App is Running')
})

const PORT = process.env.PORT;
const URL_MONGODB = process.env.URL_MONGODB;
const USR_MONGODB = process.env.USR_MONGODB;
const PSW_MONGODB = process.env.PSW_MONGODB;

const db = `mongodb+srv://${USR_MONGODB}:${PSW_MONGODB}@${URL_MONGODB}`;

Connect({ db });
Routes({ app })

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})

app.get('/products', productCRUD.GetProductList);

app.post('/products', productCRUD.CreateProduct);

app.post('/update-product', productCRUD.UpdateProduct);

app.post('/delete-product', productCRUD.DeleteProduct);
