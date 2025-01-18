import css from "./Item.module.css";



const Item = (props) => { 
  return (
    <li className={css['kg-item']}>
      <span className={css["kg-span"]}>{props.foodItem} </span>
    </li>
  );
};

export default Item;
