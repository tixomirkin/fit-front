import {DateTime} from "luxon";

export type AccesToken = {
    accessToken: string
}

export type User = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    authMethod: string
    isVerified: boolean
    isTwoFactorEnabled: boolean
    createdAt: string
}

export type rawClient = {
    projectId: number
    id: number
    name: string
    innerName: string | null
    description: string | null
    createdAt: string
}

export type Client = Omit<rawClient, 'createdAt'> & {
    createdAt: DateTime
}
