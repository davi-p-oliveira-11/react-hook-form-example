import { useForm } from "react-hook-form";

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
  } = useForm();

  return (
    <div>Form</div>
  )
}
