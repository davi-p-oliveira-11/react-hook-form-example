import {useForm, SubmitHandler} from "react-hook-form"
import "../style.css"

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
   console.log(data);
}


export default function AdvancedForm() {
  const {
   register,
   handleSubmit,
   formState: {errors},
  } = useForm<FormData>();

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              {...register("firstName", {required: "First Name is required"})} 
             />

          {errors.firstName && <p>{errors.firstName.message}</p>}
         </div>

         <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              {...register("lastName", {required: "Last Name is Required"})}
            />

           {errors.lastName && <p>{errors.lastName.message}</p>}
         </div>

         <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              {...register("email", {
               required: "Email Address is required",
               pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address'
               }
            })} />

            {errors.email && <p>{errors.email.message}</p>}
         </div>
      </form>

    </div>
  )
}
