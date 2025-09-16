import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export const MainForm = () => {
    const { setState } = useTaskContext()

    const handleClick = () => {
        setState((prev) => ({
            ...prev,
            formattedSecondsRemaining: '25:00',
        }))
    }

    return (
        <form className="form" action="">
            <button onClick={handleClick}>Click</button>
            <div className="formRow">
                <DefaultInput
                    id="input"
                    labelText="Task"
                    type="text"
                    placeholder="type something..."
                />
            </div>

            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                <DefaultButton color="red" icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}
