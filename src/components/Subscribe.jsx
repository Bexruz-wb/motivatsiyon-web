import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Subscribe() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setMessage(t("subscribe.emptyEmail"));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return setMessage(t("subscribe.invalidEmail"));
    setMessage(t("subscribe.thanks"));
    setEmail("");
  };

  return (
    <section style={{ textAlign: "center", margin: "3rem 0" }}>
      <h3>{t("subscribe.intro")}</h3>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="email"
          placeholder={t("subscribe.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.5rem 1rem", width: "280px" }}
        />
        <button type="submit">{t("subscribe.subscribeButton")}</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </section>
  );
}
