import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      focus2: () => inputRef.current.focus(),
      get value() {
        return inputRef.current.value;
      },
      set value(value) {
        inputRef.current.value = value;
      },
    };
  });
  return (
    <div>
      <input type="text" ref={inputRef} name="name" placeholder="Nhập tên..." />
    </div>
  );
}

export default forwardRef(Input);
