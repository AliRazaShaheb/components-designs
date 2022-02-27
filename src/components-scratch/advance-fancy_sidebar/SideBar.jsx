import { useState } from "react";
import "./fancySidebarStyle.css";
import Icons from "./Icons";
import ToggleHmbrgrmenu from "./ToggleHmbrgrMenu";
import {
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineCamera,
  AiOutlineSetting,
  AiOutlineHome
} from "react-icons/ai";

const SideBar = () => {
  const [menuExpand, setMenuExpand] = useState(true);
  const [btnActive, setBtnActive] = useState("Home");

  // styles

  const bar = {
    height: "2rem",
    display: "flex",
    justifyContent: menuExpand ? "space-between" : "center",
    alignItems: "center",
    padding: menuExpand ? "1rem" : "0.5rem",
    backgroundColor: "white"
  };

  const navItems = {
    padding: menuExpand ? "1rem 1.5rem" : "0.5rem",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    transition: "all 0.3s",
    backgroundColor: "white"
  };

  const iconWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    color: "black",
    cursor: "pointer"
  };

  const expandHandle = () => {
    setMenuExpand(!menuExpand);
  };

  return (
    <div>
      <div
        className="expand-cntr"
        style={{
          width: menuExpand ? "15rem" : "4rem",
          transition: "all 0.3s"
        }}
      >
        <div style={bar} onClick={expandHandle}>
          {menuExpand && <div>Menu</div>}
          <ToggleHmbrgrmenu menuExpand={menuExpand} />
        </div>

        <div className="line"></div>

        <div style={navItems}>
          {data.map((icon) => (
            <div
              style={iconWrapper}
              key={icon.text}
              onClick={() => setBtnActive(icon.text)}
            >
              <Icons icon={icon} btnActive={btnActive} menuExpand={menuExpand}>
                {icon.icon}
              </Icons>
              {menuExpand && (
                <span
                  style={{
                    marginLeft: "1rem",
                    fontSize: "1.1rem",
                    color: btnActive === icon.text ? icon.color : "black"
                  }}
                >
                  {icon.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

export const data = [
  {
    icon: <AiOutlineHome />,
    color: "SpringGreen",
    text: "Home"
  },
  {
    icon: <AiOutlineUser />,
    color: "DodgerBlue",
    text: "Profile"
  },
  {
    icon: <AiOutlineMessage />,
    color: "RebeccaPurple",
    text: "Message"
  },
  {
    icon: <AiOutlineCamera />,
    color: "Maroon",
    text: "Camera"
  },
  {
    icon: <AiOutlineSetting />,
    color: "#C71585",
    text: "Setting"
  }
];
