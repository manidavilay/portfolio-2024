"use client";
import classNames from 'classnames';
import useIsMobile from '@/app/hooks/useIsMobile';
import Image from 'next/image'
import styles from './styles.module.scss'

interface Props {
    isItemOpened: boolean
    setIsItemOpened: (value: boolean) => void
    openedItem: string | null
    setOpenedItem: (item: string | null) => void
}

const Header = ({isItemOpened, setIsItemOpened, openedItem, setOpenedItem}: Props) => {
    const isMobile = useIsMobile();

    const openMenuItem = (item: string) => {
        if (!isItemOpened) {
            setOpenedItem(item)
        }
    }

    return (
       <header className="relative flex items-center md:justify-center justify-end w-11/12 md:mt-10 mt-6 mx-auto">
        <Image src="/assets/logos/mv-logo.svg" width={!isMobile ? 130 : 100} height={!isMobile ? 45 : 35} alt="Manida VILAY's logo" className={classNames(styles.logo, 'absolute')} />
        <ul className={classNames(styles.menu, "flex")}>
            <li>
                <button className={styles.menu__button} onClick={() => openMenuItem('about')}>about</button>
            </li>
            <li>
                <button className={styles.menu__button} onClick={() => openMenuItem('works')}>works</button>
            </li>
        </ul>
       </header>
    )
}

export default Header