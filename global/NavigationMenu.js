import Images from '../media/Image';
import Link from 'next/link';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDropdown } from '@fortawesome/pro-solid-svg-icons';
import { useGlobalState } from '@/lib/context/globalContext';
import { useState } from 'react';
import style from '@/styles/navigation-menu/NavigationMenu.module.scss';

export default function NavigationMenu({ navigationInfo }) {
  const { sections, sectionLabel, sectionImage } = navigationInfo;
  const { isMobile } = useGlobalState();
  const [show, setShow] = useState(!isMobile);
  return (
    <div>
      {isMobile ? (
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-navmenu"
            className={`bg-white ln-base w-100 ${style.noCaret} `}
          >
            <FontAwesomeIcon className="ms-0 me-3" icon={faListDropdown} />
            {sectionLabel}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {sections.map((section) => (
              <Dropdown.Item href={section.id}>{section.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <ListGroup>
          <ListGroupItem>
            <Images image={sectionImage} />
          </ListGroupItem>
          <ListGroupItem onClick={() => (isMobile && setShow(!show))}>
            <FontAwesomeIcon className="me-3 ms-4" icon={faListDropdown} />
            {sectionLabel}
          </ListGroupItem>
          {show && sections.map((section) => (
            <Link href={section.id} className="nostyle">
              <ListGroupItem>
                {section.name}
              </ListGroupItem>
            </Link>
          ))}
        </ListGroup>
      )}
    </div>
  );
}
