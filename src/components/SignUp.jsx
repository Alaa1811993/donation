import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from "../firebase";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function SignUp({ onSwitch }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert(" تم التسجيل بنجاح");
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">إنشاء حساب</h2>
      <input {...register("email")} placeholder="البريد" className="border p-2 w-full rounded" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input {...register("password")} type="password" placeholder="كلمة المرور" className="border p-2 w-full rounded" />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <button className="w-full bg-blue-600 text-white py-2 rounded">إنشاء حساب</button>
      <p className="text-sm text-center mt-2">لديك حساب؟ <button onClick={onSwitch} type="button" className="text-blue-600 underline">سجّل دخول</button></p>
    </form>
  );
}
