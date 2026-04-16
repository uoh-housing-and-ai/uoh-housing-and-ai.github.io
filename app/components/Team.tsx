'use client';

import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <section id="capabilities" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Capabilities</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
