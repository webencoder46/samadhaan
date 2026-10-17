import Link from "next/link";
import Icon from "../../components/Icon";

export const metadata = {
  title: "Disclaimer | SAMADHAAN",
  description: "Important information about using SAMADHAAN.",
};

export default function DisclaimerPage() {
  return (
    <section className="disclaimer-page">
      <div className="disclaimer-content">
        <header className="disclaimer-header">
          <Link href="/" className="disclaimer-brand">
            <span>S</span>
            <strong>SAMADHAAN</strong>
          </Link>
          <Link href="/" className="disclaimer-home">
            <Icon name="arrow" size={17} /> Home Wapas
          </Link>
        </header>

        <main>
          <span className="disclaimer-eyebrow">Important Suchna</span>
          <h1>DISCLAIMER<span>.</span></h1>
          <p className="disclaimer-intro">
            SAMADHAAN ek fictional student-support initiative hai. Yahan di gayi
            information support aur guidance ke liye hai, kisi professional advice
            ka replacement nahi.
          </p>
          <hr />
          <div className="disclaimer-copy">
            <p>
              Hum students ki problems ko sunne, samajhne aur unke baare mein
              support dene ki poori koshish karte hain. Lekin har situation ka
              solution ya response ka fixed time guarantee nahi kiya ja sakta.
            </p>
            <p>
              Agar aapko real emergency, safety concern ya immediate help ki
              zaroorat ho, to turant kisi trusted adult, parent, teacher, school
              authority ya local emergency service se contact karein.
            </p>
            <p>
              SAMADHAAN par form submit karna acknowledgement ya official action
              ki guarantee nahi hai. Zaroori details share karte waqt apni privacy
              ka dhyaan rakhein.
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
