export type TaskModel = {
    id: string
    name: string
    duration: number
    startDate: number
    completedDate: number | null
    interruptedDate: number | null
    type: 'workTime' | 'shortBreak' | 'longBreak'
}
