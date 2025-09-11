import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>('dark')

    const handleToggleTheme = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className={styles.menu}>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Go to Home"
                title="Go to Home"
            >
                <HouseIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Go to History"
                title="Go to History"
            >
                <HistoryIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Go to Settings"
                title="Go to Settings"
            >
                <SettingsIcon />
            </a>
            <a
                className={styles.menuLink}
                href="#"
                aria-label="Toggle Theme"
                title="Toggle Theme"
                onClick={handleToggleTheme}
            >
                <SunIcon />
            </a>
        </div>
    )
}
