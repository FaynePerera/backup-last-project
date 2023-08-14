import styles from '@/styles/donate/AmountBox.module.scss';
import { number, setMaxLength } from '@/utils/validate/_validate';

export default function AmountBox({ total, setTotal }) {
  const maxLength = 5;
  return (
    <div className={`align-items-center ${styles.inputBoxContainer}`}>
      <div className="input-group">
        <span
          className={`input-group-text bg-primary border-0 fw-bold ${styles.inputAddon}`}
        >
          $
        </span>
        <input
          className={`form-control border-start-0 border-primary fw-bold fs-3 text-center outline-0 ${styles.inputBox}`}
          type="number"
          pattern="[0-9]*"
          onKeyDown={number}
          value={total > 0 ? total : ''}
          onChange={(e) => {
            setTotal(e.target.value);
          }}
          onInput={(e) => setMaxLength(e, maxLength)}
        />
      </div>
    </div>
  );
}
