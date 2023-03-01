import * as ProductService from '../service/product-crud.service';
import { Product } from '../model/product';

export const GetProductList = async (req:any, res:any) => {
    const productList: Product[] = await ProductService.getAllProducts();
    console.log(`in get ${JSON.stringify(productList)}`)
    try {
        res.status(200).send(
            productList);
    } catch ({message}) {
        res.status(404).send(message);
    }
};

export const CreateProduct = async (req:any, res:any) => {
    const product: Product = req.body;
    await ProductService.createProducts(product);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
    } catch ({message}) {
        res.status(404).send(message);
    }
};

export const UpdateProduct = async (req:any, res:any) => {
    const product: Product = req.body;
    await ProductService.updateProducts(product);
    try {
        res.status(200).send({
            message: "Successfully updated",
            IsSuccess: true,
            result: ""
        });
    } catch ({message}) {
        res.status(404).send(message);
    }
};

export const DeleteProduct = async (req:any, res:any) => {
    const productID: number = req.body['id'];
    await ProductService.deleteProducts(productID);
    try {
        res.status(200).send({
            message: "Successfully deleted",
            IsSuccess: true,
            result: ""
        });
    } catch ({message}) {
        res.status(404).send(message);
    }
};
