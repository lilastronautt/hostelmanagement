import "./SvgComponent.css";

const SvgComponent = ({ path, text, time, t }) => {
  return (
    <div className="HF_svg__maincontainer">
      <div className={"HF_svg__container" + " " + t}>
        <p className="time">{time}</p>
        <img src={path}></img>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default SvgComponent;
