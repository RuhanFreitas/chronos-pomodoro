import { useEffect, useReducer } from 'react'
import { initialTaskState } from './initialTaskState'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'
import { TimerWorkerManager } from '../../workers/TimerWorkerManager'
import { TaskActionTypes } from './taskAction'

type TaskContextProviderProps = { children: React.ReactNode }

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState)

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage((event) => {
        const countDownSeconds = event.data

        console.log(countDownSeconds)

        dispatch({
            type: TaskActionTypes.COUNT_DOWN,
            payload: { secondsRemaining: countDownSeconds },
        })

        if (countDownSeconds <= 0) {
            worker.terminate()
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            })
        }
    })

    useEffect(() => {
        if (!state.activeTask) {
            console.log('No active task')
            worker.terminate()
        }

        worker.postMessage(state)
    }, [worker, state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
