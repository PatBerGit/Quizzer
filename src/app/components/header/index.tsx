import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link className={styles.logoLink} href={'/'}>
                    <p className={styles.logo}>Q</p>
                </Link>
            </div>
            
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Quizzer</h1>
            </div>
            <Link href={"/settings"}>
                <Image className={styles.settings} src={"/../public/img/cogwheel.png"} alt="settings" width="100" height="100"></Image>
            </Link>
            <nav className="navBar"></nav>

        </header>
        </>
    );
}