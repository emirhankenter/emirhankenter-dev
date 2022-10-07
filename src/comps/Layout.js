import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const title = "Memduh Emirhan KENTER";
  const description =
    "Senior Game Developer - Memduh Emirhan KENTER's personal web site";

  return (
    <div className="content">
      <Head>
        <meta name="keywords" content="pikagames"></meta>
        <meta name="description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="author" content="@emirhankenter" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@emirhankenter" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
