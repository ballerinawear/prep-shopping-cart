window.onload = function(){};

var cartItems =[
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

var containerElement = document.getElementById('container');

for (var i=0; i<cartItems.length; i++){
	// console.log(cartItems[i].name);
	// console.log(cartItems[i].description);
	// console.log(cartItems[i].price);

// var itemName = cartItems[i].name;
// var itemDescription = cartItems[i].description;
// var itemPrice = cartItems[i].price;

var divItem = document.createElement('div');
	divItem.className = ('item');
	divItem.innerHTML=cartItems[i].name;
	containerElement.appendChild(divItem);

var divDescription = document.createElement('div');
	divDescription.className = ('description');
	divDescription.innerHTML=cartItems[i].description;
	containerElement.appendChild(divDescription);

var divPrice = document.createElement('div');
	divPrice.className = ('price');
	divPrice.innerHTML= "$ " + cartItems[i].price;
	containerElement.appendChild(divPrice);
}

var divLine = docuemnt.createElement('div');
	divLine.className = "line";
	divLine.innerHTML = '';
	containerElement.appendChild(divLine);


var divImage = document.createElement('img');
	
	divImage.src = images/cart.svg;
	divImage.innerHTML = divImage.src;
	containerElement.appendChild(divImage);
/*var divImage = document.createElement('img');
	divImage.className = ('image');
	img.src = "images/cart.svg";
	divImage.innerHTML=img.src;
	document.getElementById('top').appendChild(divImage);
	//src.appendChild(divImage);
	containerElement.appendChild(divImage);*/

/*function image() {
	var img = document.createElement("IMG");
	img.src = "images/cart.svg";
	document.getElementById('image').appendChild(img);*/








	
