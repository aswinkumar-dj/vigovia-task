import { useSelector } from "react-redux";
import "./App.css";
import Body from "./components/UI/Layout/Body";
import Footer from "./components/UI/Layout/Footer";
import Header from "./components/UI/Layout/Header";
import Page1 from "./components/Pdf/Pages/Page1.jsx";
import Page2 from "./components/Pdf/Pages/Page2.jsx";

const App = () => {
  const toggleToPage = useSelector((store) => store.user.toggleToPage);

  return (
    <div>
      <Header />
      <Body />
      <Footer />
      {toggleToPage && <Page2 />}
    </div>
  );
};

export default App;
