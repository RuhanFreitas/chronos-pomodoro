import styles from './styles.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="">Understanding the Pomodoro Technique 🍅</a>
            <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>
    )
}
