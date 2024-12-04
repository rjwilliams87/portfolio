import { type IconType } from "react-icons";
import { TfiGithub } from "react-icons/tfi";
import { PiLinkedinLogoFill } from "react-icons/pi";

const withSocialIconLink = (Icon: IconType, link: string) => {
  return function SocialLink() {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="w-[30px] h-[30px] cursor-pointer hover:-translate-y-1" />
      </a>
    );
  };
};

const GITHUB_LINK = "https://github.com/rjwilliams87/";
const LINKEDIN_LINK = "https://www.linkedin.com/in/ryan-j-williams-dev/";

export const GithubSocialLink = withSocialIconLink(TfiGithub, GITHUB_LINK);
export const LinkedinSocialLink = withSocialIconLink(PiLinkedinLogoFill, LINKEDIN_LINK);
