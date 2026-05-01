import SectionTitle from "../components/SectionTitle";

export default function Blog({ text, blogPosts }) {
  return (
    <section id="blog" className="bg-slate-900/50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle small={text.blogSmall} title={text.blogTitle} body={text.blogText} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => {
            const Icon = post.icon;

            return (
              <article
                key={post.title}
                className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-2 hover:border-[#c8aa6e]/50"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[#c8aa6e]/15 p-3 text-[#c8aa6e]">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{post.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
