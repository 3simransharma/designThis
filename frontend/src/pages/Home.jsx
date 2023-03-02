import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | designthis</title>
      </Helmet>
      <div className="home_c">
        <h1 className="abt_h1 abt_h1_cm">
          Enhance your Design <span className="abt_h1 abt_h1_cm">skills</span>.
        </h1>

        <Link to="/practice" className="home_btn">
          <button className="get_st get_st_cm">Get Started</button>
        </Link>
      </div>
    </>
  );
}
