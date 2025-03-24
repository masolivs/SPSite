import Navbar from './components/navbar';
import Herosection from './components/herosection';
import Sobre from './components/sobre';
import Compliance from './components/compliance';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
          <Navbar />
          <Herosection />
          <Sobre />
          <Compliance />
          <Footer />
    </div>


  );
}
