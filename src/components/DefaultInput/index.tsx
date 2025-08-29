import styles from './styles.module.css'

type DefaultInput = {
    id: string
    labelText: string
} & React.ComponentProps<'input'>

export const DefaultInput = ({
    id,
    labelText,
    type,
    ...rest
}: DefaultInput) => {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    )
}
