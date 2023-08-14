import socialNetworks from '@/lib/global/_mediaSharing';
import SharingIconFactory from './SharingIconFactory';
import BookmarkSharing from './BookmarkSharing';

export default function MediaNetworks({ text, pageInfo }) {
  const activeNetworks = socialNetworks.filter((network) => network.active);

  return (
    <div className="d-flex flex-column align-items-center bg-light rounded p-5 mx-auto">
      <p className="fw-semibold xsmall em-spacing-02 text-center text-uppercase mb-0">{text}</p>
      <p className="fs-5 em-spacing-02 text-center">SHARE or BOOKMARK</p>
      <div className="d-flex">
        {
        activeNetworks.map((network) => {
          const networkInfo = {
            ...network,
            pageInfo
          };
          return <SharingIconFactory key={network.id} network={networkInfo} />;
        })
        }
        <BookmarkSharing {...{ pageInfo }} />
      </div>
    </div>
  );
}
