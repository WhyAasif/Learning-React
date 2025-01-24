import styles from "./buttonContainer.module.css";

const ButtonsContainer = ({Onclickbtn}) => {
  const buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "<",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttoncnt}>
      {buttons.map((items) => (
        <button key={items} className={styles.button} onClick={()=>Onclickbtn(items)}>{items}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
