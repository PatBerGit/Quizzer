import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Menu(){

return(
    <>
    <menu className={styles.menuList}>
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>How to play</li>
            <li className={styles.menuItem}>Highscores</li>
        </ul>
    </menu>
    </>
);


}