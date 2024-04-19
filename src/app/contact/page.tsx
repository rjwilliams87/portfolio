import Image from "next/image";

import { ContactForm } from "./contact-form";

export default async function ContactPage() {
  return (
    <div className="pb-24 min-h-[80vh] flex gap-16">
      <div className="hidden md:block relative w-1/2 rounded-md">
        <Image
          src={require("../../../assets/hello.jpg")}
          alt="Contact Placeholder Image"
          objectFit="cover"
          layout="fill"
          className="rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
