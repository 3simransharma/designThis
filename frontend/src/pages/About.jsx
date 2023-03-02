import "../styles.css";
import {Github,Behance} from "react-bootstrap-icons";
import { Helmet } from "react-helmet";

export default function About() {
    return (
      <>
        <Helmet>
          <title>About | designthis</title>
        </Helmet>
        <h1><span className="abt_h1 u">About.</span></h1>
        <p className=" margin_p_abt abt_p abt_p_cm">This Website is created to help people to <span className="abt_p">practice their design skills</span>.
         Simran Sharma has created this website. She is a software developer with graphic design skills. She has developed this website in such a way that 
         even the person from non-design field can begin their design journey with this tool. </p>

         <div className="about_links_div">
          <a href = "https://www.github.com/3simransharma" target="_blank"><Github /></a>
          <a href = "https://www.behance.net/simransharma3" target="_blank"><Behance /></a>
        </div>
      </>
    );
  }
  