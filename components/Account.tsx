import { Session, User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabase-client";

interface ProfileProps {
  email: string;
  username: string;
  avatar_url: string;
}

const Account = ({ session }: { session: Session | null }) => {
  const [loading, setLoading] = useState(true);
  const { register, reset, handleSubmit } = useForm<ProfileProps>({
    defaultValues: supabase.auth.user() || {},
  });
  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        reset(data);
      }
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: ProfileProps) => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user?.id,
        username: data.username,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-bordered bg-base-300  w-full max-w-md">
      <form className="card-body">
        <div className="card-title">
          <h1>User Profile</h1>
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            className="input"
            disabled
            {...register("email")}
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="username">
            <span className="label-text">Name</span>
          </label>
          <input
            id="username"
            className="input"
            type="text"
            {...register("username")}
          />
        </div>
      </form>
      <div className="card-action flex justify-end space-x-2 p-4">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit(updateProfile)}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
        <button className="btn" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Account;
