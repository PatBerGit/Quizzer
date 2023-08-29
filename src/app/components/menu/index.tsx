import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Menu(){

return(
    <>
    <menu className={styles.menuList}>
        <ul className={styles.menuList}>
            <Link href={'/'} className={styles.link}><li className={styles.menuItem}>How to play</li></Link>
            <Link href={'/'} className={styles.link}><li className={styles.menuItem}>Highscores</li></Link>
        </ul>
    </menu>
    </>
);


}