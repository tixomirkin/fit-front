import {DateTime} from "luxon";
import {api} from "@/api/base.ts";

export type TRawSchedule = {
    projectId: number,
    id: number,
    name: string,
    trainerId: number | undefined,
    seats: number,
    color: string,
    icon: string,
    description: string,
    startDate: string,
    endDate: string,
    createdAt: string
}

export type TSchedule = Omit<TRawSchedule, 'startDate' | 'endDate' | 'createdAt'> & {
    startDate: DateTime,
    endDate: DateTime,
    createdAt: DateTime,
}

export type NewSchedule = Omit<TSchedule, 'projectId' | 'id' | 'createdAt'>


export async function getSchdule(projectId: number, startDate: Date, endDate: Date, trainerId: number | null = null): Promise<TSchedule[]> {
    const res = await api.get<TRawSchedule[]>(`/projects/${projectId}/schdule`, {
        params: {
            start_date: startDate,
            end_date: endDate,
        }
    })

    let data: TSchedule[] = []

    if (res.status === 200) {
         data = res.data.map((item: TRawSchedule) => {
            return {
                ...item,
                startDate: DateTime.fromISO(item.startDate),
                endDate: DateTime.fromISO(item.endDate),
                createdAt: DateTime.fromISO(item.createdAt),
            }
        })
    }

    return data

}

export async function postSchedule(projectId: number, schedule : NewSchedule): Promise<TRawSchedule | null> {
    const res = await api.post<TRawSchedule>(`/projects/${projectId}/schedule`, {
        ...schedule,
        startDate: schedule.startDate.toISO(),
        endDate: schedule.endDate.toISO(),
    })

    if (res.status === 200) {
        return res.data
    }

    return null

}
