const product = [
    { id: 1, name:"Product A", price:20.99, quantity:10},
    { id: 2, name:"Product B", price:40.99, quantity:20},
    { id: 3, name:"Product C", price:60.99, quantity:30},
    { id: 4, name:"Product D", price:80.99, quantity:40},
    { id: 5, name:"Product E", price:100.99, quantity:50},

];
function displayProduct (product) {
    console.log("available Product: ");
    product.array.forEach((product) =>{console.log('${product.id}. ${product.name} - $${product.price}');});

}

//add to cart

const cart = [];

function addToCart(productId, quantity) {
    const product = product.find((p) => p.id===productId);
    if (product && product.quantity>quantity) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
        console.log("product added to cart");
    
    }else {
         console.log("product not found");
        }
}

//user checkout
function checkout () {
    let total = 0 ;
    cart.forEach((item) => {
        total += item.price * item.quantity;
    });
    console.log('total:$${total.toFixed(2)}');

}
