import {useQuery} from "@tanstack/react-query";
import {getClients} from "@/api/clients.ts";
import {ColumnDef, PaginationState, SortingState} from "@tanstack/react-table"
import {Client} from "@/api/types.ts";

import {Eye, Loader2, MoreHorizontal, Pencil, Trash} from "lucide-react"

import { Button } from "@/components/ui/button"


import {BaseTable} from "@/components/table/base-table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {useEffect, useState} from "react";
import {DataTableColumnHeader} from "@/components/table/data-table-column-header.tsx";
import {SkeletonTableBasic} from "@/components/table/table-sckeleton.tsx";
import {useNavigate} from "@tanstack/react-router";


export const columns: ColumnDef<Client>[] = [
    {
        accessorKey: 'id',
        header: ({column}) => <DataTableColumnHeader column={column} title="id" />,
        size: 25
    },
    {
        accessorKey: 'name',
        header: ({column}) => <DataTableColumnHeader column={column} title="Имя" />,
        size: 100
    },
    {
        accessorKey: 'createdAt',
        header: ({column}) => <DataTableColumnHeader column={column} title="Добавлен" />,

        cell: info => info.row.original.createdAt.toFormat('HH:mm dd.MM.yyyy'),
        // cell: info => info.row.getValue<DateTime>('createdAt').toFormat('HH:mm dd.MM.yyyy')
        size: 25
    },
    {
        id: "actions",
        cell: ({row}) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Действия</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem><Eye />Открыть</DropdownMenuItem>
                        <DropdownMenuItem><Pencil/> Редактировать</DropdownMenuItem>
                        <DropdownMenuItem><Trash/> Удалить</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        size: 25
    }
]

export default function ClientsTable({projectId} : {projectId: number}) {
    const [sorting, setSorting] = useState<SortingState>([{id: "id", desc: false}])
    const [pagination, setPagination] = useState<PaginationState>({pageIndex: 0, pageSize: 10})

    const {data, isFetching, isLoading} = useQuery({
        queryKey: ['clients', projectId, {sortBy: sorting[0].id, sortType: sorting[0].desc, page: pagination.pageIndex, take: pagination.pageSize}],
        queryFn: async () => getClients(projectId, !sorting[0].desc ? "asc" : "desc", sorting[0].id, pagination.pageSize, pagination.pageIndex+1),
        placeholderData: (previousData) => previousData,
    })

    const navigate = useNavigate({from: '/clients'})


    const clickRowHandler = (row: Client) => {
        navigate({to: '$clientId', params: {clientId: String(row.id)}})
    }

    if (isLoading) {
        return (
            <SkeletonTableBasic/>
        )
    }

    if (data) {
        return (
            <>
                <BaseTable
                    columns={columns}
                    data={data.data}
                    meta={data.meta}
                    clickRowHandler={clickRowHandler}
                    sorting={sorting}
                    setSorting={setSorting}
                    pagination={pagination}
                    setPagination={setPagination}
                />
                {isFetching && <Loader2 className="absolute right-5 bottom-5 h-5 w-5 animate-spin"/>}
            </>
        )
    }
}