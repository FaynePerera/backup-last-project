const description = ``;
const title = ``;
const url = ``;

const seo = {
  title,
  titleTemplate: '%s | Website',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@',
    site: '@'
  }
};

export { seo as defaultSEO, url as defaultUrl };
