import React from "react";

function CountdownTimer(props) {
  return (
    <div>
      <iframe src={props.src} height={props.height} width={props.width} />
    </div>
  );
}

export default CountdownTimer;
