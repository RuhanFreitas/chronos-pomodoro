import { format } from 'date-fns'

export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)

    return format(date, 'MM/dd/yyyy, HH:MM')
}
