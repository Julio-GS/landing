import moment from "moment";
import "moment/locale/es";

export default function Close() {
  moment.locale("es");
  const fechaActual = moment(); // Obtiene la fecha y hora actual
  const fechaFormateada = fechaActual.format("dddd, D [de] MMMM [de] YYYY");
  const fechaFormateadaMayusculas = fechaFormateada.replace(/^\w/, (letra) =>
    letra.toUpperCase()
  );
  return (
    <section class="ui-section-close">
      <div class="ui-layout-container">
        <div class="ui-layout-column-6 ui-layout-column-center">
          <h2>Ready to start?</h2>
          <p class="ui-text-intro">{fechaFormateadaMayusculas}</p>
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
      </div>
    </section>
  );
}
