import {DateTime} from 'luxon';


import {Client, newClient, PaginationData, rawClient} from "@/api/types.ts";
import {api} from "@/api/base.ts";

// export type MetaOptions = {
//     sortType: "asc" | "desc" = "asc";
// }

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getClients(projectId: number = 1, sortType: string="asc", sortBy: string="id", take: number=10, page: number=1) {
    const response = await api.get<PaginationData<rawClient>>(`projects/${projectId}/clients`, {
        params: {
            order: sortType,
            orderBy: sortBy,
            page: String(page),
            take: String(take),
        }
    })
    const data: Client[] = response.data.data.map((client: rawClient) => {
        return {
            ...client,
            createdAt : DateTime.fromISO(client.createdAt)
        }
    })
    // await timeout(2000);
    return {
        data: data,
        meta: response.data.meta,
    }
}

export function postClients(projectId: number, client: newClient) {
    return api.post<rawClient[]>(`projects/${projectId}/clients`, client)
}

export async function getClient(projectId: number, clientId: number) : Promise<Client> {
    const res = await api.get<rawClient>(`projects/${projectId}/clients/${clientId}`)
    return {
        ...res.data,
        createdAt : DateTime.fromISO(res.data.createdAt)
    }
}