export default function Testimonial() {
  return (
    <section class="ui-section-testimonial ">
      <div class="ui-layout-container m-3">
        <div class="ui-section-testimonial__layout ui-layout-grid ui-layout-grid-2">
          <div class="ui-layout-column-4">
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg"
              alt="#"
              class="ui-section-testimonial--avatar"
            />
            <p class="ui-section-testimonial--quote ui-text-intro">
              &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.&rdquo;
            </p>
            <p class="ui-section-testimonial--author">
              <strong>Jane Doe</strong>
              <br></br>
              <small class="ui-text-note">CEO of Company</small>
            </p>
          </div>
          <div class="ui-layout-column-4">
            <img
              src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg"
              alt="#"
              class="ui-section-testimonial--avatar"
            />
            <p class="ui-section-testimonial--quote ui-text-intro">
              &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.&rdquo;
            </p>
            <p class="ui-section-testimonial--author">
              <strong>Jane Doe</strong>
              <br></br>
              <small class="ui-text-note">CEO of Company</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
