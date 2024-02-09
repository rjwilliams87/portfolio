export function Contact() {
  return (
    <div
      className="page-section bg-brand-background-dark text-brand-background min-h-[50vh] lg:min-h-svh"
      id="contact"
    >
      <div className="site-content-container">
        <div>
          <a
            className="text-5xl lg:text-8xl hover:text-brand-red"
            href="mailto:ryanjacobwilliams@gmail.com"
            target="_blank"
          >
            <span>EMAIL**</span>
          </a>
        </div>

        <div className="pt-6 text-xl lg:text-3xl">follow me on</div>
        <div>
          <a
            className="text-5xl lg:text-8xl hover:text-brand-blue"
            href="https://www.linkedin.com/in/ryan-j-williams-dev/"
            target="_blank"
          >
            <span>LINKEDIN</span>
          </a>
        </div>
        <div>
          <a
            className="text-5xl lg:text-8xl hover:text-brand-orange"
            href="https://github.com/rjwilliams87"
            target="_blank"
          >
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
}
