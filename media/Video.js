import Vimeo from '@u-wave/react-vimeo';
import Images from './Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/pro-solid-svg-icons';
import styles from '@/styles/media/Video.module.scss';
import { useState } from 'react';

export default function Video({ thumbnail, videoCode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [vimeoVideo, setVimeoVideo] = useState(null);

  const iconOnClick = (vCode) => {
    setIsVisible(false);
    setVimeoVideo(() => (
      <Vimeo
        video={`https://player.vimeo.com/video/${vCode}`}
        responsive
        autoplay
      />
    ));
  };

  return (
    <>
      {isVisible && (
        <div className={styles['video-container']}>
          <Images image={thumbnail} />
          <FontAwesomeIcon
            icon={faPlayCircle}
            size="8x"
            onClick={() => iconOnClick(videoCode)}
          />
        </div>
      )}
      {vimeoVideo}
    </>
  );
}
