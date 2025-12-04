import { useEffect } from 'react';
import Test from './test';
import styles from './App.module.css';
import { Title } from './Component';



function App() {



  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      //eğer development'sa bişeyler bişeyler yap
    }
  })

  return (

    <div className={styles.App} >


      <Title> {process.env.NODE_ENV} </Title>
      <Title theme={'dark'}> {process.env.NODE_ENV} </Title>

      <p> {process.env.REACT_APP_API_URL} </p>
      <Test />
    </div>
  );
}

export default App;
