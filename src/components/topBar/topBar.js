import styles from './topBar.module.css'; // Import css modules stylesheet as styles
import { useState, useEffect  } from 'react';

const TopBar = () => {

    const [pathname, setPathname] = useState('');

    // gets a value from the current route 
    useEffect(() => {
        setPathname(window.location.pathname.substring(1))
      });
    
    return (
       // gets a value from the current route and displays on header
        <div className={styles.topBar}>
         <p>Regis / {`${pathname.charAt(0).toUpperCase() +  pathname.slice(1)}`}</p>
         <p> {`${pathname.charAt(0).toUpperCase() +  pathname.slice(1)}`}</p>
        </div>
        
    )
}

 export default TopBar