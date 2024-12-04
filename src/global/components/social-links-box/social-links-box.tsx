import Link from "next/link";

import { GithubSocialLink, LinkedinSocialLink, MagneticButton } from "@/global/components";

export function SocialLinksBox() {
  return (
    <div className="flex gap-8 items-center">
      <Link href="/contact">
        <MagneticButton>Contact Me</MagneticButton>
      </Link>
      <div className="flex flex-row gap-4">
        <GithubSocialLink />
        <LinkedinSocialLink />
      </div>
    </div>
  );
}
