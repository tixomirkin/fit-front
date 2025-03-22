import {AccesToken, User} from "@/api/types.ts";
import {useUserStore} from "@/store.ts";
import {publicApi, publicApiWithoutInterceptors} from "@/api/base.ts";
import {isAxiosError} from "axios";

export async function login(username: string, password: string) {
    const response = await publicApi.post<User & AccesToken>("auth/login", {
        "email": username,
        "password": password,
    })

    if (response.status === 200) {

        const {accessToken, ...user} = response.data

        useUserStore.getState().setToken(accessToken)
        useUserStore.getState().setUser(user)

        return true
    }

    return false
}

// export async function getMe() {
//     const response = await publicApi.post<User>("auth/me", {
//         "email": username,
//         "password": password,
//     })
//
//     if (response.status === 200) {
//
//         const {accessToken, ...user} = response.data
//
//         useUserStore.getState().setToken(accessToken)
//         useUserStore.getState().setUser(user)
//
//         return true
//     }
//
//     return false
// }

export async function getAccessToken() {
    try {
        const response = await publicApiWithoutInterceptors.post<AccesToken>("auth/access-token")
        if (response.status === 200) {
            useUserStore.getState().setToken(response.data.accessToken)
            return true
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 401) {
                    return false
                }
            }
        }

        return error
    }
}