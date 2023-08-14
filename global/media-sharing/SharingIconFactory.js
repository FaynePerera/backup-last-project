import * as SharingElement from '.';

export default function SharingIconFactory({ network }) {
  // gets the sharing component from the current folder
  const Component = SharingElement[network.name];
  return Component && <Component {...network} />;
}
