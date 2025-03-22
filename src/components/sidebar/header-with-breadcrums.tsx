import {ReactNode} from "react";
import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {
    Breadcrumb,
} from "@/components/ui/breadcrumb.tsx";


export function HeaderWithBreadcrums({children}: {children: ReactNode}) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
                <SidebarTrigger/>
                <div className="h-4">
                    <Separator orientation="vertical" className="mr-2"/>
                </div>

                <Breadcrumb>
                    {children}
                    {/*<BreadcrumbList>*/}
                    {/*    <BreadcrumbItem className="hidden md:block">*/}
                    {/*        <BreadcrumbLink href="#">*/}
                    {/*            Building Your Application*/}
                    {/*        </BreadcrumbLink>*/}
                    {/*    </BreadcrumbItem>*/}
                    {/*    <BreadcrumbSeparator className="hidden md:block"/>*/}
                    {/*    <BreadcrumbItem>*/}
                    {/*        <BreadcrumbPage>Data Fetching</BreadcrumbPage>*/}
                    {/*    </BreadcrumbItem>*/}
                    {/*</BreadcrumbList>*/}
                </Breadcrumb>
            </div>
        </header>

    )
}