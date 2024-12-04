"use client";
import { useFormState, useFormStatus } from "react-dom";

import { submitContactForm } from "./actions";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  message: "",
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-10 py-2 max-w-32 border border-floral-white rounded-full font-semibold hover:bg-floral-white hover:text-brand-black transform duration-300"
      aria-disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  if (state.message === "success") {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">{"Thank you for reaching out!"}</h1>
        <h2 className="text-xl text-[#999]">{"We will get back to you soon."}</h2>
      </div>
    );
  }

  return (
    <form id="contact-form" className="flex flex-col gap-4" action={formAction}>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-4xl">{"Get in Touch"}</h1>
        <h2 className="text-xl text-[#999]">
          Have a question or a project in mind? Feel free to reach out!
        </h2>
      </div>
      <div className="flex gap-12 w-full">
        <div className="flex flex-col gap-2 justify-between w-full">
          <label htmlFor="firstname" className="text-lg pt-3">
            First name
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="p-2 border-t-0 border-l-0 border-r-0 border-b border-[#999] focus-within:border-floral-white bg-brand-black outline-0"
            required
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <label htmlFor="lastname" className="text-lg pt-3">
            Last name
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="p-2 border-t-0 border-l-0 border-r-0 border-b border-[#999] focus-within:border-floral-white bg-brand-black outline-0"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <label htmlFor="one" className="text-lg pt-3">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="p-2 border-t-0 border-l-0 border-r-0 border-b border-[#999] focus-within:border-floral-white bg-brand-black outline-0"
          required
        />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <label htmlFor="message" className="text-lg pt-3">
          Message...
        </label>
        <textarea
          id="message"
          name="message"
          className="p-2 h-24 border-t-0 border-l-0 border-r-0 border-b border-[#999] focus-within:border-floral-white bg-brand-black outline-0"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}
