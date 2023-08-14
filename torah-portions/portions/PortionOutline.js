import BibleOutline from '../BibleOutline';

export default function PortionOutline({
  summary,
  outline,
  haftarahOutline,
  specialHaftarah
}) {
  return (
    <div className="pb-5">
      <div>
        <h2 className="fw-bold pb-3">Portion Summary</h2>
        <p className="fs-5">{summary}</p>
      </div>
      <div>
        <h2 className="fw-bold mt-8 pb-3">Portion Outline</h2>
        <div className="mb-5">
          <h4 className="fw-bold mb-4">Torah</h4>

          <BibleOutline markdown={outline} />
        </div>
        <div>
          <h4 className="fw-bold mb-4">Prophets</h4>
          {specialHaftarah ? (
            <BibleOutline markdown={specialHaftarah.outline} />
          ) : (
            <BibleOutline markdown={haftarahOutline} />
          )}
        </div>
      </div>
      <hr />
      <p className="small">
        CREDITS: Torah and Haftarah references are based on Hebcal.com
        calculations for the current year. Gospel references are based on the
        First Fruits of Zion annual reading schedule. The ESV Bible text is used
        for all Scriptures, and audio is provided through the ESV API service.
        If you experience any interruption in the audio service, please try
        again later.
      </p>
    </div>
  );
}
