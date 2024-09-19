import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import Content from './components/content/Content';
import Services from './components/feautures/Services';
import Testimonial from './components/testimonial/Testimonial';
import CallToAction from './components/call-to-action/Call-to-action';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Content/>
      <Services/>
      <Testimonial/>
      <CallToAction/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App;
