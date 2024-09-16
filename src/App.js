import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { Features } from './components/Features';
import { Testimonial } from './Testimonial';
import { CallToAction } from './components/Call-to-action';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
        <Header />
        <Hero />
        <Content />
        <Features />
        <Testimonial />
        <CallToAction />
        <Faq />
        <Footer />  
    </>
  )
}

export default App;
