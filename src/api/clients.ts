import {DateTime} from 'luxon';


import {Client, rawClient} from "@/api/types.ts";
import {api} from "@/api/base.ts";


export async function getClients(projectId: number = 1) {
    const response = await api.get<rawClient[]>(`projects/${projectId}/clients`)
    const data: Client[] = response.data.map((client: rawClient) => {
        return {
            ...client,
            createdAt : DateTime.fromISO(client.createdAt)
        }
    })
    return data
}