import { Home } from './pages/Home'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'
import { MessagesContainer } from './components/MessagesContainer'

export const App = () => {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />
            </MessagesContainer>
        </TaskContextProvider>
    )
}
