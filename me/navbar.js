import { useState } from "react";
import { WiMoonWaxingCrescent3 } from "react-icons/wi";

const Navbar = () => {
  const [dark, setdark] = useState(true);
  const theme = {
    color: {
      // bg: dark ? "black" : "white",
      bg: "rgba(0, 0, 0, 0.5)",
      text: dark ? "white" : "black",
    },
  };
  const mystyle = {
    width: "80%",
    height: "3rem",
    backgroundColor: theme.color.bg,
    color: theme.color.text,
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    position: "fixed",
    borderRadius: "100px",
    margin: "1rem 0 0 0 ",
    overflow: "hidden",
  };
  const handleClick = () => {
    setdark(!dark);
  };
  return (
    <nav
      style={{
        // backgroundColor: "blue",
        height: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="" style={mystyle}>
        <div
          style={{ textWrap: "nowrap", fontSize: "1.5rem", padding: "0 2rem" }}
        >
          <span>{"<"}</span>
          <span
            style={{
              color: "blue",
              fontSize: "2.5rem",
              fontFamily: "Brush Script MT",
            }}
          >
            Shivam Sharma
          </span>
          <span style={{ backgroundColor: "gary", fontSize: "2rem" }}>
            {"/"}
          </span>
          <span>{">"}</span>
        </div>
        <div
          className="navlinks"
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyleType: "none",
          }}
        >
          <li>Home</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Project</li>
          <li>Contact</li>
        </div>
        <div
          style={{
            height: "100%",
            cursor: "pointer",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <WiMoonWaxingCrescent3 size={40} onClick={handleClick} />
          <button
            type="button"
            style={{
              width: "10rem",
              height: "100%",
              backgroundColor: "#380858",
              color: theme.color.text,
              fontSize: "1.5rem",
              border: "none",
              borderRadius: "100px",
            }}
          >
            Lets Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
