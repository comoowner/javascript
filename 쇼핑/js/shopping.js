/*
1.Product List: Display a list of products with details such as name, description, price, and image.
2.Add to Cart: Allow users to add products to the cart by clicking an "add to cart" button on each product card.
3.Cart: Display a summary of the products in the cart, including their name, price, quantity, and total price.
4.Increase/Decrease Quantity: Allow users to increase or decrease the quantity of each product in the cart.
5.Remove Items: Allow users to remove items from the cart by clicking a "remove" button.
6.Checkout: Provide a checkout process that includes a form for shipping and billing information, and a button to confirm the purchase.
7.Persistence: Store the cart items in the browser's local storage to persist the cart data across sessions.*/

const carLists=document.querySelector("#car-lists")
const cars=[
    {
        id:1,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
    {
        id:2,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
    {
        id:3,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
    {
        id:4,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
    {
        id:5,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
    {
        id:6,
        name:"bmw",
        image:"bmw.png",
        price:999999,
    },
];

const addCart=function(event){
    event.preventDefault();
    console.log(event.target.parentElement.children[1].innerText)
}

const createCarLists=function(){
    cars.forEach((value)=>{
    const car=document.createElement("div")
    const img=document.createElement("img")
    img.src=`img/${value.image}`
    img.width="100"
    img.height="100"
    const name=document.createElement("div")
    name.innerText=value.name
    const price=document.createElement("div")
    price.innerText=value.price
    const button=document.createElement("button")
    button.innerText="add to cart"
    car.appendChild(img)
    car.appendChild(name)
    car.appendChild(price)
    car.appendChild(button)
    carLists.appendChild(car)
    button.addEventListener("click", addCart)
    })
}
createCarLists()


