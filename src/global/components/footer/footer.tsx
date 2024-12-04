import Link from "next/link";

import { GithubSocialLink, LinkedinSocialLink, Logo } from "@/global/components";

export function Footer() {
  return (
    <div className="relative w-full bg-[#202020] h-[19rem] z-[1]" id="contact">
      <div className="w-full h-[19rem] flex flex-col justify-end fixed bottom-0 left-0 right-0 -z-10">
        <footer className="px-4 lg:px-24 w-full mx-auto flex flex-col justify-between py-8">
          <div className="border-b border-floral-white pb-6 flex justify-between items-end">
            <div className="flex gap-4">
              <Logo.Light height="45" width="45" />
              <div className="flex flex-col h-full justify-center items-start">
                <div className="text-base font-medium">Ryan J. Williams</div>
                <div className="text-sm">Software Engineer</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <GithubSocialLink />
              <LinkedinSocialLink />
            </div>
          </div>
          <div className="flex items-end justify-between py-8">
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-4 items-start">
                <div className="text-lg hover:text-[#999]">
                  <Link href="/#about">About</Link>
                </div>
                <div className="text-lg hover:text-[#999]">
                  <Link href="/#services">Services</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start">
                {/* <div className="text-lg hover:text-[#999]">
                  <Link href="/blog">Blog</Link>
                </div> */}
                <div className="text-lg hover:text-[#999]">
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
