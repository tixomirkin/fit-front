import {Separator} from "@/components/ui/separator.tsx";
import {Calendar} from "@/components/ui/calendar.tsx";
import {ru} from "date-fns/locale";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {useState} from "react";


export default function RightSlidebar() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <>
            <Separator className='hidden sm:block' orientation='vertical'/>
            <div className='hidden sm:block px-5 pt-4 sm:flex flex-col gap-4'>
                <h1 className='text-xl font-medium'>Выбор даты</h1>
                <Calendar
                    locale={ru}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border "
                />
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue defaultValue='all' placeholder="Выбор тренера" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Все тренеры</SelectItem>
                        <SelectItem value="1">Ангелина Иванова</SelectItem>
                        <SelectItem value="2">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}