'use client';

import Navbar from "../components/navbar";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-off-white min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="px-[40px] sm:px-[250px]">
          <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] tracking-widest uppercase mb-4">
            COMPLIANCE
          </h3>

          <h1 className="font-dm-serif text-dark text-[48px] sm:text-[80px] font-bold leading-tight mb-10">
            Lorem Ipsum
          </h1>
          <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed space-y-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi ligula, varius congue cursus at, interdum in metus. Phasellus aliquet sapien lorem, non varius nisl auctor et. Donec nec imperdiet leo. Integer dignissim nulla et dolor maximus aliquet. Fusce tristique ipsum sit amet sem vehicula, sed lacinia lacus elementum. Aenean sollicitudin neque mi, eget gravida ipsum tristique ut. Etiam pellentesque efficitur urna eget facilisis. Quisque efficitur tortor et lorem facilisis consectetur. Etiam dictum leo vitae lectus molestie auctor. Sed a ipsum tempus, aliquet risus id, blandit erat. Sed lacus dolor, interdum quis sapien ut, mattis blandit enim. Mauris nibh nibh, eleifend id lectus et, commodo ultrices neque.
            <br /><br />
            Curabitur viverra dolor ut tortor condimentum rutrum. Curabitur in sem ac est ullamcorper sodales. Proin vitae nisl eget libero blandit ultrices. Aenean varius sem in erat porta, in porta ante suscipit. Suspendisse auctor ligula urna. Etiam id blandit lacus, venenatis aliquam enim. Vestibulum mattis tellus magna, vitae viverra ex luctus in. Nulla fermentum purus rhoncus posuere pellentesque. Nam dui ante, consequat sed posuere sit amet, rhoncus sed purus. Donec faucibus dolor sit amet aliquam porttitor. Duis vulputate velit purus, ut cursus nunc cursus nec. Aenean quis diam convallis diam congue euismod vitae ac enim. Nulla fringilla ipsum at diam laoreet consectetur. Fusce et leo et lacus facilisis porta. Vestibulum vestibulum lectus urna, ac eleifend lorem facilisis vitae.
            <br /><br />
            Proin placerat nibh quis scelerisque condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sagittis justo et mi pellentesque, ac feugiat nulla scelerisque. Nullam volutpat vehicula interdum. Phasellus a ex orci. Quisque nisl nisl, molestie nec augue a, tempor mollis diam. Nam scelerisque non est sed consectetur. Sed molestie tincidunt tortor, nec tristique orci malesuada eu.
          </p>

          <div className="mt-16 text-right">
            <Link
              href="/"
              className="font-dm-serif text-[24px] sm:text-[32px] font-bold text-brown-dark hover:opacity-80 transition"
            >
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
