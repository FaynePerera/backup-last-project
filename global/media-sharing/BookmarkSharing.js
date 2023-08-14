import Bookmark from './Bookmark';

export default function BookmarkSharing({ pageInfo, bookmarked, setBookmarked }) {
  const dimensions = {
    width: 22,
    height: 24
  };
  return (
    <span
      className="bg-white border border-light me-3 rounded-circle"
      style={{ padding: 10, width: 44, height: 44 }}
    >
      <Bookmark {...{ dimensions, bookmarked, setBookmarked }} {...pageInfo} />
    </span>
  );
}
