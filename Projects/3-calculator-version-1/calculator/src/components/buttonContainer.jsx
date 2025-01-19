import styles from "./buttonContainer.module.css";

const ButtonsContainer = () => {
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
    "00",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttoncnt}>
      {buttons.map((items) => (
        <button key={items} className={styles.button}>{items}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
