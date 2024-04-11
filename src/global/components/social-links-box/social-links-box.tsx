import { GithubSocialLink, LinkedinSocialLink, MagneticButton } from "@/global/components";

export function SocialLinksBox() {
  return (
    <div className="flex gap-8 items-center">
      <MagneticButton>Contact Me</MagneticButton>
      <div className="flex flex-row gap-4">
        <GithubSocialLink />
        <LinkedinSocialLink />
      </div>
    </div>
  );
}
