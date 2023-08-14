import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { LoadScriptNext } from '@react-google-maps/api';

const libraries = ['places'];
export default function GoogleMaps({ children }) {
  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
      loadingElement={<Skeleton count={5} />}
    >
      {children}
    </LoadScriptNext>
  );
}
