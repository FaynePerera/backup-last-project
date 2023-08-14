import styles from '@/styles/results/autocomplete.module.scss';

export function AutoComplete({ children, ...props }) {
  return (
    <div className={styles.autocomplete} {...props}>
      <div className={styles.items}>{children}</div>
    </div>
  );
}
export function AutoCompleteItem({ children, ...props }) {
  return (
    <div {...props} className={styles.item}>
      {children}
    </div>
  );
}
