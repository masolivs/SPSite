import Navbar from './components/navbar';
import Herosection from './components/herosection';
import Sobre from './components/sobre';
import Compliance from './components/compliance';

export default function Home() {
  return (
    <div>
          <Navbar />
          <Herosection />
          <Sobre />
          <Compliance />
    </div>


  );
}
