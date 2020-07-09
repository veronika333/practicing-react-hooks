import { useState } from 'react';

const useProduct = (init) => {
    const [product, setProduct] = useState(init);
    return ( 
{
    product,
    removeUnhealthyProduct(){
        const filteredProducts = product.filter(value=> value.calories < 250);
        setProduct(filteredProducts);
    },
    removeOneProduct(item){
        const removeOneProduct = product.filter(value => value.name !== item);
        setProduct(removeOneProduct);
    },
    saveProduct(index, newVal){
        const copyProducts = [...product];
        copyProducts[index].name = newVal;
    }
}
     );
}
 
export default useProduct;
