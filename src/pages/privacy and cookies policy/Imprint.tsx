import React from "react";

type Props = {};

export default function Imprint({}: Props) {
  return (
    <div className="container py-5 fw-bold">
      <h2 className="mb-5">Impressum:</h2>
      <p className="">RM Watches Munich GmbH</p>
      <p>Feringastr. 6</p>
      <p>85774 Unterföhring</p>
      <p>Deutschland</p>
      <p>Tel.: 0173 8971063</p>
      <p>E-Mail: info@rmwatches.de</p>
      <p>Registergericht: Amtsgericht München</p>
      <p>Registernummer: HRB270415</p>
      <p>Geschäftsführer/innen: Moritz Rave, Trayche Richi Hristovski</p>
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
        <a href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a>
      </p>
      <p>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </p>
    </div>
  );
}
