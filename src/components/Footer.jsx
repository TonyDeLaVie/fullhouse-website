import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto">
        <div className="py-8 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Fullhouse. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => toggleSection('impressum')}
                className="text-gray-600 hover:text-black transition cursor-pointer"
              >
                Impressum
              </button>
              <button
                onClick={() => toggleSection('datenschutz')}
                className="text-gray-600 hover:text-black transition cursor-pointer"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {openSection === 'impressum' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="py-8 px-6 border-t border-gray-200">
                <div className="container max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1324] mb-8">
                    Impressum
                  </h2>
                  
                  <div className="prose prose-lg max-w-none space-y-8 text-[#0B1324]">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h3>
                      <p className="leading-relaxed">
                        Presber Müller GbR<br />
                        <br />
                        Hauptstr. 24<br />
                        65344 Eltville<br />
                        Deutschland
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Kontakt</h3>
                      <p className="leading-relaxed">
                        <a href="tel:+4915252884304" className="text-blue-600 hover:underline">+49 (0) 15252884304</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Vertretungsberechtigte Geschäftsführer</h3>
                      <p className="leading-relaxed">
                        Viktor Presber<br />
                        Jaro Müller
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h3>
                      <p className="leading-relaxed">
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                        DE365928438
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                      <p className="leading-relaxed">
                        Viktor Presber<br />
                        Jaro Müller<br />
                        <br />
                        Hauptstr. 24<br />
                        65344 Eltville<br />
                        Deutschland
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Haftungsausschluss</h3>
                      
                      <h4 className="text-xl font-semibold mt-6 mb-3">Haftung für Inhalte</h4>
                      <p className="leading-relaxed text-gray-700">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                      </p>

                      <h4 className="text-xl font-semibold mt-6 mb-3">Haftung für Links</h4>
                      <p className="leading-relaxed text-gray-700">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                      </p>

                      <h4 className="text-xl font-semibold mt-6 mb-3">Urheberrecht</h4>
                      <p className="leading-relaxed text-gray-700">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {openSection === 'datenschutz' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="py-8 px-6 border-t border-gray-200">
                <div className="container max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0B1324] mb-8">
                    Datenschutzerklärung
                  </h2>
                  
                  <div className="prose prose-lg max-w-none space-y-8 text-[#0B1324] max-h-[600px] overflow-y-auto pr-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Maßgebliche Rechtsgrundlagen</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
                      </p>
                      
                      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                        <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
                        <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
                        <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</li>
                        <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.</li>
                      </ul>
                      
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                      </p>
                      
                      <p className="leading-relaxed text-gray-700">
                        <strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer DSG) als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Sicherheitsmaßnahmen</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Übermittlung von personenbezogenen Daten</h3>
                      <p className="leading-relaxed text-gray-700">
                        Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Internationale Datentransfers</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde (Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau anderweitig gesichert ist, insbesondere durch Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO), ausdrückliche Einwilligung oder im Fall vertraglicher oder gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung bei den einzelnen Anbietern aus dem Drittland mit, wobei die Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten. Informationen zu Drittlandtransfers und vorliegenden Angemessenheitsbeschlüssen können dem Informationsangebot der EU-Kommission entnommen werden: <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        <strong>EU-US Trans-Atlantic Data Privacy Framework:</strong> Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat die EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen als auch weitere Informationen zu dem DPF können Sie der Webseite des Handelsministeriums der USA unter <a href="https://www.dataprivacyframework.gov/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/</a> (in Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Rechte der betroffenen Personen</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Rechte der betroffenen Personen aus der DSGVO:</strong> Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                        <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</li>
                        <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
                        <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
                        <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
                        <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
                        <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</li>
                        <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.</li>
                      </ul>
                    </div>

                    {/* Weitere Abschnitte der vollständigen Datenschutzerklärung werden hier fortgesetzt */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Einsatz von Cookies</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z. B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes speichern. Cookies können ferner zu unterschiedlichen Zwecken eingesetzt werden, z. B. zu Zwecken der Funktionsfähigkeit, Sicherheit und Komfort von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Hinweise zur Einwilligung:</strong> Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Daher holen wir von den Nutzern eine vorhergehende Einwilligung ein, außer wenn diese gesetzlich nicht gefordert ist. Eine Einwilligung ist insbesondere nicht notwendig, wenn das Speichern und das Auslesen der Informationen, also auch von Cookies, unbedingt erforderlich sind, um dem den Nutzern einen von ihnen ausdrücklich gewünschten Telemediendienst (also unser Onlineangebot) zur Verfügung zu stellen. Zu den unbedingt erforderlichen Cookies gehören in der Regel Cookies mit Funktionen, die der Anzeige und Lauffähigkeit des Onlineangebotes, dem Lastausgleich, der Sicherheit, der Speicherung der Präferenzen und Auswahlmöglichkeiten der Nutzer oder ähnlichen mit der Bereitstellung der Haupt- und Nebenfunktionen des von den Nutzern angeforderten Onlineangebotes zusammenhängenden Zwecken dienen. Die widerrufliche Einwilligung wird gegenüber den Nutzern deutlich kommuniziert und enthält die Informationen zu der jeweiligen Cookie-Nutzung.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Geschäftliche Leistungen</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten (zusammenfassend bezeichnet als "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen der Kommunikation mit den Vertragspartnern (oder vorvertraglich), z. B., um Anfragen zu beantworten.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Wir verarbeiten diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören insbesondere die Verpflichtungen zur Erbringung der vereinbarten Leistungen, etwaige Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verarbeiten wir die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten verbundenen Verwaltungsaufgaben sowie der Unternehmensorganisation. Darüber hinaus verarbeiten wir die Daten auf Grundlage unserer berechtigten Interessen an einer ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung sowie an Sicherheitsmaßnahmen zum Schutz unserer Vertragspartner und unseres Geschäftsbetriebes vor Missbrauch, Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte (z. B. zur Beteiligung von Telekommunikations-, Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden). Im Rahmen des geltenden Rechts geben wir die Daten von Vertragspartnern nur insoweit an Dritte weiter, als dies für die vorgenannten Zwecke oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Über weitere Formen der Verarbeitung, z. B. zu Marketingzwecken, werden die Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. Namen, Adressen); Zahlungsdaten (z. B. Bankverbindungen, Rechnungen, Zahlungshistorie); Kontaktdaten (z. B. E-Mail, Telefonnummern); Vertragsdaten (z. B. Vertragsgegenstand, Laufzeit, Kundenkategorie).
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Betroffene Personen:</strong> Interessenten. Geschäfts- und Vertragspartner.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten; Kontaktanfragen und Kommunikation; Büro- und Organisationsverfahren. Verwaltung und Beantwortung von Anfragen.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Bereitstellung des Onlineangebotes und Webhosting</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.).); Sicherheitsmaßnahmen. Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von so genannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Löschung von Daten: Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        <strong>1&1 IONOS:</strong> Leistungen auf dem Gebiet der Bereitstellung von informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Speicherplatz und/oder Rechenkapazitäten); Dienstanbieter: 1&1 IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); Website: <a href="https://www.ionos.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ionos.de</a>; Datenschutzerklärung: <a href="https://www.ionos.de/terms-gtc/terms-privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/terms-privacy</a>. Auftragsverarbeitungsvertrag: <a href="https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/auftragsverarbeitung/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/auftragsverarbeitung/</a>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Kontakt- und Anfragenverwaltung</h3>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. E-Mail, Telefonnummern); Inhaltsdaten (z. B. Eingaben in Onlineformularen); Nutzungsdaten (z. B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, Einwilligungsstatus).
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Betroffene Personen:</strong> Kommunikationspartner.
                      </p>
                      <p className="leading-relaxed text-gray-700 mb-4">
                        <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
                      </p>
                      <p className="leading-relaxed text-gray-700">
                        <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}

