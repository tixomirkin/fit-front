import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner"


const queryClient = new QueryClient()


export const Route = createRootRoute({
    component: () => (
        <>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
                <Toaster closeButton />
            </QueryClientProvider>
            {/*<TanStackRouterDevtools />*/}
        </>
    ),
})
