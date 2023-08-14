import Image from 'next/image';
import styles from '@/styles/media/Image.module.scss';
import imageRatios from '@/utils/_imageRatios';

export default function Images({ image, radius = [], className }) {
  const ratio = image.assetSpecs?.split('_');
  const foundElement = ratio
    ? imageRatios.find(
      (ratios) => ratios.aspectRatio === ratio[ratio.length - 1]
    )
    : imageRatios.find((r) => r.aspectRatio === '16x9');
  const style = !foundElement
    ? styles['image-16x9-container']
    : styles[foundElement.class];
  const assignClasses = (radiusToCheck) => {
    let radiusClasses = '';
    radiusClasses = radiusToCheck.map((r) => {
      switch (r) {
        case 'top':
          radiusClasses = `rounded-top ${radiusClasses}`;
          break;
        case 'left':
          radiusClasses = `rounded-start ${radiusClasses}`;
          break;
        case 'right':
          radiusClasses = `rounded-end ${radiusClasses}`;
          break;
        case 'bottom':
          radiusClasses = `rounded-bottom ${radiusClasses}`;
          break;
        default:
          break;
      }
      return radiusClasses;
    });
    return radiusClasses.join(' ');
  };

  const classes = radius.length === 0
    ? ''
    : assignClasses(radius);

  return (
    <div className={style}>
      <Image
        src={image.url ?? image}
        alt={image.caption ?? 'FFOZ'}
        fill
        priority
        className={`${styles.img} ${classes} ${className}`}
      />
    </div>
  );
}
