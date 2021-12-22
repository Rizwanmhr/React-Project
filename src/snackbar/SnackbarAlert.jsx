import React, { useState } from "react";

const SnackbarAlert = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <button onClick={() => setValue(!value)}>{value ? "-" : "+"}</button>
      {value && <p>Hello World</p>}
    </div>
  );
};

export default SnackbarAlert;
