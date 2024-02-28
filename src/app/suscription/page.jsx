"use client";

import emailjs from "@emailjs/browser";
import swal from "@sweetalert/with-react";
import { useRef } from "react";
import "../style.css";

export default function SuscriptionPage() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nz3knel", "template_diqsk16", form.current, {
        publicKey: "4rEDNyRT5eelMpM9o",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          swal(
            "Envio completado!",
            "Gracias por suscribirte a nuestro boletín.",
            "success",
            {
              button: false,
            }
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="max-w-lg mx-auto text-center py-12 px-6 items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Design better.</h1>
      <p className="text-gray-600 mb-8">
        Unlock your creativity with our modern design platform that is easy to
        learn and powerful to use.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputContainer">
          <div class="pr-40">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className=" ui-component-button-big emailInput text-left "
            />
          </div>

          <button type="submit" className="ui-component-button-per ">
            Join Waitlist
          </button>
        </div>
      </form>
      <p className="text-sm text-gray-500 gap-4">
        Available on Mac, Windows, and Linux.
      </p>
    </div>
  );
}
