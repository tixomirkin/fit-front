import {Client} from "@/api/types.ts";

export function ClientInfo({client}: {client: Client | undefined}) {
    if (!client) {
        return (
            <div> Loading... </div>
        )
    }

    return (
        <>
            <h1>{client.id}</h1>
            <h1>{client.createdAt.toString()}</h1>
        </>
    )
}