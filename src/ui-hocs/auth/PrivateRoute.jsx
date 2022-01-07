import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/core/reducers/authSlice";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (user?.loggedIn !== true) {
      router.push("/login");
    }
  }, [router, user?.loggedIn]);

  if (user?.loggedIn === true) {
    return children;
  }

  return null;
}
