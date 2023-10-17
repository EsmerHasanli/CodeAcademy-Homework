function Product(name, salePrice, costPrice,stockQuantity, soldQuantity=0, isDiscounted=false, discountPercentage=0){
    if(this.salePrice<this.costPrice){
        console.log(`wrong input`);
    }

    this.name = name,
    this.salePrice = salePrice,
    this.costPrice = costPrice,
    this.stockQuantity = stockQuantity,  
    this.soldQuantity = soldQuantity,    
    this.isDiscounted = isDiscounted,   
    this.discountPercentage = discountPercentage,    

    this.profit = function (){
        return this.salePrice- this.costPrice;
    }

    this.sell = function(sellQuanity){
        if(sellQuanity<=stockQuantity){
            this.stockQuantity = stockQuantity-sellQuanity
            this.soldQuantity = soldQuantity + sellQuanity
        }
        else{
            console.log(`we dont have enough products`)
        }
    }
}


let product1 = new Product ("Lipstick", 20, 15, 200, 50)
let product2 = new Product ("Eyeshadow", 30, 20, 300, 120, true, 20)
let product3 = new Product ("Blush", 35, 30, 250, 100, false, 0)
let product4 = new Product ("Mascara", 45, 30, 200, 100, false, 0)
let product5 = new Product ("Powder", 60, 45, 300, 400, false, 0)


product1.sell(10)
console.log(product1)


let products = []
products.push(product1)
products.push(product2)
products.push(product3)
products.push(product4)
products.push(product5)
console.log(products)



let totalProfit = 0
let total = function(){
    for (let i = 0; i < products.length; i++) {
        totalProfit += products[i].profit
    }
}
console.log("total profit from this products " + totalProfit);


let check = this.isDiscounted
let discount = function(){
   for (let i = 0; i < products.length; i++) {
       if(check==true){
            return check
        }
    }
}
console.log(check)