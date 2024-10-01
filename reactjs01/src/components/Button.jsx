import { forwardRef } from "react";

function Button(props, ref) {
  return <button ref={ref}>Oke Chưa ?</button>;
}

export default forwardRef(Button);
