import SharingIcon from './SharingIcon';

export default function EmailSharing({ dimensions, icon }) {
  const handleClick = () => {
    // TODO: define instagram actions
  };

  return <SharingIcon {...{ dimensions, icon, handleClick }} />;
}
