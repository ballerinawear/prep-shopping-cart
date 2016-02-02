window.onload = function(){};

var cartItems =[
  {"image": "images/cart.svg", "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, },
  { "image": "images/cart.svg", "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  {"image": "images/cart.svg", "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "image": "images/cart.svg","name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "image": "images/cart.svg","name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "image": "images/cart.svg","name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

var containerElement = document.getElementById('container');

var noItems = "";
var choice = function(counter){
	for (var j=0; j<=10; j++){
		noItems += "<option>" + j + "</option>";
		return noItems[j];
	} 

};

for (var i=0; i<cartItems.length; i++){

	// var itemName = cartItems[i].name;
	// var itemDescription = cartItems[i].description;
	// var itemPrice = cartItems[i].price;
	console.log(cartItems[i].image);


var divItem = document.createElement('div');
	divItem.className = ('name');
	divItem.innerHTML=cartItems[i].name;
	containerElement.appendChild(divItem);

// var myImage = document.createElement('div');
// 	myImage.className = ('picture');
// 	myImage.innerHTML = "<img scr='images/cart.svg>"[i];

var divImage = document.createElement('div');
	divImage.className = ('image');
	divImage.innerHTML = "<img src=" + cartItems[i].image + ">";
	document.getElementsByClassName('name')[i].appendChild(divImage);

var divDescription = document.createElement('div');
	divDescription.className = ('description');
	divDescription.innerHTML=cartItems[i].description;
	document.getElementsByClassName('name')[i].appendChild(divDescription);

var dropDown = document.createElement('select');
	dropDown.className = ('dropDown');
	dropDown.innerHTML = noItems;
	document.getElementsByClassName('name')[i].appendChild(dropDown);
	
// var choices = [0,1,2,3,4,5,6,7,8,9,10];	

// for (var j=0; j<choices.length; j++ ){
// 	var quantity = document.createElement('option');
// 		quantity.className = ('quantity');
// 		document.getElementByClassName('option')[j].appendChild(dropDown);
// }

var divPrice = document.createElement('div');
	divPrice.className = ('price');
	divPrice.innerHTML= "$ " + cartItems[i].price;
	document.getElementsByClassName('name')[i].appendChild(divPrice);


var divLine = document.createElement('div');
	divLine.className = "line";
	divLine.innerHTML = '';
	document.getElementsByClassName('name')[i].appendChild(divLine);
} 

var subtotal = document.createElement('div');
	subtotal.className = ('subtotal');
	subtotal.innerHTML="<p>Subtotal</p>";
	containerElement.appendChild(subtotal);

var total = document.createElement('div');
	total.className = ('total');
	total.innerHTML = "$ " + 0;
	containerElement.appendChild(total);

// var quantity = '';//from select menu
//  document.getElementsByClassName('dropDown').selectedIndex = '';

// var eachSubtotal = function(multiplier){
// 		return cartItems[i].price*quantity[i];
// };

// var total = 0;
// var addItUp = [];

// var cartItemTotal = function(subT){
// 	for (var i=0; i<cartItems.length; i++){
		
// 		var subtotal = cartItems[i].price * quantity[i];
// 		addItUp.push(subtotal);
// 	}
// };

// var sum = addItUp.reduce(add, 0);

// function add(a, b) {
//     return a + b;
// }

// console.log(sum);
// // var sum = function(cartTotal){
// // for (var i=0; i<addItUp.length; i++){

// // 	subTotal = subTotal + addItUp[i];
// // }
// // };

// var myTotal = subTotal;

// var divTotal = document.createElement('div');
// 	divTotal.className = ('total');
// 	divTotal.innerHTML= sum;
// 	containerElement.appendChild(divTotal);


// // getElementByClass('quantity').addEventListener('click', function(){
// //  myFunction(p1, p2);

// // });

// // function myFunction(a, b) {
// //     var result = a * b;
// //     document.getElementByClass("price").innerHTML = result;
// // }

// //update total
// var updater=document.createElement('button');
// 	updater.className = ('updater');
// 	updater.innerHTML = "<button type='button' onclick=alert('Thank You')>submit</button>";
// 	containerElement.appendChild(updater);


// //getElementByClass('update').addEventListener('click', function()){


// //}



	
