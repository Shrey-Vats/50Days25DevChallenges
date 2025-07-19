
import { resigterSchema } from "../schema/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

export const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({ resolver: zodResolver(resigterSchema)})

    const onSumbit = (Data) => {
        console.log("Sumbited Data: ", Data)
    }

    return (
        <form onSubmit={handleSubmit(onSumbit)}>
            <div>
                <input {...register('name')}/>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <input {...register('email')}/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <input {...register('password')}/>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
                  <button type="submit" style={{ marginTop: 10 }}>
        Submit
      </button>
        </form>
    )
}