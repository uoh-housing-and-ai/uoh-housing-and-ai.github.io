'use client';

import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type ProjectsProps = {
  preview?: boolean;
};

export default function Projects({ preview = false }: ProjectsProps) {
  const visibleProjects = preview ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-14 md:py-16">
      <div className="container-custom">
        <p className="section-kicker">Applied Delivery</p>
        <h2 className="section-title">Projects And Prototypes</h2>
        <p className="section-subtitle">
          Practical tools, technical pilots, and research-informed builds created to improve housing insight, communication, and decision support.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-[#e7f4f2] via-[#f7f9f7] to-[#fdf0e2] flex items-center justify-center border-b border-[#e2ece8]">
                <div className="text-[#4f656b] text-sm font-semibold text-center px-6">{project.imageLabel}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b2a2f] mb-2">{project.title}</h3>
                <p className="text-[#4c5f66] mb-4 leading-relaxed">{project.description}</p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-[#eef4f5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#365058]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <span>{project.linkLabel}</span>
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[#6a7c82]">Project profile available on request.</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {preview && visibleProjects.length > 2 ? (
          <div className="mt-8">
            <Link href="/projects" className="btn-secondary">View All Projects</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}