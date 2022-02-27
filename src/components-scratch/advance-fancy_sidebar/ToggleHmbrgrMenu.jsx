import "./fancySidebarStyle.css";

const ToggleHmbrgrmenu = ({ menuExpand }) => {
  const span1 = {
    transform: menuExpand && "rotate(50deg)"
  };
  const span2 = {
    opacity: menuExpand && 0
  };
  const span3 = {
    transform: menuExpand && "rotate(-50deg)"
  };

  return (
    <div className="hmbrgr">
      <span style={span1}></span>
      <span style={span2}></span>
      <span style={span3}></span>
    </div>
  );
};

export default ToggleHmbrgrmenu;
