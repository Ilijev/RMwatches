import React from "react";

type Props = {};

export default function RightOfWithdrawal({}: Props) {
  return (
    <div className="container py-5">
      <h1 className="mb-4">A. Widerrufsbelehrung</h1>
      <h2>Einleitung</h2>
      <p>
        Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei
        Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu
        Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
        selbständigen beruflichen Tätigkeit zugerechnet werden können:
      </p>
      <h2>Widerrufsrecht</h2>
      <p>
        Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
        diesen Vertrag zu widerrufen.
      </p>
      <p>
        Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein
        von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte
        Ware in Besitz genommen haben bzw. hat.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (RM Watches Munich GmbH,
        Feringastr. 6, 85774 Unterföhring, Deutschland, Tel.: 0173 8971063,
        E-Mail: info@rmwatches.de) mittels einer eindeutigen Erklärung (z. B.
        ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss,
        diesen Vertrag zu widerrufen, informieren. Sie können dafür das
        beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
        vorgeschrieben ist.
      </p>
      <p>
        Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
        absenden.
      </p>
      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
        wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
        Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine
        andere Art der Lieferung als die von uns angebotene, günstigste
        Standardlieferung gewählt haben), unverzüglich und spätestens binnen
        vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
        Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
        Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
        ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
        wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
        wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung
        verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie
        den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je
        nachdem, welches der frühere Zeitpunkt ist.
      </p>
      <p>
        Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
        vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
        Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
        Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn
        Tagen absenden.
      </p>
      <p>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>
      <p>
        Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn
        dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
        Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit
        ihnen zurückzuführen ist.
      </p>
      <h2>Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h2>
      <p>
        Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren,
        deren Preis von Schwankungen auf dem Finanzmarkt abhängt, auf die der
        Unternehmer keinen Einfluss hat und die innerhalb der Widerrufsfrist
        auftreten können.
      </p>
      <p>
        Das Widerrufsrecht gilt nicht für Verbraucher, die zum Zeitpunkt des
        Vertragsschlusses keinem Mitgliedstaat der Europäischen Union angehören
        und deren alleiniger Wohnsitz und Lieferadresse zum Zeitpunkt des
        Vertragsschlusses außerhalb der Europäischen Union liegen.
      </p>
      <h2>Allgemeine Hinweise</h2>
      <ol>
        <li>
          Bitte vermeiden Sie Beschädigungen und Verunreinigungen der Ware.
          Senden Sie die Ware bitte in Originalverpackung mit sämtlichem Zubehör
          und mit allen Verpackungsbestandteilen an uns zurück. Verwenden Sie
          ggf. eine schützende Umverpackung. Wenn Sie die Originalverpackung
          nicht mehr besitzen, sorgen Sie bitte mit einer geeigneten Verpackung
          für einen ausreichenden Schutz vor Transportschäden.
        </li>
        <li>Senden Sie die Ware bitte nicht unfrei an uns zurück.</li>
        <li>
          Bitte beachten Sie, dass die vorgenannten Ziffern 1-2 nicht
          Voraussetzung für die wirksame Ausübung des Widerrufsrechts sind.
        </li>
      </ol>
      <h2>Widerrufsformular</h2>

      <form action="mailto:info@rmwatches.de" method="post" encType="text/plain">
        <div className="form-group">
          <label htmlFor="order-details">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</label>
          <textarea className="form-control" id="order-details" name="order-details" ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="order-date">Bestellt am (*)</label>
          <input className="form-control" type="text" id="order-date" name="order-date" />
        </div>

        <div className="form-group">
          <label htmlFor="received-date">Erhalten am (*)</label>
          <input className="form-control" type="text" id="received-date" name="received-date" />
        </div>

        <div className="form-group">
          <label htmlFor="consumer-name">Name des/der Verbraucher(s)</label>
          <input className="form-control" type="text" id="consumer-name" name="consumer-name" />
        </div>

        <div className="form-group">
          <label htmlFor="consumer-address">Anschrift des/der Verbraucher(s)</label>
          <input className="form-control" type="text" id="consumer-address" name="consumer-address" />
        </div>

        <div className="form-group">
          <label htmlFor="consumer-signature">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</label>
          <input className="form-control" type="text" id="consumer-signature" name="consumer-signature" />
        </div>

        <div className="form-group">
          <label htmlFor="date">Datum(*)</label>
          <input className="form-control" type="text" id="date" name="date" />
        </div>

        <p>(*) Bitte Unzutreffendes streichen.</p>

        <input className="btn btn-primary" type="submit" value="Formular absenden" />
      </form>
      </div>
  )
}
