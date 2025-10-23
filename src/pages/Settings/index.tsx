import { Container } from '../../components/Container'
import { DefaultInput } from '../../components/DefaultInput'
import { Heading } from '../../components/Heading'
import { MainTemplate } from '../../templates/MainTemplate'
import { DefaultButton } from '../../components/DefaultButton'
import { SaveIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { showMessage } from '../../adapters/showMessage'

export const Settings = () => {
    const { state } = useTaskContext()

    const workTimeInputRef = useRef<HTMLInputElement>(null)
    const shortBreakInputRef = useRef<HTMLInputElement>(null)
    const longBreakInputRef = useRef<HTMLInputElement>(null)

    const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        showMessage.dismiss()

        const workTime = Number(workTimeInputRef.current?.value)
        const shortBreak = Number(shortBreakInputRef.current?.value)
        const longBreak = Number(longBreakInputRef.current?.value)

        if (isNaN(workTime) || isNaN(shortBreak) || isNaN(longBreak)) {
            showMessage.error('Please, provide a number to all fields.')
            return
        }

        if (workTime < 1 || workTime > 99) {
            showMessage.error('Work time must be between 1 and 99 minutes.')
            return
        }

        if (shortBreak < 1 || shortBreak > 30) {
            showMessage.error('Work time must be between 1 and 30 minutes.')
            return
        }

        if (longBreak < 1 || longBreak > 60) {
            showMessage.error('Work time must be between 1 and 30 minutes.')
            return
        }
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Settings</Heading>
            </Container>
            <Container>
                <p style={{ textAlign: 'center' }}>
                    Change the settings for short break and log break time.
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form">
                    <div className="formRow">
                        <DefaultInput
                            id="workTime"
                            labelText="Work Time"
                            ref={workTimeInputRef}
                            defaultValue={state.config.workTime}
                            type="number"
                            min="1"
                            max="99"
                        />
                    </div>
                    <div className="formRow">
                        <DefaultInput
                            id="shortBreak"
                            labelText="Short Break"
                            ref={shortBreakInputRef}
                            defaultValue={state.config.shortBreak}
                            type="number"
                            min="1"
                            max="30"
                        />
                    </div>
                    <div className="formRow">
                        <DefaultInput
                            id="longBreak"
                            labelText="Long Break"
                            ref={longBreakInputRef}
                            defaultValue={state.config.longBreak}
                            type="number"
                            min="1"
                            max="60"
                        />
                    </div>
                    <div className="formRow">
                        <DefaultButton
                            color="red"
                            icon={<SaveIcon />}
                            aria-label="Save configs"
                            title="Save configs"
                        ></DefaultButton>
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}
