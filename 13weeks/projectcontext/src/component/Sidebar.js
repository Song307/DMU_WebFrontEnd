import { useContext } from "react";
import { MyContext } from "../App";

function Sidebar() {
    const value = useContext(MyContext);

    return (
      <div >
        <h6> {value} </h6>
        Sidebar
      </div>
    );
  }

  export default Sidebar;