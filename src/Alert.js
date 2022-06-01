import React, { useEffect } from "react";

export default function Alert({ status, msg, type, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className={`alert alert-${type}`}>
      <p>{msg}</p>
    </div>
  );
}
