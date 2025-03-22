import * as React from "react"
import {useUserStore} from "@/store.ts";
import {useNavigate} from "@tanstack/react-router";

export function useAuth() {

    const navigate = useNavigate()
    const accessToken = useUserStore((state) => state.accessToken)

    React.useEffect(() => {
        if (!accessToken) {
            navigate({to: "/login"})
        }
    }, [accessToken])

}
