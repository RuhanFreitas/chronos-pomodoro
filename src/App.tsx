import { Home } from './pages/Home'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import './styles/theme.css'
import './styles/global.css'
import { MessagesContainer } from './components/MessagesContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import { AboutPomodoro } from './pages/AboutPomodoro'

export const App = () => {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/about-pomodoro"
                            element={<AboutPomodoro />}
                        />
                    </Routes>
                </BrowserRouter>
            </MessagesContainer>
        </TaskContextProvider>
    )
}
