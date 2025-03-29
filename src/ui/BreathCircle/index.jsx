import { memo } from "react";
import "./BreathCircle.css";
const BreathCircle = memo(() => {
  return (
    <div className="breath__circle">
      <div className="breath"></div>
      <div className="breath"></div>
      <div className="breath"></div>
      <div className="breath"></div>
      <div className="breath"></div>
    </div>
  );
});
export default BreathCircle;
