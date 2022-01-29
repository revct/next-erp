import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabase-client";

const Auth = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const handleLogin = async (data: any) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(data);
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      alert(error?.error_description || error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card card-bordered bg-base-300 w-full max-w-md">
      <div className="card-body space-y-4">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Send</span>
            </label>
            <input
              type="submit"
              className={`btn ${loading ? "loading" : ""}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Auth;
