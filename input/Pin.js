import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import styles from '@/styles/input/Pin.module.scss';
import { number } from '@/utils/validate/_validate';

export default function Pin({
  autoFocus = false,
  inputProps,
  length = 6,
  onChange = () => null,
  onCompleted = () => null,
  placeholder = '',
  type = 'number',
  value: defaultValue = '',
  alert = false,
  clearValues = 0
}) {
  /**
   * generate a new array, map through it
   * and replace with the value when possible
   */
  const fillValues = (value) => new Array(length).fill('').map((_, index) => value[index] ?? '');
  let ii = 0;
  const [values, setValues] = useState(fillValues(defaultValue));
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isPending, setIsPending] = useState(false);
  const inputsRefs = useMemo(
    () => new Array(length).fill(null).map(() => createRef()),
    [length]
  );
  const validate = (input) => {
    if (type === 'number') {
      return /^\d/.test(input);
    }
    if (type === 'alphanumeric') {
      return /^[a-zA-Z0-9]/.test(input);
    }

    return true;
  };

  const selectInputContent = (index) => {
    const input = inputsRefs[index].current;

    if (input) {
      requestAnimationFrame(() => {
        input.select();
      });
    }
  };

  const completed = (stringifiedValues) => {
    setIsPending(true);
    onCompleted(stringifiedValues);
  };
  const resetValues = () => {
    setValues(fillValues(defaultValue));
  };
  useEffect(() => {
    if (clearValues > 0) {
      resetValues();
    }
  }, [clearValues]);

  const setValue = (value, index) => {
    const nextValues = [...values];
    nextValues[index] = value;

    setValues(nextValues);

    const stringifiedValues = nextValues.join('');
    const isCompleted = stringifiedValues.length === length;

    if (isCompleted) {
      completed(stringifiedValues);
      return;
    }

    onChange(stringifiedValues);
  };

  const focusInput = useCallback(
    (index) => {
      const input = inputsRefs[index]?.current;

      if (input) {
        requestAnimationFrame(() => {
          input.focus();
        });
      }
    },
    [inputsRefs]
  );

  const blurInput = (index) => {
    const input = inputsRefs[index]?.current;

    if (input) {
      requestAnimationFrame(() => {
        input.blur();
      });
    }
  };

  const onInputFocus = (index) => {
    if (alert && values.join('').length === length) {
      resetValues();
    }
    const input = inputsRefs[index]?.current;

    if (input) {
      setFocusedIndex(index);
      selectInputContent(index);
    }
  };

  const onInputChange = (event, index) => {
    const eventValue = event.target.value;
    /**
     * ensure we only display 1 character in the input
     * by clearing the already setted value
     */
    const value = eventValue.replace(values[index], '');

    /**
     * if the value is not valid, don't go any further
     * and select the content of the input for a better UX
     */
    if (!validate(value)) {
      selectInputContent(index);
      return;
    }

    /**
     * otp code
     */
    if (value.length > 1) {
      setValues(fillValues(eventValue));

      const isCompleted = eventValue.length === length;

      if (isCompleted) {
        completed(eventValue);
        blurInput(index);
        return;
      }

      return;
    }

    setValue(value, index);

    /**
     * if the input is the last of the list
     * blur it, otherwise focus the next one
     */
    if (index === length - 1) {
      blurInput(index);
      return;
    }

    focusInput(index + 1);
  };

  const onInputKeyDown = (event, index) => {
    if (type === 'number') {
      number(event);
    }
    const eventKey = event.key;

    if (eventKey === 'Backspace' || eventKey === 'Delete') {
      /**
       * prevent trigger a change event
       * `onInputChange` won't be called
       */
      event.preventDefault();

      setValue('', focusedIndex);
      focusInput(index - 1);

      return;
    }

    /**
     * since the value won't change, `onInputChange` won't be called
     * only focus the next input
     */
    if (eventKey === values[index]) {
      focusInput(index + 1);
    }
  };

  const onInputPaste = (event, index) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData('text');
    const nextValues = pastedValue.slice(0, length);

    if (!validate(nextValues)) {
      return;
    }

    setValues(fillValues(nextValues));

    const isCompleted = nextValues.length === length;

    if (isCompleted) {
      completed(nextValues);
      blurInput(index);
      return;
    }

    focusInput(nextValues.length);
  };

  /**
   * autoFocus
   */
  useEffect(() => {
    if (autoFocus) {
      focusInput(0);
    }
  }, [autoFocus, focusInput, inputsRefs]);

  return (
    <div className={styles.container}>
      {inputsRefs.map((ref, i) => {
        const element = (
          <input
            className={`form-control ${styles.item} ${
              alert ? 'border-danger' : ''
            } ${isPending ? 'border-primary' : ''}`}
            key={`pin_input_${ii++}`}
            onChange={(event) => onInputChange(event, i)}
            onFocus={() => onInputFocus(i)}
            onKeyDown={(event) => onInputKeyDown(event, i)}
            onPaste={(event) => onInputPaste(event, i)}
            placeholder={placeholder}
            ref={ref}
            type={type}
            pattern="[0-9]*"
            value={values[i]}
            {...inputProps}
          />
        );
        return element;
      })}
    </div>
  );
}
