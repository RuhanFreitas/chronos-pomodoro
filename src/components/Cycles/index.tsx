import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './styles.module.css'

export const Cycles = () => {
    const { state } = useTaskContext()

    const cycleStep = Array(state.currentCycle).fill(null)

    const cycleDescriptionMap = {
        workTime: 'Work time',
        shortBreak: 'Short break',
        longBreak: 'Long break',
    }

    return (
        <div className={styles.cycles}>
            <span>Cycles</span>

            <div className={styles.cyclesDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    return (
                        <span
                            key={nextCycle}
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                            aria-label={`${cycleDescriptionMap[nextCycleType]} indicator cycle`}
                            title={`${cycleDescriptionMap[nextCycleType]} indicator cycle`}
                        ></span>
                    )
                })}
                {/*  */}
            </div>
        </div>
    )
}
