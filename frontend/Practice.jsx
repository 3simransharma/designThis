
import { Link } from "react-router-dom";
import "../src/styles.css";

export default function Practice() {
  /*object.onclick = */ function check() {
    let btn = document.getElementsByClassName("dropbtn");
    if (document.getElementsByClassName("abcd").clicked === true) {
      console.log("button was clicked");
      btn.value = document.getElementsByClassName("abcd").value;
    }
  }

  return (
    <>
      {/* <h1>Practice.</h1> */}
      <h3 className="practice_c">
        Select an option&ensp;&ensp;&ensp;
        <select className="get_st cb">
          <option className="cb_opt">A</option>
          <option className="cb_opt">B</option>
          <option className="cb_opt">C</option>
          <option className="cb_opt">D</option>
        </select>
        <br />
        <button className="get_st gen">Click</button>
      </h3>
      {/* <div className="choose_opt">
          <div class="dropdown">
            <button
              class="dropbtn"
              onClick={
                document.getElementsByClassName("abcd").clicked
                  ? (document.getElementsByClassName(
                      "dropbtn"
                    ).value = document.getElementsByClassName("abcd").value)
                  : false
              }
            >
              Select <span>▾</span>
            </button>
            <div class="dropdown-content">
              <Link to="/" className="abcd">
                Link 1
              </Link>
              <Link to="/" className="abcd">
                Link 2
              </Link>
              <Link to="/" className="abcd">
                Link 3
              </Link>
            </div>
          </div>
        </div> */}
    </>
  );
}
