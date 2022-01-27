import { useNotifications } from "@mantine/notifications";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabase-client";

type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpForm>();
  const notifications = useNotifications();
  const router = useRouter();
  const onSubmit = async (form: SignUpForm) => {
    const { session, user, error } = await supabase.auth.signUp(form);
    if (error) {
      notifications.showNotification({
        title: "Error",
        message: error.message,
        color: "red",
      });
      return;
    }
  };
  return (
    <div className="w-full h-screen font-sans bg-cover bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-sm p-6 m-auto bg-base-100 rounded-box shadow-base-content">
        <h1 className="text-3xl font-semibold text-center text-base-content">
          Sign Up
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Username</span>
            </label>
            <input
              className="input input-bordered"
              required
              type="email"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="confirm-password">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text-alt"></span>
              <Link href="/sign-in" passHref>
                <a className="label-text-alt">Sign in</a>
              </Link>
            </label>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
