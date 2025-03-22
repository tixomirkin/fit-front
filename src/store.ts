import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
    id: string,
    email: string,
    firstName: null | string,
    lastName: null | string,
    authMethod: string,
    isVerified: boolean,
    isTwoFactorEnabled: boolean,
    createdAt: string
}

type UserStore = {
    accessToken: string | null,
    user: User | null

    setUser: (user: User | null) => void
    setToken: (newToken: string | null) => void,
    deleteToken: () => void,
    deleteUser: () => void,
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,

            setUser: (newUser: User | null) => set({user: newUser}),
            setToken: (newAccessToken: string | null) => set({ accessToken: newAccessToken }),
            deleteToken: () => set({ accessToken: null }),
            deleteUser: () => set({ user: null }),
        }),
        {
            name: 'FitCRM-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
