import styles from './styles.module.css'
import { RouterLink } from '../RouterLink'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <RouterLink href="/about-pomodoro">
                Understanding the Pomodoro Technique 🍅
            </RouterLink>
            <RouterLink href="/">
                Chronos Pomodoro &copy; {new Date().getFullYear()}
            </RouterLink>
        </footer>
    )
}
