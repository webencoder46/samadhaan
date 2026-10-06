import Link from "next/link";
import Icon from "../../components/Icon";
import { Button, Badge, Title } from "../../components/ui";

export default function SuccessPage() {
  return (
    <section className="success-page section">
      <div className="success-illustration">
        <div className="success-ring"><Icon name="check" size={48} /></div>
        <span className="paper paper-one"><Icon name="file" /></span>
        <span className="paper paper-two"><Icon name="tea" /></span>
        <i></i><i></i><i></i>
      </div>
      <Badge tone="success">CASE RECEIVED • HQ NOTIFIED</Badge>
      <Title as="h1">FORM SUCCESSFULLY<br />SUBMITTED <span>✓</span></Title>
      <p className="lead">
        Aapki problem safely SAMADHAAN HQ tak pahunch gayi hai.<br />
        Ab hamari team isse dekhegi.
      </p>
      <div className="team-note">
        <Icon name="info" />
        <p>Team ko inform kar diya gaya hai. Team ko team hone ki bhi information de di gayi hai.</p>
      </div>
      <div className="button-row centered">
        <Link href="/">
          <Button>Back To Home</Button>
        </Link>
        <Link href="/submit">
          <Button variant="secondary">Another Problem Submit Karo</Button>
        </Link>
      </div>
    </section>
  );
}