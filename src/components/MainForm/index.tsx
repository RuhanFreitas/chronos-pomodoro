import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { useRef } from 'react'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export const MainForm = () => {
    const { state, setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Please enter a task name.')
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

        const secondsRemaining = newTask.duration * 60

        setState((prevState) => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining:
                    formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            }
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
                />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
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
                    />
                ) : (
                    <DefaultButton
                        aria-label="Stop task"
                        title="Stop task"
                        type="button"
                        color="gray"
                        icon={<StopCircleIcon />}
                    />
                )}
            </div>
        </form>
    )
}
