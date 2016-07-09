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

