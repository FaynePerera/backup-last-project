import Images from '@/components/media/Image';
import Link from 'next/link';
import { useGlobalState } from '@/lib/context/globalContext';
import placeholder from '@/lib/global/_placeholder';

export default function FreeTorahSection() {
  const { isMobile, isLoggedIn } = useGlobalState();

  return (
    <div className={`d-flex flex-column mb-5 ${isMobile && 'pt-2'}`}>
      <p className="fw-bold fs-2 m-0">Free Torah Portions Card</p>
      <p className="fw-normal fs-4 mb-5" style={!isMobile ? { width: 703 } : {}}>Follow the weekly Torah, Haftarah, and Gospel readings with our free Torah Portions Card, available in print or as a download.</p>
      <Images image={placeholder.find((x) => x.index === 4)} radius={['top']} />
      <div className={`bg-gray-100 p-5 d-flex rounded-bottom ${isMobile && 'flex-column'}`}>
        <div className={`rounded p-4 bg-white ${!isMobile && 'me-4'} ${isMobile && 'mb-4'}`}>
          <p className="fw-bold fs-4 m-0">Free Printed Cards</p>
          <p className="fw-normal fs-large">Request free printed Torah Portions Cards, available for shipping to the United States and Canada only.</p>
          <Link href="/torah-portions/mail-order" role="button" className="btn btn-primary">MAIL ORDER</Link>
        </div>
        <div className="rounded p-4 bg-white">
          <p className="fw-bold fs-4 m-0">Free Downloadable Card</p>
          <p className="fw-normal fs-large">Download a free PDF version of the Torah Portions Card. Feel free to reprint without any modifications.</p>
          <Link href={isLoggedIn ? '/api/download-file' : '/signin'} role="button" className="btn btn-primary">PDF DOWNLOAD</Link>
        </div>
      </div>
    </div>
  );
}
