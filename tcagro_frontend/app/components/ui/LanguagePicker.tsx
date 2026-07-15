"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguagePickerModal() {
  const { showPicker, setLang, closePicker, t } = useLanguage();

  if (!showPicker) return null;

  const choose = (l: "en" | "hi") => {
    setLang(l);
    closePicker();
  };

  return (
    <div className="lang-modal-overlay" role="dialog" aria-modal="true">
      <div className="lang-modal-blob">
        <img src="/images/logo.png" alt="T&C Agro" className="lang-modal-logo" />
        <p className="lang-modal-title">{t("lang_modal_title")}</p>
        <p className="lang-modal-sub">{t("lang_modal_sub")}</p>
        <div className="lang-modal-choices">
          <button className="lang-choice-btn" onClick={() => choose("en")}>
            <span className="lang-choice-flag">A</span>
            <span>English</span>
          </button>
          <button className="lang-choice-btn" onClick={() => choose("hi")}>
            <span className="lang-choice-flag">अ</span>
            <span>हिंदी</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      className="lang-toggle-pill"
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      aria-label="Switch language"
    >
      <span className={lang === "en" ? "lang-toggle-active" : ""}>EN</span>
      <span className="lang-toggle-divider">/</span>
      <span className={lang === "hi" ? "lang-toggle-active" : ""}>हि</span>
    </button>
  );
}
