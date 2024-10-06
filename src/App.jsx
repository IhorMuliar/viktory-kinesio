import Header from "./components/header/Header";
import Hero from './components/hero/Hero';
import Content from './components/content/Content';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';
import Process from './components/process2/process.jsx';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Services />
      <Process />
      <Faq />
      {/*<Testimonial />*/}
      {/*<Contacts />*/}
      <Footer />
    </>
  )
}

export default App;
