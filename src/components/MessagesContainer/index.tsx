import { ToastContainer } from 'react-toastify'

type MessagesContainerProps = {
    children: React.ReactNode
}

export const MessagesContainer = ({ children }: MessagesContainerProps) => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {children}
        </>
    )
}
