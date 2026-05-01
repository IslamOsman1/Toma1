import { UserRound } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Team({ text, teamMembers }) {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionTitle small={text.teamSmall} title={text.teamTitle} body={text.teamText} />

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-7">
              <div className="mb-4 inline-flex rounded-2xl bg-[#c8aa6e]/15 p-3 text-[#c8aa6e]">
                <UserRound />
              </div>
              <h3 className="text-2xl font-black">{member.name}</h3>
              <p className="mt-1 font-bold text-[#c8aa6e]">{member.role}</p>
              <p className="mt-4 leading-7 text-slate-400">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
