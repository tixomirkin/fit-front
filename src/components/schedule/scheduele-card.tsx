import {TSchedule} from "@/api/schedule.ts";
import {Clock, Users} from "lucide-react";

export default function SchedueleCard({schedule}: {schedule: TSchedule}) {
    return (
        <>
            <div className='rounded-lg text-white p-6 flex flex-row' style={{
                backgroundColor: schedule.color
            }}>
                <div className='mr-auto'>
                    <p className='text-xl font-medium'>{schedule.name}</p>
                    <p className='overflow-hidden truncate max-w-50'>{schedule.description}</p>
                </div>
                <div>
                    <div className='flex flex-row gap-2 items-center'>
                        <Clock className='h-4 w-4'/>
                        <p className=''>{schedule.startDate.toFormat('hh:mm')}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <Users className='h-4 w-4'/>
                        <p className=''>{schedule.seats}</p>
                    </div>
                </div>
            </div>
        </>
    )
}