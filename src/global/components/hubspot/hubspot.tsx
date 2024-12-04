"use client";
import { useEffect } from "react";

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;

export type EmbeddedFormProps = {
  formId: string;
  portalId?: string;
  onFormReady?: ($form: HTMLElement) => void;
};

export function EmbeddedForm({
  formId,
  portalId = HUBSPOT_PORTAL_ID,
  onFormReady,
}: EmbeddedFormProps) {
  const embedForm = () => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    script.id = "hs-script-loader";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt && HUBSPOT_PORTAL_ID) {
        const config = {
          portalId,
          formId,
          region: "na1",
          target: "#hubspot-form",
        };
        const extra = onFormReady ? { onFormReady } : {};
        window.hbspt.forms.create({ ...config, ...extra });
      }
    });
  };

  useEffect(() => {
    embedForm();

    return () => {
      const script = document.querySelector("#hs-script-loader");
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="hubspot-form" />
      <noscript>
        <div>
          <p>
            This form requires JavaScript to complete. To use this form, you must first enable
            JavaScript in your browser, then complete and submit the form.
          </p>
        </div>
      </noscript>
    </>
  );
}
