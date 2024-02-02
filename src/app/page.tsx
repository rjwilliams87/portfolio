import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="header">
        <div>
          <p>
            Hello. I’m Ryan, a full-stack engineer & entrepreneur based in
            Kansas City. Available for freelance & collaborations.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div id="work"></div>
      <div id="projects"></div>
      <div id="about"></div>
      <div id="contact"></div>
    </main>
  );
}
