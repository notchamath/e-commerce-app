
// custom hook recieves an array and num of random products to be returned
export default function useGetRandomProducts(products, numOfProducts) {
    
    if(products.length > 1){
        let randomProductsArray = [];
        let randomNumsArray = [];

        while(randomNumsArray.length < numOfProducts){
            let randomNum = Math.floor(Math.random() * products.length);

            if(!randomNumsArray.includes(randomNum)) randomNumsArray.push(randomNum);
        }

        for(let i=0; i<numOfProducts; i++){
            randomProductsArray.push(products[randomNumsArray[i]]);
        }

        return randomProductsArray;
    }
    
    return products;
}
