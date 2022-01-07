import ErrorCodes from "@/constants/ErrorCodes";
import { useLoginMutation } from "@/core/api/auth";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/core/reducers/authSlice";
import APICodes from "../../constants/APICodes";

export default function Login() {
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const tryLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const userName = data.get("email");
    const password = data.get("password");

    try {
      const result = await login({
        userName,
        password,
      });
      if (result.data.statusCode !== APICodes.API_FAILED) {
        dispatch(setCredentials(result.data.data));
      }
    } catch (err) {
      console.log(ErrorCodes.LOGIN_ERROR);
    }
  };

  return (
    <div className="flex items-center h-screen w-full bg-slate-400">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Login
        </span>
        <form className="mb-4" action="/" method="post" onSubmit={tryLogin}>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Username or Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="Username or Email"
              autoComplete="off"
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
            Login
          </button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login">
          Forgot password?
        </a>
      </div>
    </div>
  );
}
