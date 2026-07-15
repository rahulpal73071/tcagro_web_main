"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { submitContactMessage } from "@/lib/api";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await submitContactMessage({
      name,
      village_or_address: village,
      phone_number: phone,
      message,
    });
    setStatus(res.ok ? "success" : "error");
    if (res.ok) {
      setName("");
      setVillage("");
      setPhone("");
      setMessage("");
    }
  };

  if (status === "success") {
    return (
      <div className="blob-card contact-form-card">
        <div style={{ textAlign: "center", padding: "20px 10px" }}>
          <div style={{ fontSize: "2.4rem" }}>✅</div>
          <p style={{ marginTop: 10, color: "var(--ink-soft)" }}>{t("contact_form_success")}</p>
          <button className="btn btn-outline" style={{ marginTop: 18 }} onClick={() => setStatus("idle")}>
            {t("contact_form_title")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="blob-card contact-form-card bid-form" onSubmit={handleSubmit}>
      <div>
        <h3 style={{ marginBottom: 4 }}>{t("contact_form_title")}</h3>
        <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>{t("contact_form_sub")}</p>
      </div>

      <div className="bid-form-row">
        <label>
          {t("contact_form_name")}
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          {t("contact_form_village")}
          <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} />
        </label>
      </div>

      <label>
        {t("contact_form_phone")}
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <label>
        {t("contact_form_message")}
        <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      {status === "error" && <p className="bid-form-error">{t("contact_form_error")}</p>}

      <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"}>
        {status === "sending" ? t("contact_form_sending") : `✉️ ${t("contact_form_submit")}`}
      </button>
    </form>
  );
}
