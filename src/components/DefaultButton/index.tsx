import styles from './styles.module.css'

type DefaultButton = {
    icon: React.ReactNode
    color: 'red' | 'gray'
} & React.ComponentProps<'button'>

export const DefaultButton = ({
    icon,
    color = 'red',
    ...props
}: DefaultButton) => {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    )
}
