import Layout from "@/components/Layout/components/Layout";
import { useRouter } from "next/dist/client/router";
import PersonalInfoCard from "./_components/PersonFormCard";

const PersonDetailPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto flex justify-center items-center">
        <PersonalInfoCard></PersonalInfoCard>
      </div>
    </Layout>
  );
};

export default PersonDetailPage;
