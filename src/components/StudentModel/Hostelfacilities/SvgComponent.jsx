import "./SvgComponent.css";

const SvgComponent = ({ path, text }) => {
  return (
    <div className="HF_svg__maincontainer">
      <div className="HF_svg__container">
        <img src={path}></img>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SvgComponent;
