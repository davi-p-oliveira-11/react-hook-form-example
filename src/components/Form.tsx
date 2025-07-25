import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
   name: string;
   email: string;
   password: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState : {errors, isSubmitting},
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input 
           type="text" 
           id="name" 
           {...register('name', {required: 'Name is required'})}
        />

        {errors.name && <p style={{ color: "red"}}>{errors.name.message}</p>}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
