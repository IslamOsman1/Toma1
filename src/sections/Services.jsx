import ImageCard from "../components/ImageCard";
import SectionTitle from "../components/SectionTitle";

export default function Services({ text, services }) {
  return (
    <section id="services" className="bg-slate-900/50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          small={text.servicesSmall}
          title={text.servicesTitle}
          body={text.servicesText}
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ImageCard
              key={service.title}
              image={service.image}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
