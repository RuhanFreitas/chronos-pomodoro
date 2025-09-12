import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'

export const MainForm = () => {
    return (
        <form className="form" action="">
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
