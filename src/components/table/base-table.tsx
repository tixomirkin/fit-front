import {
    ColumnDef,
    getPaginationRowModel,
    getSortedRowModel,
    OnChangeFn, PaginationState,
    SortingState,
} from "@tanstack/react-table"

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
} from "@/components/ui/table.tsx"
import {Button} from "@/components/ui/button.tsx";
import {MetaData} from "@/api/types.ts";
import {ChevronLeft, ChevronRight} from "lucide-react";




interface DataTableProps<TData, T> {
    columns: ColumnDef<TData, T>[]
    data: TData[]
    meta: MetaData
    clickRowHandler?: ((row: TData) => void )
    sorting: {id: string; desc: boolean}[],
    setSorting: OnChangeFn<SortingState>
    pagination: PaginationState
    setPagination: OnChangeFn<PaginationState>
}

export function BaseTable<TData, T>({columns, data, meta, clickRowHandler, sorting, setSorting, pagination, setPagination}: DataTableProps<TData, T>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting: sorting,
            pagination: pagination
        },
        pageCount: meta.pageCount,
        onPaginationChange: setPagination,
        manualPagination: true,
        manualSorting: true,
        // autoResetPageIndex: true,
    })

    return (
        <div className="">
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
                                onClick={clickRowHandler && (() => clickRowHandler(row.original))}
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
            <div className="flex items-center justify-end space-x-2 py-4">
                <span className='opacity-50'>страница {table.getState().pagination.pageIndex + 1} из {table.getPageCount()}</span>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronLeft/>
                </Button>
                {/*<Button variant="ghost" className="opacity-50">*/}
                {/*    {table.getState().pagination.pageIndex + 1}*/}
                {/*</Button>*/}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronRight/>
                </Button>
            </div>
        </div>
    )
}
