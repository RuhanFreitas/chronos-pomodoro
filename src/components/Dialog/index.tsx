import { ToastContentProps } from 'react-toastify'
import { DefaultButton } from '../DefaultButton'
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

import styles from './styles.module.css'

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
    return (
        <>
            <div className={styles.container}>
                <p>{data}</p>

                <div className={styles.buttonsContainer}>
                    <DefaultButton
                        onClick={() => closeToast(true)}
                        icon={<ThumbsUpIcon />}
                        aria-label="Confirm action and close"
                        title="Confirm action and close"
                        color="red"
                    />
                    <DefaultButton
                        onClick={() => closeToast(false)}
                        icon={<ThumbsDownIcon />}
                        color="gray"
                        aria-label="Cancel action and close"
                        title="Cancel action and close"
                    />
                </div>
            </div>
        </>
    )
}
