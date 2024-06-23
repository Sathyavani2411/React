import React from "react";
import { useForm } from "react-hook-form";
import './signup.css';
const RegisterForm = () => {
    const { register, handleSubmit ,formState :{errors}}=useForm();
    const handLeRegistration=(data) =>console.log(data);
    const handLeError =(errors) =>{};
    const registerOptions ={
        name:{required:"Name is required"},
        email:{required:"Email is required"},
        password:{required:"Password is required",minLength:{value:8,message:"Password must have at least 8 characters"}}
    } ;


return(
    <form onSubmit={handleSubmit(handLeRegistration,handLeError)}>
         <section class='A'>
        <h2 class='x'>Register Form</h2>
        <div>
            <label>Name </label>
            <input name="name" type="text" {...register('name',registerOptions.name)}/>
            <small className="text-danger">{errors?.name && errors.name.message}</small>
        </div>
        <div class='AA'>
            <label>Email </label>
            <input name="email" type="email" {...register('email',registerOptions.email)}/>
            <small className="text-danger">{errors?.email && errors.email.message}</small>
        </div>
        <div>
            <label>Password </label>
            <input name="password" type="password" {...register('password',registerOptions.password)}/>
            <small className="text-danger">{errors?.password && errors.password.message}</small>
        </div>
        <button>Submit</button></section>
    </form> 
);
};
export default RegisterForm;