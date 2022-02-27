import { colourNameToHex, hexToRgbA } from "./apis";

const Icons = ({ children, icon, btnActive, menuExpand }) => {
  const colorHex = colourNameToHex(icon.color);

  const iconStyle = {
    width: "3rem",
    height: "3rem",
    transition: "all 0.3s",
    backgroundColor: btnActive === icon.text && icon.color,
    boxShadow:
      btnActive === icon.text &&
      `-0.5rem 1rem 1.5rem ${hexToRgbA(colorHex, 0.7)}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: btnActive === icon.text ? "white" : "black",
    borderBottom: "1px solid white",
    marginLeft: btnActive === icon.text && !menuExpand ? "2rem" : "0",
    transform:
      btnActive === icon.text && !menuExpand && "translateY(-0.7rem) scale(1.1)"
  };

  return <div style={iconStyle}>{children}</div>;
};

export default Icons;
