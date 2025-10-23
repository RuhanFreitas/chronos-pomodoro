import { TrashIcon } from 'lucide-react'
import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { Heading } from '../../components/Heading'
import { MainTemplate } from '../../templates/MainTemplate'

import styles from './styles.module.css'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { formatDate } from '../../utils/formatDate'
import { getTaskStatus } from '../../utils/getTaskStatus'
import { sortTasks } from '../../utils/sortTasks'
import type { SortTasksOptions } from '../../utils/sortTasks'
import { useEffect, useState } from 'react'
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction'
import { showMessage } from '../../adapters/showMessage'

export const History = () => {
    const { state, dispatch } = useTaskContext()
    const [confirmClearHistory, setConfirmClearHistory] = useState(false)
    const hasTasks = state.tasks.length > 0

    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
        () => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: 'startDate',
                direction: 'desc',
            }
        }
    )

    useEffect(() => {
        document.title = 'History - Chronos Pomodoro'
    })

    useEffect(() => {
        setSortTasksOptions((prevState) => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }))
    }, [state.tasks])

    useEffect(() => {
        if (!confirmClearHistory) return

        setConfirmClearHistory(false)

        dispatch({ type: TaskActionTypes.RESET_STATE })
    }, [confirmClearHistory, dispatch])

    useEffect(() => {
        return () => {
            showMessage.dismiss()
        }
    }, [])

    const handleSortTasks = ({ field }: Pick<SortTasksOptions, 'field'>) => {
        const newDirection =
            sortTasksOptions.direction === 'desc' ? 'asc' : 'desc'

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        })
    }

    const handleResetHistory = () => {
        showMessage.dismiss()
        showMessage.confirm(
            'Are you sure you want to delete the history? This action cannot be undone.',
            (confirmation) => {
                if (confirmation) {
                    dispatch({ type: TaskActionTypes.RESET_STATE })
                }
            }
        )
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    <span className={styles.buttonContainer}>
                        {hasTasks && (
                            <DefaultButton
                                icon={<TrashIcon />}
                                color="red"
                                aria-label="Delete history"
                                title="Delete history"
                                onClick={handleResetHistory}
                            />
                        )}
                    </span>
                </Heading>
            </Container>
            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({ field: 'name' })
                                        }
                                        className={styles.thSort}
                                    >
                                        Task
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'duration',
                                            })
                                        }
                                        className={styles.thSort}
                                    >
                                        Duration
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'startDate',
                                            })
                                        }
                                        className={styles.thSort}
                                    >
                                        Date
                                    </th>
                                    <th>Status</th>
                                    <th>Type</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortTasksOptions.tasks.map((task) => {
                                    const taskTypeDictionary = {
                                        workTime: 'Focus Time',
                                        shortBreak: 'Short Break',
                                        longBreak: 'Long Break',
                                    }

                                    return (
                                        <tr>
                                            <td>{task.name}</td>
                                            <td>{task.duration}</td>
                                            <td>
                                                {formatDate(task.startDate)}
                                            </td>
                                            <td>
                                                {getTaskStatus(
                                                    task,
                                                    state.activeTask
                                                )}
                                            </td>
                                            <td>
                                                {taskTypeDictionary[task.type]}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {!hasTasks && (
                    <p style={{ textAlign: 'center' }}>
                        We don't have any tasks yet!
                    </p>
                )}
            </Container>
        </MainTemplate>
    )
}
