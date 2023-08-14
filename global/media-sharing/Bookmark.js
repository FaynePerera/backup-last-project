import { useSession } from 'next-auth/react';
import AccountMessageModal from '../account-messages/AccountMessageModal';
import { useState } from 'react';
import shoko from '@/lib/_shoko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/pro-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/pro-solid-svg-icons';
import { useBookmarkState } from '@/lib/context/BookmarkContext';

export default function Bookmark({
  className,
  title,
  label,
  excerpt,
  assetId,
  assetType,
  dimensions,
}) {
  const { status } = useSession();
  const [showModal, setShowModal] = useState(false);
  const { bookmarked, setBookmarked, url } = useBookmarkState();
  const handleClick = () => {
    if (status !== 'authenticated') {
      setShowModal(!showModal);
      return;
    }
    if (bookmarked) {
      shoko.post('/bookmarks/delete', { url }).then(() => {
        setBookmarked(false);
      });
    } else {
      shoko
        .post('/bookmarks', {
          url,
          title,
          label,
          excerpt,
          asset_id: assetId,
          asset_type: assetType
        })
        .then(() => {
          setBookmarked(true);
        });
    }
  };
  return (
    <>
      <span
        className={`${className} ${bookmarked && 'text-info'} link`}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={bookmarked ? faBookmarkSolid : faBookmark} scale="1.5" style={dimensions} />
      </span>
      <AccountMessageModal
        action="bookmark"
        show={showModal}
        onHide={handleClick}
      />
    </>
  );
}
