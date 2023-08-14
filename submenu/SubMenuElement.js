import Image from 'next/image';
import styles from '@/styles/navigation/SubMenuElement.module.scss';

export default function SubMenuElement({ image, title, body, href, source }) {
  const onClick = () => {
    window.location.href = href ?? 'test';
  };

  return (
    <div
      className={`d-flex flex-row ${source === 'mobile' ? 'p-4' : 'p-3'} ${
        styles.container
      }`}
      onClick={onClick}
    >
      <div className={styles['container-image']}>
        <Image
          src={image.url}
          alt={image.caption ?? 'FFOZ'}
          width={48}
          height={48}
          priority
        />
      </div>
      <div className={`${styles['container-text']} d-flex flex-column`}>
        <h5 className={`mb-1 fw-semibold fs-6 ${styles.body}`}>{title}</h5>
        <h5 className="align-self-end fw-lighter small body mb-0">{body}</h5>
      </div>
    </div>
  );
}
