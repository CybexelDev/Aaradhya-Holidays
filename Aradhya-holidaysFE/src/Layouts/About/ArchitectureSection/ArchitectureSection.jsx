import React from "react";
import { ArrowRight } from "lucide-react";
const team = [
  {
    id: 1,
    name: "Julian Vane",
    role: "FOUNDER & LEAD EXPLORER",
    bio: "20 years navigating the archipelago's most elusive hidden gems.",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Julian Vane",
    role: "FOUNDER & LEAD EXPLORER",
    bio: "20 years navigating the archipelago's most elusive hidden gems.",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Julian Vane",
    role: "FOUNDER & LEAD EXPLORER",
    bio: "20 years navigating the archipelago's most elusive hidden gems.",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Julian Vane",
    role: "FOUNDER & LEAD EXPLORER",
    bio: "20 years navigating the archipelago's most elusive hidden gems.",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop",
  },
];

function TeamCard({ member }) {
  return (
    <div className="rounded-[24px] bg-gradient-to-b from-[#00263F] to-[#0064A5] border border-[#FF7A00]/30 p-9 flex flex-col items-center text-center">
      <div className="w-[131px] h-[131px] rounded-full ring-2 ring-[#3D7DAE]/60 ring-offset-4 ring-offset-[#0a3454] overflow-hidden mb-5">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-white text-[21.8px] font-[400] mb-1 poppins">
        {member.name}
      </h3>
      <p className="text-[#5FC4E8] text-[16px] font-[400] tracking-[2.12px] mb-4">
        {member.role}
      </p>
      <p className="text-white/60 text-sm leading-relaxed max-w-[247px]">
        {member.bio}
      </p>
    </div>
  );
}

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-[#F7F8FA] py-16 sm:py-20 inter">
      <div className="px-7 sm:px-10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[#D11115] text-xs font-semibold tracking-widest mb-3">
              VOYARA TEAM
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00263F] mb-3 poppins">
              Meet Our Architects of Adventure
            </h2>
            <p className="text-[#848484] text-[12px] font-[400] max-w-[382px]">
              Driven by curiosity and a passion for service, our team is the
              heartbeat of every journey we curate
            </p>
          </div>
<a
          
            href="#"
            className="inline-flex items-center gap-2 text-[#00263F] font-semibold text-sm whitespace-nowrap hover:text-[#FF7A00] transition-colors"
          >
            Join Our Team
            <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
          </a>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}