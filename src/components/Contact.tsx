"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!ACCESS_KEY) {
      console.error("Missing VITE_WEB3FORMS_KEY. Add it in Vercel env vars and redeploy.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New message from amulyakantamneni.com",
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative bg-white/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-5xl text-slate-900">
            Get In Touch<span className="text-blue-600">.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            I&apos;m always open to meaningful conversations about AI, collaboration, or new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">{/* keep your left cards here */}</div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={6}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/40"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600">✅ Message sent! I’ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  ❌ Message failed. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
