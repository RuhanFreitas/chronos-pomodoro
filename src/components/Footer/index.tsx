import { Link } from 'react-router'
import styles from './styles.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to={'/about-pomodoro'}>
                Understanding the Pomodoro Technique 🍅
            </Link>
            <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>
    )
}
