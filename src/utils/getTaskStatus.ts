import type { TaskModel } from '../models/TaskModel'

export const getTaskStatus = (
    task: TaskModel,
    activeTask: TaskModel | null
) => {
    if (task.completedDate) return 'Completed'
    if (task.interruptedDate) return 'Interrupted'
    if (task.id === activeTask?.id) return 'In Progress'

    return 'Abandoned'
}
