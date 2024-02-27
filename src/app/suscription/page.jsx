import "../style.css";

export default function SuscriptionPage() {
  return (
    <div className="max-w-lg mx-auto text-center py-12 px-6 ">
      <h1 className="text-4xl font-bold mb-4">Design better.</h1>
      <p className="text-gray-600 mb-8">
        Unlock your creativity with our modern design platform that is easy to
        learn and powerful to use.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center mb-4 ">
        <div class="email-input">
          <input type="te" placeholder="Email" />
        </div>
        <div class="">
          <a
            href="#"
            role="link"
            aria-label="#"
            class="ui-component-button ui-component-button-normal ui-component-button-primary"
          >
            Join Waitlist
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Available on Mac, Windows, and Linux.
      </p>
    </div>
  );
}
