import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Account from "~/components/Account";
import Auth from "~/components/Auth";
import { supabase } from "~/utils/supabase-client";

const Home = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {!session ? (
        <Auth></Auth>
      ) : (
        <Account key={session?.user?.id} session={session}></Account>
      )}
    </div>
  );
};

export default Home;
