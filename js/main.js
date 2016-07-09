  $(".result").hover(function(){
    $(".textOutPut").animate({"top": "-60px" });
    }, function(){
    $(".textOutPut").animate({"top": "0px" });
});
  // var for the cocktail names and ingredients
var cocktail = [
	{
		name: "white russian",
		ing: "vodka, Coffee Liq and cream", 
		imageName: "img/white-russian.jpg"
	},
	{
		name: "cosmopolitan",
		ing:"Vodka, cranberry juice and lime juice ",
		imageName: "img/cosmopolitan.jpg"
	},
	{
		name: "margarita",
		ing: "Tequila, lime juice and triple sec ",
		imageName: "img/margarita.jpg"
	},
	{
		name: "whiskey sour",
		ing: "whiskey, lemonjuice and simple syrup ",
		imageName: "img/whiskey-sour.jpg"
	},
	{
		name: "negroni",
		ing: "Gin, sweet vermouth, and Campari bitter ",
		imageName: "img/negroni.jpg"
	},
	{
		name: "long island",
		ing: "Vodka, Gin, Rum, Tequila, Triple sec lemon juice and coca",
		imageName: "img/long-island.jpg"
	},
	{
		name: "gin tonic",
		ing: "Gin, tonic and lemon juice",
		imageName: "img/gin-tonic.jpg"
	},
	{
		name: "mai tai",
		ing: "gold rum, light rum pinneapple",
		imageName: "img/mai-tai.jpg"
	},
	{
		name: "irish gold",
		ing: "Jameson's whiskey and some other stuff",
		imageName: "img/irish-gold.jpg"
	},
	{
		name: "malibu bay",
		ing: "malibu, light rum and cranberry juice",
		imageName: "img/malibu-bay.jpg"
	}

	]

// if searched by the input 
 function searchCocktail(){

 // var for geeting the value of the searched cocktail
var searchedCocktail = document.getElementById("searchedCocktail").value.toLowerCase()
// setting the text output
var textOutPut = document.getElementById("textOutPut")
// setting the image output
var cocktailImg = document.getElementById("cocktailImg")
//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")




	for (var i = 0; i < cocktail.length; i++) {

		if ( searchedCocktail == cocktail[i].name ) {
		console.log("it is working")

		cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)

		return
		}	
	
	}
		console.log("it is not working")
}

//=====================================================================================
// for cocktail buttons 

// General scope vars

// setting the text output
var textOutPut = document.getElementById("textOutPut")
// setting the image output
var cocktailImg = document.getElementById("cocktailImg")



// FIRST BUTTON
function getWhiteRussian() {

var i = 0

//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")


cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 2nd BUTTON
function getCosmopolitan() {
	i = 1

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 3rd BUTTON
function getMargarita() {
	i = 2

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 4th BUTTON
function getWhiskeySour() {
	i = 3

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 5th BUTTON
function getNegroni() {
	i = 4

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 6th BUTTON
function getLongIsland() {
	i = 5

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 7th BUTTON
function getGinTonic() {
	i = 6

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 8th BUTTON
function getMaiTai() {
	i = 7

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 9th BUTTON
function getIrishGold() {
	i = 8

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}

// 10th BUTTON
function getMalibuBay() {
	i = 9

	//creating h2 and p tags for the output 
var name = document.createElement("h2")
var ingredients = document.createElement("p")
var image = document.createElement("img")



cocktailName = document.createTextNode(cocktail[i].name)
		cocktailIng = document.createTextNode(cocktail[i].ing)

		cocktailImg.setAttribute("src", cocktail[i].imageName)
		name.appendChild(cocktailName)
		ingredients.appendChild(cocktailIng)

		textOutPut.appendChild(name)
		textOutPut.appendChild(ingredients)
}