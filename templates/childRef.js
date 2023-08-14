import { forwardRef, useImperativeHandle, useState } from 'react';

const ChildRef = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    log() {
      setCount(count + 1);
      console.log(count);
    }
  }));

  return <h1>Child</h1>;
});
export default ChildRef;
