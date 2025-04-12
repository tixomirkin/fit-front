import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea.tsx";
import {useMaskito} from "@maskito/react";
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {postClients} from "@/api/clients.ts";
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {Link, useNavigate} from "@tanstack/react-router";
import {Loader2} from "lucide-react";


const formSchema = z.object({
    name: z.string().min(3, {
        message: "Имя клиента должно быть больше 3 символов",
    }),
    innerName: z.string().optional(),
    description: z.string().optional(),
    phone: z.string().optional(),
    birth: z.string().optional(),
})

export function NewClientFrom({projectId} : {projectId: number}) {
    const queryClient = useQueryClient()
    const navigate = useNavigate({ from: '/clients/new' })
    const mutation = useMutation({
        mutationFn: (value: {projectId: number, client: z.infer<typeof formSchema>}) => postClients(value.projectId, value.client),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['clients', projectId] })
                const clientId = String(data.data[0].id)
                navigate({to: '/clients/$clientId', params: {clientId}})
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })


    const dateMask = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
    });
    const inputRef = useMaskito({options: dateMask});

    async function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate({projectId: projectId, client: values})
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 max-w-md">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя и фамилия клиента</FormLabel>
                            <FormControl>
                                <Input placeholder="Иван Иванов" {...field} />
                            </FormControl>
                            {/*<FormDescription>*/}
                            {/*    Имя клиента которое будет отображаться в системе*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    // disabled
                    control={form.control}
                    name="phone"
                    rules={{
                        // validate: (value) => value && validator.isMobilePhone(value),
                    }}
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-left">Номер телефона</FormLabel>
                            <FormControl className="w-full">
                                <Input {...field}/>
                                {/*<PhoneInput defaultCountry='RU' placeholder="Enter a phone number" {...field} />*/}
                            </FormControl>
                            {/*<FormDescription className="text-left">*/}
                            {/*    Enter a phone number*/}
                            {/*</FormDescription>*/}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/*<FormFiledMasked control={form.control} name='birth' mask={digitsOnlyMask} label="aa"/>*/}
                <FormField
                    control={form.control}
                    name="birth"
                    render={({ field: { onChange, onBlur, ref, value, name } }) => (
                        <FormItem>
                            <FormLabel>Дата рождения</FormLabel>
                            <FormControl>
                                <Input
                                    onInput={onChange}
                                    value={value}
                                    name={name}
                                    onBlur={onBlur}
                                    placeholder='01.01.1990'
                                    ref={(el: HTMLElement | null) => {
                                        // inputRef(el);
                                        inputRef(el);
                                        ref(el);
                                    }}
                                />
                                {/*<MaskInput {...field} options={digitsOnlyMask}/>*/}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Комментарий</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="О клиенте"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                Вы можете оставить комментарий по клиенту, который будет виден только вам.
                            </FormDescription>
                        </FormItem>
                    )}
                />
                <div className='flex justify-end gap-3'>
                    <Link to='/clients'><Button variant='outline'>Отменить</Button></Link>
                    <Button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending && <Loader2 className="h-4 w-4 animate-spin"/>}
                        {mutation.isPending? "Сохранение" : "Сохранить"}
                    </Button>
                </div>
            </form>
        </Form>
    )


}
