import Admin from "@/components/Admin";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
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
            <FormControl id="username">
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl id="emailAddress">
              <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="password">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <FormControl id="passwordConfirmation">
              <FormLabel htmlFor="passwordConfirmation">
                Password Confirmation
              </FormLabel>
              <Input type="password" />
            </FormControl>
          </div>

          <div className="flex justify-end mt-6">
            <Button>Save</Button>
          </div>
        </form>
      </section>
    </Admin>
  );
};

export default Profile;
