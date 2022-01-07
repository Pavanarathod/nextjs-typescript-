import { useRouter } from "next/router";

import { Main } from "@/ui-layout/templates/Main";
import { Meta } from "@/ui-layout/partials/Meta";

const Index = () => {
  const router = useRouter();

  return (
    <Main meta={<Meta title="About" description="About  Hi Onco" />}>
      Hi Onco About
    </Main>
  );
};

export default Index;
