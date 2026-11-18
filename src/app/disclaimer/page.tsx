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
          <h1>DISCLAIMER.</h1>
          
          <p className="disclaimer-intro">
            DEKHO BHAI YE BAS EK MAZAK HAI ISE JYADA SERIOUSLY MAT LO MAZE SE RAHO PADHAI LIKHYI KARO
            AUR JYADA BANDA-BANDI CHAKKAR ME MAT RAHO BAHUT BADI DUNIYA HAI AUR LIFE BHI PURI BACHI HAI
            YE PURA SARCASM HAI BAS MAI EK DIN KHAALI BAITHA THA THO YE BAKAR KAR DIYA JYADA DIMAG ME MAT LO
          </p>
          
          <hr />
          
          <div className="disclaimer-copy">
            <p>
              AUR HAA ISS WEBSITE ME SAB WORKING HAI SAAARE BUTTONS LINKED HAI AUR FORM SUPABASE SE LINKED HAI
              JO BHI FORM BHAROGE ACTULLAY ME MERE PAAS WO AAJAYEGA YE KOI DUUMY NHI HAI SAHI-SAHI BATAU THO
              SAB CHIZ WORKING HAI KUCH BARKAR KARNA HO THO KAR SAKTE HO  :) 
            </p>
          </div>

          {/* New "made by ca" section with hand-drawn arrow */}
          <div className="made-by-container">
            <svg 
              className="made-by-arrow" 
              width="80" 
              height="80" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curved line */}
              <path 
                d="M30 35 C 60 30, 85 50, 75 90" 
                stroke="white" 
                strokeWidth="6" 
                strokeLinecap="round" 
                fill="transparent" 
              />
              {/* Arrow head */}
              <path 
                d="M20 55 L 30 35 L 50 25" 
                stroke="white" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="transparent" 
              />
            </svg>
            <span className="made-by-text">made by ca(SPIDERMAN)</span>
          </div>
        </main>
      </div>
    </section>
  );
}
