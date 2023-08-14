import SharingIcon from './SharingIcon';

export default function FacebookSharing({ dimensions, icon }) {
  const handleClick = () => {
    // TODO: define facebook actions
  };

  return <SharingIcon {...{ dimensions, icon, handleClick }} />;
}
