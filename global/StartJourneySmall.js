import Link from 'next/link';

export default function StartJourneySmall() {
  return (
    <div className="bg-light px-7 py-5 my-5 rounded d-flex flex-column  justify-content-center align-items-center">
      <h1 className="display-5 fw-bold mb-3 text-center">Start Your Journey</h1>
      <p className="fs-4 mb-5 text-center" style={{ maxWidth: '700px' }}>
        Create your free account and unlock full access to archived Torah
        Portions commentaries, your own curated dashboard, free downloadable
        resources, and more.
      </p>

      <Link href="/getstarted" className="btn btn-lg btn-primary">
        Get Started
      </Link>
    </div>
  );
}
