import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowUpFromBracket
} from '@fortawesome/pro-regular-svg-icons';
import Bookmark from '@/components/global/media-sharing/Bookmark';

export default function TopBarFunctions({
  shareText,
  pageInfo,
  search,
  bookmark = true
}) {
  return (
    <div className="ms-auto">
      {search && (
        <Button variant="outline-dark" className="me-3">
          <FontAwesomeIcon icon={faSearch} className="me-2" />
          SEARCH
        </Button>
      )}
      {bookmark && (
        <Bookmark {...pageInfo} className="btn btn-outline-dark me-3" />
      )}

      <Button variant="outline-dark">
        <span>SHARE THIS </span>
        <span>{shareText}</span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="ms-2" />
      </Button>
    </div>
  );
}
