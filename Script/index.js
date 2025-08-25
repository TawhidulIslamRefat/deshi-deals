// console.log("connected to html file");

function getElement(id){
    const element = document.getElementById(id);
    return element;
}
// traverse technique
 const cardBtns = document.getElementsByClassName("card-btn");
//  console.log(cardBtns);
 for (let cardButton of cardBtns) {
    // console.log(cardButton);
    cardButton.addEventListener("click",function(){
        const productImg =cardButton.parentNode.parentNode.childNodes[1].childNodes[1].src;
        // console.log(productImg);
        const productTitle = cardButton.parentNode.parentNode.children[1].children[1].innerText;
        // console.log(productTitle);
        const productPrice = cardButton.parentNode.parentNode.children[1].children[2].children[0].innerText;
        // console.log(productPrice);
        const totalPrice = getElement("total-price").innerText;
        const currentTotal = Number(productPrice) + Number(totalPrice);
        getElement("total-price").innerText = currentTotal;
        const cardContainer = getElement("card-container");
        const newcart = document.createElement("div")
        newcart.innerHTML =`
        <div class="bg-gray-200 rounded-xl flex justify-between items-center p-5">
                 <img src="${productImg}" alt="" class="w-15">
                 <div class="">
                  <h2 class="font-bold"> ${productTitle}</h2>
                  <h2 class="">${productPrice}TK</h2>
                 </div>
              </div>
        `;
        cardContainer.append(newcart);
        const quantity = getElement("total-items").innerText;
        const currentQuaintity = Number(quantity) + 1;
        getElement("total-items").innerText = currentQuaintity;
    })
 }

 document.getElementById("clear-btn").addEventListener("click",function(){
    const cardContainer = getElement("card-container");
    cardContainer.innerHTML = "";
    getElement("total-items").innerText = 0;
    getElement("total-price").innerText = 0;
 })

// treaditionl way
// document.getElementById("card-btn-1").addEventListener("click",function(){
//     const title = getElement("card-title-1").innerText;
//     const price = getElement("card-price-1").innerText;
//     // console.log(title,price);
//     const totalPrice = getElement("total-price").innerText;
//     let currentTotal = Number(price) + Number(totalPrice);
//     // console.log(price,totalPrice,currentTotal);
//     getElement("total-price").innerText = currentTotal;
//     // keep card container
//     const cardContainer = getElement("card-container");
//     // create new card
//     const newCard = document.createElement("div");
//     newCard.innerHTML = `
//      <div class="bg-gray-200 rounded-xl flex justify-between items-center p-5">
//                  <img src="./assets/kitchen-1.png" alt="" class="w-15">
//                  <div class="">
//                   <h2 class="font-bold"> ${title}</h2>
//                   <h2 class="">${price}TK</h2>
//                  </div>
//               </div>
//     `;
//     cardContainer.append(newCard)
// })