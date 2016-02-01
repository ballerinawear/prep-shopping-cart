window.onload = function(){};

var cartItems =[
  {"image": "images/jello1.jpg", "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, },
  { "image": "images/cart.svg", "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  {"image": "images/cart.svg", "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "image": "images/cart.svg","name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "image": "images/cart.svg","name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "image": "images/cart.svg","name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

var containerElement = document.getElementById('container');

for (var i=0; i<cartItems.length; i++){

	// var itemName = cartItems[i].name;
	// var itemDescription = cartItems[i].description;
	// var itemPrice = cartItems[i].price;


var divItem = document.createElement('div');
	divItem.className = ('itemName');
	//divItem.innerHTML=cartItems[i].name;
	containerElement.appendChild(divItem);

var divImage = document.createElement('div');
	divImage.className = ('cartStuff');
	divImage.innerHTML = "<img src=" + cartItems[i].image + "/>";
	document.getElementsByClassName('itemName')[i].appendChild(divImage);

var divDescription = document.createElement('div');
	divDescription.className = ('itemDescription');
	divDescription.innerHTML=cartItems[i].name + "<br>" + cartItems[i].description;
	document.getElementsByClassName('itemName')[i].appendChild(divDescription);

for (var j=0; j<10; j++){
var dropDown = document.createElement('select');
	dropDown.className = ('dropDown');
	dropDown.innerHTML = "<option>" + [j] + "</option>";
	document.getElementsByClassName('itemName')[i].appendChild(dropDown);
}

var divPrice = document.createElement('div');
	divPrice.className = ('itemPrice');
	divPrice.innerHTML= "$ " + cartItems[i].price;
	document.getElementsByClassName('itemName')[i].appendChild(divPrice);


var divLine = document.createElement('div');
	divLine.className = "line";
	divLine.innerHTML = '';
	document.getElementsByClassName('itemName')[i].appendChild(divLine);
} 

var subtotal = document.createElement('div');
	subtotal.className = ('subtotal');
	subtotal.innerHTML="<p>Subtotal</p>";
	containerElement.appendChild(subtotal);





// var total = 0;
// var addItUp = [];

// var cartItemTotal = function(subtotal){
// 	for (var i=0; i<cartItems.length; i++){
		
// 		var itemPrice = cartItems[i].price;
// 		addItUp.push(itemPrice);
// 	}
// };

// var sum = function(subTotal){
// for (var i=0; i<addItUp.length; i++){

// 	subTotal = subTotal + addItUp[i];
// }
// };

// var myTotal = subTotal;

// var divTotal = document.createElement('div');
// 	divTotal.className = ('total');
// 	divTotal.innerHTML= sum;
// 	containerElement.appendChild(divTotal);


// getElementByClass('quantity').addEventListener('click', function(){
//  myFunction(p1, p2);

// });

// function myFunction(a, b) {
//     var result = a * b;
//     document.getElementByClass("price").innerHTML = result;
// }





	
