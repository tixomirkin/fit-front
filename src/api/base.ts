import axios, {AxiosError} from 'axios'
import { toast } from "sonner"
import {useUserStore} from "@/store.ts";
import {getAccessToken} from "@/api/auth.ts";

const BASE_URL = 'http://localhost:5173/api'

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${useUserStore.getState().accessToken}`
        // 'access-control-allow-origin': '*',
    },
    // withCredentials: true,
});

export const publicApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'access-control-allow-origin': '*',
    },
    // withCredentials: true,
});

export const publicApiWithoutInterceptors = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'access-control-allow-origin': '*',
    },
    // withCredentials: true,
});

async function errorHandler(error: AxiosError) {
    if (error.status) {

        if (error.status >= 500) {
            toast.error("Ошибка сервера", {
                description: error.message,
            });
        }
        else if (error.status === 401) {
            toast.info("Сессия истекла", {
                description: error.message,
            });

            if (!await getAccessToken()) {
                useUserStore.getState().deleteToken()
                useUserStore.getState().deleteUser()
            }
        }
        else if (error.status >= 400) {
            toast.error("Ошибка клиента", {
                description: error.message,
            });
        }

    }
    else {
        toast.error("Неизвестная ошибка", {
            description: error.message
        });
    }

}

api.interceptors.response.use(response => response, async error => {
    await errorHandler(error);
    return Promise.reject(error);
});

publicApi.interceptors.response.use(response => response, error => {
    errorHandler(error);
    return Promise.reject(error);
});


//
// export async function login2() {
//     const response = await api.post<User & AccesToken>("/auth/login/access-token")
//
//     console.log(response.data)
//     return response
//     // useToken.setState(
//     //     {
//     //         token: response.data.auth_token,
//     //         user_id: response.data.moderator_id
//     //     }
//     // )
//     // const moderator = await getMe()
//     // useToken.setState(
//     //     {
//     //         login: moderator[0].login,
//     //         name: moderator[0].name,
//     //         role: moderator[0].role,
//     //     }
//     // )
// }