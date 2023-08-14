import SharingIcon from './SharingIcon';

export default function TwitterSharing({ dimensions, icon }) {
  const handleClick = () => {
    // TODO: define twitter actions
  };

  return <SharingIcon {...{ dimensions, icon, handleClick }} />;
}
