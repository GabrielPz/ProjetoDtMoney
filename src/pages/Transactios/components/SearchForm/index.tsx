import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormConatiner } from "./styles";
import * as z from 'zod';
import { zodResolver} from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm(){
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),

    });

    function handleSearchTransactions(data: SearchFormInputs){
        console.log(data);
    }

    return(
        <SearchFormConatiner onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
            type="text" 
            placeholder="Buscar Transação"
            {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}></MagnifyingGlass>
                Buscar
            </button>
        </SearchFormConatiner>
    );
}