import Admin from "@/components/Admin";
import { signIn, useSession } from "next-auth/client";

const Profile = () => {
  const [session, loading] = useSession();
  if (!session && !loading) {
    signIn();
  }

  return (
    <Admin>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input className="input input-bordered" type="text" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input className="input input-bordered" type="email" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input className="input input-bordered" type="password" />
            </div>

            <div className="form-control">
              <label htmlFor="passwordConfirmation">
                Password Confirmation
              </label>
              <input className="input input-bordered" type="password" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="btn btn-primary">Save</button>
          </div>
        </form>
      </section>
    </Admin>
  );
};

export default Profile;
