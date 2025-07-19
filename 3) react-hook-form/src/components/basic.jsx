import {useForm} from 'react-hook-form';

export const Basic = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    
    const onSubmit = (data) => {console.log(data);};

    console.log(watch("example1"));
    console.log(watch("example2"));
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("example1")}/>
            {errors.example1 && <span>this field required</span>}
            <input {...register("example2", {required: true})} />
            {errors.example2 && <span>this field required</span>}

            <input type="submit"/>
        </form>
    )
}