import { useRouter } from "next/router";

import Button from "@material-tailwind/react/Button";
import { Main } from "@/ui-layout/templates/Main";
import { Meta } from "@/ui-layout/partials/Meta";
import PrivateRoute from "@/ui-hocs/auth/PrivateRoute";

export default function IndexPage() {
  const router = useRouter();

  return (
    <PrivateRoute>
      <Main meta={<Meta title="Hi Onco" description="For Oncology" />}>
        Hi Onco Main
        <Button>My name is pvan kumar</Button>
        <Button>Testing again</Button>
      </Main>
    </PrivateRoute>
  );
}
