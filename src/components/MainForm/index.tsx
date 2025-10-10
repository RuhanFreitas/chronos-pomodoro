import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { useRef } from 'react'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction'
import { Tips } from '../Tips'
import { showMessage } from '../../adapters/showMessage'

export const MainForm = () => {
    const { state, dispatch } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)
    const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        showMessage.dismiss()

        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            showMessage.warn('Please enter a task name.')
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completedDate: null,
            interruptedDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })

        showMessage.success('Task initiated!')
    }

    const handleInterruptTask = () => {
        showMessage.dismiss()
        showMessage.info('Task interrupted.')

        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className="form" action="">
            <div className="formRow">
                <DefaultInput
                    id="input"
                    labelText="Task"
                    type="text"
                    placeholder="type something..."
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                    defaultValue={lastTaskName}
                />
            </div>

            <div className="formRow">
                <Tips />
            </div>

            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask ? (
                    <DefaultButton
                        aria-label="Start task"
                        title="Start task"
                        color="red"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        key="star-task-button"
                    />
                ) : (
                    <DefaultButton
                        aria-label="Stop task"
                        title="Stop task"
                        type="button"
                        color="gray"
                        icon={<StopCircleIcon />}
                        onClick={handleInterruptTask}
                        key="stop-task-button"
                    />
                )}
            </div>
        </form>
    )
}
