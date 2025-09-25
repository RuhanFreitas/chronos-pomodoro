import type { TaskModel } from '../models/TaskModel'

export const getNextCycleType = (currentCycle: number): TaskModel['type'] => {
    if (currentCycle % 8 === 0) return 'longBreak'
    if (currentCycle % 2 === 0) return 'shortBreak'
    return 'workTime'
}
