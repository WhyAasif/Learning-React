import styles from './App.module.css'
import Display from './components/Display.jsx'
import ButtonsContainer from './components/buttonContainer.jsx'

function App() {


  return ( <>
  <div id="calculator" className={styles.calculator}>
    <Display />
  <ButtonsContainer />

  </div>




    </>  )
}

export default App
