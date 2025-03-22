import {createFileRoute, Link} from '@tanstack/react-router'
import {Separator} from "@/components/ui/separator.tsx";
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";

export const Route = createFileRoute('/_app/about')({
    component: About,
})

function About() {
    return (
        <>
            <HeaderWithBreadcrums>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink asChild>
                                <Link to="/">
                                    AppleStudio
                                </Link>
                            </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block"/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Рассписание</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </HeaderWithBreadcrums>

            <main className="w-full">
                <div className="p-2 flex gap-1">
                    <div>Hello from Inbox!</div>

                    <div className="mr-2 h-4">
                        <Separator orientation="vertical" className=""/>
                    </div>

                    <div> sadwd</div>
                </div>
            </main>

        </>)


}