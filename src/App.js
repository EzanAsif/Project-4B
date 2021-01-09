// import logo from './logo.svg';
import "./App.css";
import FirstSec from "./Components/FirstSec";
import SiteNav from "./Components/SiteNav";
import LatestArticles from "./Components/LatestArticles";
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <div className="App">
      <SiteNav />
      <FirstSec />
      <div className="sec-section">
        <LatestArticles
          secondaryHeading="Attract More Visitors"
          PrimaryHeading={["SEO & Content Marketing", "Results driven strategy and premium content creation"]}
          LinkText="Start this service"
          innerPara="Our SEO services have one goal: drive qualified prospects to your website. From content creation and promotion to white-hat link building, learn how we can help you outrank the competition."
          innerServices = {['Advanced technical SEO foundation with a comprehensive search strategy ', 'Ongoing content strategy, creation, and targeted promotion to maximize thought leadership', 'Monthly reporting calls with our in-house marketing experts to identify growth and opportunities']}
        />
         <LatestArticles
          secondaryHeading="Attract More Visitors"
          PrimaryHeading={["Web Design & Development", "Mobile friendly, easily editable and search optimized. "]}
          LinkText="Start this service"
          innerPara="Your website is your best salesperson. Which is why we optimize every site for visibility. Our websites look damn good on mobile and are optimized for both conversions and search engines. "
          innerServices = {['Fully customized, multi-page websites built to drive results', 'Custom themes designed to easily update copy and imagery', 'Optimized for mobile, conversions and search engines']}
        />
      </div>
      <Testimonials PrimaryHeading = "OUR CLIENTS’ GOALS ARE OUR GOALS" secondaryHeading = "Here’s what they have to say." rating = {[0,1,2,3]} message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quis assumenda suscipit tenetur magnam aliquam!" author = "ezan" company = "none" />
    </div>
  );
}

export default App;
