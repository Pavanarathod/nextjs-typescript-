import Login from "@/ui-features/auth/Login";
import PublicRoute from "@/ui-hocs/auth/PublicRoute";

export default function LoginPage() {
  return (
    <PublicRoute>
      <Login />
    </PublicRoute>
  );
}
