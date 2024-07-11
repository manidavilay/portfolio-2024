"use client";
import classNames from 'classnames';
import Image from 'next/image'
import styles from './styles.module.scss'

const Header = () => {
    return (
       <header className="relative flex items-center justify-center w-11/12 mt-10 mx-auto">
        <Image src="/assets/logos/mv-logo.svg" width={130} height={45} alt="Manida VILAY's logo" className={classNames(styles.logo, 'absolute')} />
        <div className={styles.menu}>
            <button className={styles.menu__button}>about</button>
            <button className={styles.menu__button}>works</button>
        </div>
       </header>
    )
}

export default Header