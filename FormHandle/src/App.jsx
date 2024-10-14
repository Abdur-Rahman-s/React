import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log('submiting the form' , data )
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mt-80 "  >
        <div>
          <label>First Name: </label>
          <input type="text" {...register("firstname" , { required: true , minLength:{value :5 , message:'min len at least 5'}  })}
          className="border-2
          border-black 
          rounded-md "  />
          {errors.firstname && <p>{errors.firstname.message}</p> }
        </div><br />

        <div>
          <label>Last Name: </label>
          <input type="text" {...register("LastName" , { required: true , pattern:{
                value: /^\S+@\S+\.\S+$/,
                message: "Email format is invalid",
              }}
              )}className="border-2 border-black rounded-md "  />
        </div><br />

        <div>
          <label>Your email: </label>
          <input type="email" {...register("eamil" , { required: true  }  )}className="border-2 border-black rounded-md "  />
        </div>
        <input type="submit"
        className="border-2
                border-black 
                rounded-md 
                px-8 py-2 mt-5  " />
      </form>
    </>
  );
}

export default App;

