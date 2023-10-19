// Bertipe Object

const restaurant = {
    name: "SS",
    city: "Sukabumi",
    favoriteDrink: "Coffe",
    favoriteFood: "Chicken Katsu",
    isVegan: false,
  };
  
  const { name, city, favoriteDrink, favoriteFood, isVegan } = restaurant;
  console.log("Nama : " + name);
  console.log("Kota : " + city);
  console.log("Minuman Favorit : " + favoriteDrink);
  console.log("Makanan Favorit : " + favoriteFood);
  console.log("Vegan : " + isVegan);