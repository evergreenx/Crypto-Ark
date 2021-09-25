import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Home from "pages/Home";
import Cryptocurrencies from "pages/Cryptocurrencies";
import CrytoDetails from "pages/CrytoDetails";

import Exchanges from "pages/Exchanges";
import News from "pages/News";
import Footer from "components/Footer";
import Profile from "pages/Profile";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />

          <Route exact path="/crytoDetails" component={CrytoDetails} />

          <Route exact path="/exchanges" component={Exchanges} />
          <Route exact path="/news" component={News} />
          <Route exact path="/profile" component={Profile} />

          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
