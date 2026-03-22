import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function BaseLayout(){
    return <>
      <Header />
      <Content />
      <Footer />
    </>
}

export default BaseLayout;