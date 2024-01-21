import {products} from './constants/data.js';
import Product from './models/productSchema.js';

const DefaultData = async () => {
    try {
            await Product.deleteMany({});
            await Product.insertMany(products);
            console.log('Data imported Successfully');
            
    } catch (error) {
        console.log('Error while inseting default data',error.message);
    }
}
export default DefaultData