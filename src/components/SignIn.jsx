
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 

export default function SignIn({ onSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      alert("correct login");
      console.log(user);
    } catch (error) {
      alert("error message " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2>login</h2>

      <input
        {...register("email", { required: "email required" })}
         
        placeholder="email"
        
      />
      {errors.email && (
        <p>{errors.email.message}</p>
      )}
      <input
        {...register("password", { required: "requirepassword"})}
        type="password"
        placeholder="password"
        
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      <button
        type="submit"
        
      >
       login
      </button>

      <p >
        لا تملك حساب؟{" "}
        <button onClick={onSwitch} type="button" className="text-blue-600 underline">
          أنشئ حساب
        </button>
      </p>
    </form>
  );
}
