import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {MaskitoOptions} from "@maskito/core";
import { Control } from 'react-hook-form';
import { useMaskito } from '@maskito/react';


type InputTextProps<T> = {
    name: string;
    label: string;
    // @ts-ignore
    control: Control<T>;
    mask: MaskitoOptions;
    required?: boolean;
    type?: 'string';
};

// export function FormFiledMasked<T>({control, name, mask, label, required}: InputTextProps<T>) {
//
//     const maskitoRef = useMaskito({ options: mask });
//
//     return (
//         <FormField
//             // @ts-ignore
//             control={control}
//             name="birth"
//             render={({ field: {onChange, ref, onBlur, value, name} }) => (
//                 <FormItem>
//                     <FormLabel>Дата рождения</FormLabel>
//                     <FormControl>
//                         <Input
//                             onBlur={onBlur}
//                             onInput={onChange}
//                             value={value}
//                             name={name}
//                             required={required || true}
//                             ref={(el: HTMLElement | null) => {
//                                 maskitoRef(el);
//                                 ref(el);
//                             }}
//                         />
//                         {/*<MaskInput {...field} options={digitsOnlyMask}/>*/}
//                     </FormControl>
//                     <FormMessage />
//                 </FormItem>
//             )}
//         />
//     )
// }
//
