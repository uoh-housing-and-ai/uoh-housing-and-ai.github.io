'use client';

import { publications } from '@/data/publications';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type PublicationsProps = {
  preview?: boolean;
};

export default function Publications({ preview = false }: PublicationsProps) {
  const visiblePublications = preview ? publications.slice(0, 2) : publications;

  return (
    <section id="outputs" className="py-14 md:py-16 bg-[#f3f7f6]">
      <div className="container-custom">
        <p className="section-kicker">Evidence & Research</p>
        <h2 className="section-title">Research Outputs</h2>
        <p className="section-subtitle">
          Publications, implementation notes, and evaluative outputs that translate technical AI work into practical housing decisions.
        </p>

        <div className="space-y-6 max-w-4xl">
          {visiblePublications.map((pub) => (
            <div
              key={pub.id}
              className="rounded-2xl border-l-4 border-[#0b6e6e] bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b6e6e]">{pub.type}</p>
              <h3 className="text-lg font-semibold text-[#1b2a2f] mt-2">{pub.title}</h3>
              {/* <p className="text-[#4c5f66] mt-2">
                <span className="font-medium">{pub.authors}</span>
                <span className="text-[#708287]"> ({pub.year})</span>
              </p> */}
              <p className="text-[#4c5f66] mt-2 leading-relaxed">{pub.summary}</p>
              <p className="text-[#6a7c82] italic mt-2">{pub.venue}</p>
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#0b6e6e] hover:underline mt-3 inline-flex items-center gap-2"
                >
                  <span>{pub.linkLabel}</span>
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {preview ? (
          <div className="mt-8">
            <Link href="/outputs" className="btn-secondary">View All Outputs</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
