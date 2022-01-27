import dynamic from "next/dynamic";
import App from "~/components/App";

const UserProfileCard = dynamic(
  () => import("~/components/Card/UserProfileCard"),
  {
    ssr: false,
  },
);

const Dashboard = () => {
  return (
    <App>
      <UserProfileCard></UserProfileCard>
    </App>
  );
};

export default Dashboard;
