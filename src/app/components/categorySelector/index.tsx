import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export default function CategorySelector(){
    return(
        <>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Image src={'/../public/img/movieClapper.png'} alt={'Movies'} width='100' height='100'></Image>
                <p>Movies</p>
            </div>
            <div className={styles.card}>
                <Image src={'/../public/img/movieClapper.png'} alt={'Sports'} width='100' height='100'></Image>
                <p>Sports</p>
            </div>
            <div className={styles.card}>
                <Image src={'/../public/img/movieClapper.png'} alt={'Sports'} width='100' height='100'></Image>
                <p>Celebrities</p>
            </div>
            <div className={styles.card}>
                <Image src={'/../public/img/movieClapper.png'} alt={'Sports'} width='100' height='100'></Image>
                <p>Countries</p>
            </div>
        </div>
        <button className={styles.startButton}>Start quiz</button>
        </>
    );
}