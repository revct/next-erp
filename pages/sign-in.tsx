import { useNotifications } from "@mantine/notifications";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabase-client";

type SignInForm = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInForm>();
  const notifications = useNotifications();
  const router = useRouter();
  const onSubmit = async (form: SignInForm) => {
    const { session, user, error } = await supabase.auth.signIn(form);
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
          Sign in
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
              <a href="#" className="label-text-alt">
                Forget Password?
              </a>
            </label>
            <input
              {...register("password")}
              type="password"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text-alt"></span>
              <Link href="/sign-up" passHref>
                <a className="label-text-alt">Sign up</a>
              </Link>
            </label>
            <button type="submit" className="btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
