import styles from './Heading.module.css'

export const Heading = (props) => {
    return <h1 className={styles.heading}>{props.children}</h1>
}
