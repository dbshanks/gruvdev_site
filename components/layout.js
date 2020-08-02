import Footer from "../components/footer";
import { Mainheader } from "./main-header";
import Meta from "../components/meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Mainheader />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
