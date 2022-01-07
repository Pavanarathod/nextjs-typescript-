import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/core/reducers/authSlice";

export default function PublicRoute({ children }) {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (user?.loggedIn) {
      router.push("/");
    }
  }, [router, user?.loggedIn]);

  if (!user?.loggedIn) {
    return children;
  }

  return null;
}
