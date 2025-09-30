import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'

export const Tips = () => {
    const { state } = useTaskContext()

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const tipsForWhenActiveTask = {
        workTime: <span>Focus for {state.config.workTime} minutes.</span>,
        shortBreak: <span>Rest for {state.config.shortBreak} minutes.</span>,
        longBreak: <span>Have a long break.</span>,
    }

    const tipsForNoActiveTask = {
        workTime: <span>Next cycle is {state.config.workTime} minutes.</span>,
        shortBreak: (
            <span>Next cycle is {state.config.shortBreak} minutes.</span>
        ),
        longBreak: <span>Next cycle is {state.config.longBreak} minutes.</span>,
    }

    return (
        <>
            {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}
