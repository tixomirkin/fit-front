import { createFileRoute, Link } from '@tanstack/react-router'
import {HeaderWithBreadcrums} from "@/components/sidebar/header-with-breadcrums.tsx";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useState} from "react";
import {Calendar} from "@/components/ui/calendar.tsx";
import { ru } from "date-fns/locale";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import RightSlidebar from "@/components/schedule/right-slidebar.tsx";
import SchedueleCard from "@/components/schedule/scheduele-card.tsx";
import {TSchedule} from "@/api/schedule.ts";
import {DateTime} from "luxon";




export const Route = createFileRoute('/_app/schedule/')({
  component: RouteComponent,
})

function RouteComponent() {
    const projectId = 1

    const schedule: TSchedule = {
        projectId: 1,
        id: 1,
        name: "Тренировка 1",
        trainerId: 1,
        seats: 9,
        color: '#733DE3',
        icon: 'string',
        description: 'Ангелина Иванова asdasdasdadasd sdesseacsefefcscssssssdesseacsefefcscsssss',
        startDate: DateTime.now(),
        endDate: DateTime.now(),
        createdAt: DateTime.now()

    }

    return (
        <>
            <HeaderWithBreadcrums>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink asChild>
                            <Link to="/">
                                Главная
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block"/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Расписание</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </HeaderWithBreadcrums>

            <div className='w-full h-full flex flex-row'>
                <main className="w-full p-4 flex gap-6 flex-col">
                    <h1 className="text-2xl font-semibold">Рассписание</h1>
                    {/*<div className="flex flex-col gap-4">*/}
                    {/*    <div className="flex gap-4">*/}
                    {/*        <Input placeholder='Поиск по имени' disabled/>*/}
                    {/*        <Link to='/clients/new'>*/}
                    {/*            <Button><Plus/><span className='hidden sm:block'>Новый клиент</span></Button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="flex flex-col gap-2">
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                        <SchedueleCard schedule={schedule}/>
                    </div>

                </main>

                <RightSlidebar/>
            </div>


        </>
    )
}
