import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";

export function SkeletonTableBasic() {
    return (
        <div className=" ">
            <Table className="relative w-full overflow-x-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Skeleton className="h-7 w-[100px]"/>
                        </TableHead>
                        <TableHead>
                            <Skeleton className="h-7 w-[300px]"/>
                        </TableHead>
                        <TableHead>
                            <Skeleton className="h-7 w-[100px]"/>
                        </TableHead>
                        <TableHead>
                            <Skeleton className="h-7 w-[100px]"/>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[...Array(10)].map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <Skeleton className="h-8 w-[100px]"/>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-8 w-[300px]"/>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-8 w-[100px]"/>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-8 w-[100px]"/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="icon"
                    disabled
                >
                    <ChevronLeft/>
                </Button>
                <Button variant="ghost" disabled>
                    ...
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    disabled
                >
                    <ChevronRight/>
                </Button>
            </div>
        </div>
    );
}
