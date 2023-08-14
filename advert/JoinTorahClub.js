import Link from 'next/link';

export default function JoinTorahClub({ className }) {
  return (
    <div
      className={`bg-light rounded-2 p-4 text-center d-flex justify-content-center p-6 ${className}`}
    >
      <div style={{ maxWidth: 752 }}>
        <div className="mb-5 fs-1 fw-bold">
          Join a Torah Club and Study the Bible with Other Disciples
        </div>
        <div className="fs-4 mb-5">
          Torah Club is a small-group Bible study community, discovering the
          Scriptures from a Messianic Jewish perspective.
        </div>
        <div className="text-gray-700 mb-5">
          Torah Club is “where disciples learn.” It&nbsp;s a deep dive into the
          Word of God, designed to move disciples past shallow and repetitive
          teaching that has bored them for too long. It&nbsp;s a challenging,
          rewarding, and meaningful study. Torah Club connects with disciples
          seeking biblical authenticity.
        </div>
        <div>
          <Link href="/torah-club" className="btn btn-primary">
            JOIN A CLUB
          </Link>
        </div>
      </div>
    </div>
  );
}
