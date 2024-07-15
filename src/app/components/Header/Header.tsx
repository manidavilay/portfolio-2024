"use client";
import classNames from 'classnames';
import useIsMobile from '@/app/hooks/useIsMobile';
import Image from 'next/image'
import styles from './styles.module.scss'

interface Props {
    isItemOpened: boolean
    setIsItemOpened: (value: boolean) => void
}

const Header = ({isItemOpened, setIsItemOpened}: Props) => {
    const isMobile = useIsMobile();

    const openMenuItem = () => {
        if (!isItemOpened) {
            setIsItemOpened(true)
        }
    }

    return (
       <header className="relative flex items-center md:justify-center justify-end w-11/12 md:mt-10 mt-6 mx-auto">
        <Image src="/assets/logos/mv-logo.svg" width={!isMobile ? 130 : 100} height={!isMobile ? 45 : 35} alt="Manida VILAY's logo" className={classNames(styles.logo, 'absolute')} />
        <div className={styles.menu}>
            <button className={styles.menu__button} onClick={openMenuItem}>about</button>
            <button className={styles.menu__button}>works</button>
        </div>
       </header>
    )
}

export default Header