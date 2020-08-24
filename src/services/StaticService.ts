import {static_products} from "../_static_data/products";

export class StaticService {

    static getStaticProducts = () => {
        return new Promise((resolve, reject) => {
            let products = [];    //todo add type of product
            products = static_products;

            if (products.length > 0)
                resolve({status: 200, data: products});
            else reject({status: 500, message: 'Cannot react data'})

        })
    };

}