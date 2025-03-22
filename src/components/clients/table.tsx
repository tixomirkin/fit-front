import {useQuery} from "@tanstack/react-query";
import {getClients} from "@/api/clients.ts";
import { ColumnDef } from "@tanstack/react-table"
import {Client} from "@/api/types.ts";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export const columns: ColumnDef<Client>[] = [
    {
        accessorKey: "id",
        header: "id",
    },
    {
        accessorKey: "name",
        header: "Имя",
    },
    {
        accessorKey: "createdAt",
        header: "Добавлен",
        // cell: (cell) => cell.getValue('createdAt')
    },
]

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({columns, data,}: DataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default function ClientsTable({projectId} : {projectId: number}) {
    const {data, isPending} = useQuery({queryKey: ['clients', projectId], queryFn: () => getClients(projectId)})

    if (isPending) {
        return (
            <div>Loading</div>
        )
    }

    if (data) {
        return (
            <>
                <DataTable columns={columns} data={data}/>
            </>
        )
    }
}