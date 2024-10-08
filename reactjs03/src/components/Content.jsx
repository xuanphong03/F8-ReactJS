import React from "react";

function Content() {
  console.log("2.Content re-render");

  return (
    <div>
      <p>Lorem</p>
    </div>
  );
}

// export default React.memo(Content);
export default React.memo(Content);
