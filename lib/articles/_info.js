import { snakeCaseFormatter } from '@/utils/_format';

export const getLabel = (articleType, articleGroup, parashah) => {
  let value = null;
  if (articleType === 'Portions_commentary' && parashah?.title) {
    value = parashah.title;
  } else if (articleType === 'Gospel_commentary' && articleGroup) {
    value = snakeCaseFormatter(articleGroup);
  }
  return value;
};

export const dummy = () => {
  const value = null;
  return value;
};
