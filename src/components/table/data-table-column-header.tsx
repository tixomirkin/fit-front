import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";
import {ArrowDown, ArrowUp, ArrowUpDown} from "lucide-react";
import {Column} from "@tanstack/react-table";

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
                                                         column,
                                                         title,
                                                         className,
                                                     }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (

        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {title}
            {!column.getIsSorted()  ? <ArrowUpDown className="ml-2 h-4 w-4" />
                : column.getIsSorted()  === "asc" ? <ArrowDown className="ml-2 h-4 w-4" />
                    : <ArrowUp className="ml-2 h-4 w-4" />}
        </Button>
        // <div className={cn("flex items-center space-x-2", className)}>
        //     <DropdownMenu>
        //         <DropdownMenuTrigger asChild>
        //             <Button
        //                 variant="ghost"
        //                 size="sm"
        //                 className="-ml-3 h-8 data-[state=open]:bg-accent"
        //             >
        //                 <span>{title}</span>
        //                 {column.getIsSorted() === "desc" ? (
        //                     <ArrowDown />
        //                 ) : column.getIsSorted() === "asc" ? (
        //                     <ArrowUp />
        //                 ) : (
        //                     <ChevronsUpDown />
        //                 )}
        //             </Button>
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent align="start">
        //             <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
        //                 <ArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
        //                 Asc
        //             </DropdownMenuItem>
        //             <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
        //                 <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
        //                 Desc
        //             </DropdownMenuItem>
        //             <DropdownMenuSeparator />
        //             <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
        //                 <EyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
        //                 Hide
        //             </DropdownMenuItem>
        //         </DropdownMenuContent>
        //     </DropdownMenu>
        // </div>
    )
}