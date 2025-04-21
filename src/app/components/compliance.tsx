'use client';

import FadeInSection from './fadeInSection';
import Link from 'next/link';

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="bg-gray py-24 scroll-mt-24"
    >
      <div className="px-6 sm:px-24">
        <FadeInSection>
          <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] mb-4 tracking-widest uppercase">
            COMPLIANCE
          </h3>
        </FadeInSection>
        <FadeInSection>
          <h2 className="font-dm-serif text-dark font-bold text-[48px] sm:text-[80px] mb-6 leading-tight">
            Lorem Ipsum
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="font-tahoma text-dark text-[20px] sm:text-[32px] leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus consequat enim,
            ac posuere nisi pulvinar vitae. Duis fringilla et leo sit amet rutrum. Phasellus
            efficitur magna sit amet nulla malesuada, eget ultricies neque gravida.
          </p>
        </FadeInSection>
        <FadeInSection>
          <div className="text-right">
            <Link
              href="/compliance"
              className="font-dm-serif text-[32px] sm:text-[48px] font-bold text-brown-dark hover:opacity-80 transition"
            >
              Lorem Ipsum
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
