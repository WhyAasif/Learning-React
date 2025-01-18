import Item from "./Item";




const FoodItems = () => { 
  let foodItems = [
    "Burger",
    "Pizza",
    "Pasta",
    "Noodles",
    "Ice Cream",
    "Cold Drink",
    "Hot Dog",
    "Sandwich",
    "French Fries",
    "Momos",
  ];  

return (
  <ul className="list-group">

    {foodItems.map((item) =>(
      <Item key = {item} foodItem = {item}> </Item>
    ))}

  </ul> 
)

}

export default FoodItems;