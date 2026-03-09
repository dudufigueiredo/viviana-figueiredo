"use client";

import { useState } from "react";

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-12">
        Contato
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.15em] uppercase text-[#888] mb-3"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border-b border-[#ccc] py-3 text-[#1a1a1a] placeholder-[#bbb] bg-transparent focus:outline-none focus:border-[#1a1a1a] transition-colors font-light"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.15em] uppercase text-[#888] mb-3"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border-b border-[#ccc] py-3 text-[#1a1a1a] placeholder-[#bbb] bg-transparent focus:outline-none focus:border-[#1a1a1a] transition-colors font-light"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs tracking-[0.15em] uppercase text-[#888] mb-3"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border-b border-[#ccc] py-3 text-[#1a1a1a] placeholder-[#bbb] bg-transparent focus:outline-none focus:border-[#1a1a1a] transition-colors font-light resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="text-xs tracking-[0.2em] uppercase text-[#1a1a1a] border border-[#1a1a1a] px-10 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors disabled:opacity-40"
        >
          {status === "sending"
            ? "Enviando..."
            : status === "sent"
            ? "Mensagem enviada"
            : "Enviar"}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-500">
            Ocorreu um erro. Por favor, tente novamente.
          </p>
        )}
      </form>
    </div>
  );
}
