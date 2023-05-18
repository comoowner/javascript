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
        name:"bmw1",
        image:"bmw.png",
        price:999999,
    },
    {
        id:2,
        name:"bmw2",
        image:"bmw.png",
        price:999999,
    },
    {
        id:3,
        name:"bmw3",
        image:"bmw.png",
        price:999999,
    },
    {
        id:4,
        name:"bmw4",
        image:"bmw.png",
        price:999999,
    },
    {
        id:5,
        name:"bmw5",
        image:"bmw.png",
        price:999999,
    },
    {
        id:6,
        name:"bmw6",
        image:"bmw.png",
        price:999999,
    },
];
const cartItems=document.querySelector("#cart-items");
const cartTotal=document.querySelector("#cart-total");

let cart=[]

/*const handlePlusBtn=function(event){
  console.dir(event.target)
}*/

const handleDeleteBtn=function(event){
  event.target.parentElement.remove()
  console.log(sum)
}

const showTotalPrice=function(){
  let sum=0
  cartItems.innerHTML=""
  cart.forEach(car=>{
  const li=document.createElement("li")
  /*const plusButton=document.createElement("button")
  plusButton.innerText="+"
  const minusButton=document.createElement("button")
  minusButton.innerText="-"*/
  const deleteButton=document.createElement("button")
  deleteButton.innerText="❌"
  li.innerText=`${car.name} : ${car.price}x${car.quantity}`
  li.appendChild(deleteButton)
  //li.appendChild(plusButton)
  //li.appendChild(minusButton)
  cartItems.appendChild(li)
  sum+=car.price*car.quantity
  //plusButton.addEventListener("click", handlePlusBtn)
  //minusButton.addEventListener("click", handleMinusBtn)
  deleteButton.addEventListener("click", handleDeleteBtn)
  })
  cartTotal.innerText=`Total Price : ${sum}$`
}

const updateCart = function(index) {
    return function(event) {
      event.preventDefault();
  
      const car = cars[index];
      const existingItem = cart.find(item => item.id === car.id);
  
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          id: car.id,
          name: car.name,
          price: car.price,
          quantity: 1
        });
      }
      showTotalPrice();
    };
  };

const createCarLists=function(){
    cars.forEach((value, index)=>{
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
    button.addEventListener("click", updateCart(index))
    })
}
createCarLists()




