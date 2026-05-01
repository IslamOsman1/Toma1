import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact({ text, isAr, contactButtons }) {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSendStatus("error");
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      setSendStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-900/70 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-bold text-[#c8aa6e]">{text.contactSmall}</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            {text.contactTitle}
          </h2>
          <p className="mt-5 leading-8 text-slate-300">{text.contactText}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactButtons.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#c8aa6e]/60 hover:bg-[#c8aa6e] hover:text-slate-950"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c8aa6e] text-slate-950 transition group-hover:bg-slate-950 group-hover:text-[#c8aa6e]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400 transition group-hover:text-slate-800">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-black/20"
        >
          <input
            type="hidden"
            name="language"
            value={isAr ? "Arabic" : "English"}
          />

          <div className="grid gap-5">
            <Input label={text.nameLabel} name="from_name" placeholder={text.namePlaceholder} required />
            <Input label={text.phoneLabel} name="phone" placeholder={text.phonePlaceholder} required />
            <Input label={text.emailLabel} name="reply_to" type="email" placeholder={text.emailPlaceholder} required />
            <Input label={text.subjectLabel} name="subject" placeholder={text.subjectPlaceholder} />

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                {text.consultLabel}
              </label>
              <select
                name="consultation_type"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none transition focus:border-[#c8aa6e]"
              >
                <option>{text.civil}</option>
                <option>{text.criminal}</option>
                <option>{text.company}</option>
                <option>{text.contract}</option>
                <option>{text.investment}</option>
                <option>{text.general}</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                {text.messageLabel}
              </label>
              <textarea
                name="message"
                required
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#c8aa6e]"
                placeholder={text.messagePlaceholder}
              />
            </div>

            {sendStatus === "success" && (
              <StatusBox type="success" text={text.sentSuccess} />
            )}

            {sendStatus === "error" && (
              <StatusBox type="error" text={text.sentError} />
            )}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8aa6e] px-6 py-3.5 font-bold text-slate-950 transition hover:bg-[#d8bd7f] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {text.sending}
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {text.send}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({ label, name, placeholder, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-300">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#c8aa6e]"
        placeholder={placeholder}
      />
    </div>
  );
}

function StatusBox({ type, text }) {
  const success = type === "success";

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border p-4 ${
        success
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
          : "border-red-400/30 bg-red-400/10 text-red-300"
      }`}
    >
      {success ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
}
