let selectedItems = [];

function Make_a_slideshow(id){
  var slideIndex = 0,
      container = document.getElementById(id);

  function showSlides(){
      var slides = container.querySelectorAll('.mySlides');
      for (var i = 0; i < slides.length; i++){
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length){
          slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
  }
  showSlides();
}

//start slideshow 1
Make_a_slideshow('slideshow1')

//delay 1 second before starting slideshow 2
setTimeout(function(){
  Make_a_slideshow('slideshow2');
}, 1000);

Make_a_slideshow('slideshow3');

setTimeout(function(){
  Make_a_slideshow('slideshow4');
}, 1000);


function addToCart(productName, price) {

	selectedItems.push({productName: productName, price: price});	
	alert("CONGRATS! YOUR ITEM HAS BEEN ADDED TO THE CART");		
}

function openShoppingCart() {
	localStorage.setItem('selectedItems', JSON.stringify(selectedItems));	
	
	window.open("../shopping cart/cart.html", "_self");
}

function retrieveSelectedItems() {

	let selectedItemString = localStorage.getItem('selectedItems');
	let selectedItemArray = JSON.parse(selectedItemString);
		
	let productsInFormat = "";
	for (var i = 0; i < selectedItemArray.length; i++) {
	    productsInFormat += "Product: " + selectedItemArray[i].productName + ". Price: " + selectedItemArray[i].price + "<br>";
	}

	document.getElementById("shopping-cart-items").innerHTML = productsInFormat;	
}
