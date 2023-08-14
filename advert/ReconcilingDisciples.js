import logo from '../../public/logos/ffoz/ffoz-icon-round-color.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ReconcilingDisciples({ className }) {
  return (
    <div className={`bg-light rounded-2 p-4 text-center ${className}`}>
      <div className="mb-3">
        <Image
          src={logo}
          alt="Reconciling Disciples"
          width={190}
          height={190}
          priority
        />
      </div>
      <h3 className="mb-4">
        Reconciling Disciples with God&apos;s Prophetic Promises to Israel
      </h3>
      <div className="text-dark mb-5">
        Our mission statement encapsulates what we feel God has called us to
        accomplish in the world. We hope to contribute to the ultimate
        reconciliation of two estranged peoples of God: the followers of Yeshua
        of Nazareth and the Jewish people.
      </div>
      <div>
        <Link href="#" className="btn btn-outline-dark">
          Learn More
        </Link>
      </div>
    </div>
  );
}
