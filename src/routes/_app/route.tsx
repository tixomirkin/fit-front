import {createFileRoute, Outlet} from '@tanstack/react-router'
import {AppSidebar} from "@/components/sidebar/app-sidebar.tsx";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.tsx";

export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

function AppLayout() {
  return <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
          <Outlet/>
      </SidebarInset>
  </SidebarProvider>
}
