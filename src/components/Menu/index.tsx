import {
    HistoryIcon,
    HouseIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

type AvailableThemes = 'dark' | 'light'

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme =
            (localStorage.getItem('theme') as AvailableThemes) || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    const handleToggleTheme = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div className={styles.menu}>
            <Link
                className={styles.menuLink}
                to="/"
                aria-label="Go to Home"
                title="Go to Home"
            >
                <HouseIcon />
            </Link>
            <Link
                className={styles.menuLink}
                to="#"
                aria-label="Go to History"
                title="Go to History"
            >
                <HistoryIcon />
            </Link>
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
                {nextThemeIcon[theme]}
            </a>
        </div>
    )
}
