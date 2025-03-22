import {Home, Wallet, CalendarRange, BookUser, UsersRound, LifeBuoy, Settings} from "lucide-react"

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem, SidebarRail,
} from "@/components/ui/sidebar.tsx"
import {linkOptions} from "@tanstack/react-router";
import {LinkSidebarMenuButton} from "@/components/sidebar/LinkSidebarMenuButton.tsx";
import {WorkFlowSwitcher} from "@/components/sidebar/workflow-switcher.tsx";
import {NavUser} from "@/components/sidebar/nav-user.tsx";

const options = linkOptions([
    {
        to: "/",
        title: "Главная",
        icon: Home,
        // activeOptions: { isActive: true },
        activeProps: { isActive: true },
    },
    {
        to: "/about",
        title: "Расписание",
        icon: CalendarRange,
        activeProps: { isActive: true },
    },
    {
        to: "/clients",
        title: "Клиенты",
        icon: BookUser,
        activeProps: { isActive: true },
    },
    {
        to: "/dis",
        title: "Абонементы",
        icon: Wallet,
        activeProps: { isActive: true },
        disabled: true,
    },
    {
        to: "/dis",
        title: "Сотрудники",
        icon: UsersRound,
        activeProps: { isActive: true },
        disabled: true,
    },
])

const options2 = linkOptions([
    {
        to: "/dis",
        title: "Поддержка",
        icon: LifeBuoy,
        // activeOptions: { isActive: true },
        activeProps: { isActive: true },
        disabled: true,
    },
    {
        to: "/dis",
        title: "Настройки",
        icon: Settings,
        activeProps: { isActive: true },
        disabled: true,
    }
])


export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <WorkFlowSwitcher />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>

                        <SidebarMenu>
                            {options.map((option) => (
                                <SidebarMenuItem key={option.to}>
                                    <LinkSidebarMenuButton {...option}>
                                        <option.icon className="group-data-[active=true]:stroke-primary"/>
                                        <span className="group-data-[active=true]:text-primary">{option.title}</span>
                                    </LinkSidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-auto">
                    <SidebarGroupContent>
                        <SidebarMenu >
                            {options2.map((option) => (
                                <SidebarMenuItem key={option.to}>
                                    <LinkSidebarMenuButton {...option}>
                                        <option.icon className="group-data-[active=true]:stroke-primary"/>
                                        <span className="group-data-[active=true]:text-primary">{option.title}</span>
                                    </LinkSidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
                <SidebarFooter>
                    <NavUser/>
                </SidebarFooter>
            <SidebarRail />

        </Sidebar>
    )
}
