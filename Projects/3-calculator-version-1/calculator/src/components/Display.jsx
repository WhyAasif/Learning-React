import styles from './Display.module.css';


const Display = ({calVal}) => {

  return( <input type="text" name="Display" value={calVal} readOnly  className={styles.display} />);
}

export default Display;