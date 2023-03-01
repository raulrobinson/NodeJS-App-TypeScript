import { Product } from '../model/product';
import Products from "../model/product-schema";

export const GetProductList = async (req:any, res:any) => {
    Products.find((err: any, result: any) => {
        if (err) {
            res.send("Error!");
        } else {
            console.log(JSON.stringify(result))
            res.send(result);
        }
    });
};

export const CreateProduct = async (req:any, res:any) => {
    const newProduct = new Products({
        productName: req.body.productName,
        productCode: req.body.productCode,
        prodDescription: req.body.prodDescription,
        prodRating: req.body.prodRating
    });
    newProduct.save().then(() => {
        //console.log(JSON.stringify(res));
        res.send(res);
    }).catch((err) => {
        console.log(err);
    });
    // const request: Product = req.body;
    // console.log(JSON.stringify(request))
    // const prod = new Products(request);
    // // @ts-ignore
    // await prod.save((err:any, result: any) => {
    //     if (err) {
    //         res.send("Error!");
    //     } else {
    //         console.log(JSON.stringify(result))
    //         res.send(result);
    //     }
    // });
};

export const UpdateProduct = async (req:any, res:any) => {
    const product: Product = req.body;
};

export const DeleteProduct = async (req:any, res:any) => {
    const productID: number = req.body['id'];
};
