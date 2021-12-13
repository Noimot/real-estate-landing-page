import EstateDeal from "./component/estate-deal";
import Header from "./component/header/Header";
import HowItWorks from "./component/how-it-works";
import Partners from "./component/partners";
import PropertySearch from "./component/propertysearch";
function App() {
  return (
    <div className="app">
      <Header />
      <section className="main-container">
        <PropertySearch />
        <HowItWorks/>
        <EstateDeal/>
      </section>
      <div className="partial-bg"></div>
      <div>
        <Partners/>
      </div>
    </div>
  );
}

export default App;
