import "@/ui-styles/global.css";
import { Provider } from "react-redux";
import { store } from "@/core/store/store-main";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
