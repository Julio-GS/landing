export default function Hero() {
  return (
    <section class="ui-section-hero">
      <div class="ui-layout-container">
        <div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
          {/* <!-- COPYWRITING --> */}
          <div>
            <h1>Design better.</h1>
            <p class="ui-text-intro">
              Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
            </p>
            {/* <!-- CTA --> */}
            <div class="ui-component-cta ui-layout-flex">
              <a
                href="#"
                role="link"
                aria-label="#"
                class="ui-component-button ui-component-button-normal ui-component-button-primary"
              >
                Get Started for Free
              </a>
              <p class="ui-text-note">
                <small>30 days free trial.</small>
              </p>
            </div>
          </div>
          {/* <!-- IMAGE --> */}
          <img
            src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
            loading="lazy"
            alt="#"
            class="ui-image-half-right"
          />
        </div>
      </div>
    </section>
  );
}
