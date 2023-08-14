import ccBrands from '@/lib/payment/_ccBrands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CreditCard({ card }) {
  return (
    <div className="fw-bold">
      <FontAwesomeIcon
        size="2xl"
        icon={ccBrands.find((brand) => brand.name === card.brand).icon}
      />
      <span className="text-capitalize font-monospace fs-small ms-2">
        {card.brand}
        {' '}
        <span className="fw-normal">#### </span>
        {' '}
        {card.last4}
        {' '}
        <span className="ms-4">Exp</span>
        {' '}
        {card.exp_month < 10 && 0}
        {`${card.exp_month}/${card.exp_year} `}
      </span>
      {' '}
    </div>
  );
}
