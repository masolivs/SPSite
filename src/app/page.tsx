import React from 'react';
import Navbar from './components/navbar';
import Herosection from './components/herosection';
import Sobre from './components/sobre';
import Compliance from './components/compliance';
import Contato from './components/contato';
import Footer from './components/footer';
import Atuacao from './components/atuacao';
import Premiacao from './components/premiacoes';
import Blog from './components/blog';
import Team from './components/team';
import FloatingSocialIcons from './components/floatingSocialIcons';
<meta name="google-site-verification" content="8IUk50NF62kmlyAzJJFSvqBiromvJR4nqcsjMMMTH5c" />

export default function Home() {
  return (
    <div>
          <Navbar />
          <Herosection />
          <Sobre />
          <Atuacao />
          <Premiacao />
          <Compliance />
          <Team />
          <Blog />
          <Contato />
          <FloatingSocialIcons />
    </div>
  );
}
