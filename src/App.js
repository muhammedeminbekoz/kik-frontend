import { useEffect } from 'react';
import Test from './test';
import styles from './App.module.css';
function App() {



  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      //eğer development'sa bişeyler bişeyler yap
    }
  })

  return (

    <div className={styles.App} >


      <h3> {process.env.NODE_ENV} </h3>
      <p> {process.env.REACT_APP_API_URL} </p>
      <Test />
    </div>
  );
}

export default App;
