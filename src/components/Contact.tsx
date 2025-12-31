import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [debug, setDebug] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setDebug("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
    if (!accessKey) {
      setStatus("error");
      setDebug("Missing VITE_WEB3FORMS_KEY in Vercel env vars. Add it and redeploy.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New message from amulyakantamneni.com",
          from_name: name,
          email,
          message,
        }),
      });

      const data = await res.json();
      setDebug(JSON.stringify(data, null, 2));

      if (res.ok && data?.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err: any) {
      setStatus("error");
      setDebug(err?.message || "Unknown error");
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 520 }}>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ width: "100%", padding: 12, marginBottom: 12 }}
      />
      <input
        placeholder="Your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: "100%", padding: 12, marginBottom: 12 }}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={6}
        style={{ width: "100%", padding: 12, marginBottom: 12 }}
      />

      <button type="submit" disabled={status === "sending"} style={{ padding: 12, width: "100%" }}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p style={{ color: "green" }}>✅ Sent! I’ll reply soon.</p>}
      {status === "error" && <p style={{ color: "red" }}>❌ Failed. See debug below.</p>}

      {/* This shows exactly what Web3Forms returned, so you don't need DevTools */}
      {debug && (
        <pre style={{ marginTop: 12, background: "#f6f6f6", padding: 12, borderRadius: 8 }}>
          {debug}
        </pre>
      )}
    </form>
  );
}
