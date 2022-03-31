import React from 'react';
import TopBar from '../../components/topBar/topBar'
import P2eToolsSvg from './p2eToolsSvg'
import styles from './SelectUserType.module.css'; // Import css modules stylesheet as styles
import loginImage from './login_signup_background.png';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const SelectUserType = () => {

  return (

    <div className={styles.pageContainer}>
      <div className={styles.userTypeContainer}>
        <div className={styles.userTypeIllustration}>
          <img src={loginImage}></img>
        </div>
        <div className={styles.selectUserType}>
          <div className={styles.p2eImageContainer}>{<P2eToolsSvg />}</div>
          <p>I am a...</p>
          {<Link to="/player"> <div className={styles.userTypeButton}> <a href="player"></a> <p>Player</p></div></Link>}
          <hr></hr>
          {/* <a href="player"></a>  */ <Link to="/owner">  <div className={styles.userTypeButton}> <p>Owner</p> </div> </Link>}
        </div>
      </div>
    </div>

  );

}

export default SelectUserType