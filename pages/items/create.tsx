import Layout from "@/components/Layout/components/Layout";
import userContacts from "@/data/useContacts";
import { useRouter } from "next/dist/client/router";
import FormCard from "./_components/ItemFormCard";

const PersonDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className="container mx-auto">
        <FormCard></FormCard>
      </div>
    </Layout>
  );
};

export default PersonDetailPage;
