export function Contact() {
  return (
    <div
      className="page-section bg-brand-background-dark text-brand-background lg:min-h-svh"
      id="contact"
    >
      <div className="site-content-container">
        {/* <h2 id="services">CONTACT</h2> */}
        <div>
          <a
            className="text-3xl lg:text-8xl hover:text-brand-red"
            href="mailto:ryanjacobwilliams@gmail.com"
            target="_blank"
          >
            <span>EMAIL**</span>
          </a>
        </div>

        <div className="pt-6 text-3xl">follow me on</div>
        <div>
          <a
            className="text-3xl lg:text-8xl hover:text-brand-blue"
            href="mailto:ryanjacobwilliams@gmail.com"
            target="_blank"
          >
            <span>LINKEDIN</span>
          </a>
        </div>
        <div>
          <a
            className="text-3xl lg:text-8xl hover:text-brand-orange"
            href="mailto:ryanjacobwilliams@gmail.com"
            target="_blank"
          >
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
}
