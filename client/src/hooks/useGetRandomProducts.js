
// custom hook returns a function that can return the random products
// inner function recieves an array of products and num of random products to be returned (no duplicates)
// array of products must be longer than num of random products to be returned
export default function useGetRandomProducts() {
    
    const getRandomProd = (products, numOfProducts) => {
        const productsLen = products?.length;

        if(productsLen > 1 && productsLen > numOfProducts){
            let randomProductsArray = [];
            let randomNumsArray = [];
            
            while(randomNumsArray.length < numOfProducts){
                let randomNum = Math.floor(Math.random() * productsLen);
                
                if(!randomNumsArray.includes(randomNum)) randomNumsArray.push(randomNum);
            }
            
            for(let i=0; i<numOfProducts; i++){
                randomProductsArray.push(products[randomNumsArray[i]]);
            }
            
            return randomProductsArray;
        }
        
        return products;
    }

    return getRandomProd;
}
