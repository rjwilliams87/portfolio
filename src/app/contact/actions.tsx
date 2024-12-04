"use server";
import dayjs from "dayjs";
import { z } from "zod";

const HUBSPOT_PRIVATE_API_KEY = process.env.HUBSPOT_PRIVATE_API_KEY;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || "";
const HUBSPOT_CONTACT_FORM_ID = process.env.HUBSPOT_CONTACT_FORM_ID || "";
const HUBSPOT_API = "https://api.hsforms.com/submissions/v3/integration/secure/submit";

const generateFormUrl = (portalId: string, formId: string, baseUrl = HUBSPOT_API) => {
  return `${baseUrl}/${portalId}/${formId}`;
};

export type SubmissionStatus = "success" | "invalid" | "error";

export async function submitContactForm(_: any, formData: FormData) {
  const schema = z.object({
    email: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    message: z.string(),
  });

  const parsed = schema.safeParse({
    email: formData.get("email"),
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { message: "invalid" };
  }

  const data = parsed.data;

  const fields = [
    {
      name: "email",
      value: data.email,
    },
    {
      name: "firstname",
      value: data.firstname,
    },
    {
      name: "lastname",
      value: data.lastname,
    },
    {
      name: "message",
      value: data.message,
    },
  ];

  try {
    await fetch(generateFormUrl(HUBSPOT_PORTAL_ID, HUBSPOT_CONTACT_FORM_ID), {
      method: "POST",
      body: JSON.stringify({ fields }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HUBSPOT_PRIVATE_API_KEY}`,
      },
    });
    console.log(`Submitted form @ ${dayjs().format("YYYY-MM-DD HH:mm:ss")} for ${data.email}`);
    return { message: "success" };
  } catch (e) {
    console.error(
      `Failed to submit form @ ${dayjs().format("YYYY-MM-DD HH:mm:ss")} for ${data.email}`,
      e,
    );
    return { message: "error" };
  }
}
