import "../styles/globals.css";
import App from "next/app";
import "../scss/main.scss";
import { wrapper } from "../store/store";
import { ToastContainer } from "react-nextjs-toast";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ToastContainer />

        <Component {...pageProps}> </Component>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
