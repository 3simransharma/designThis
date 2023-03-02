import "../src/styles.css";

export default function InsideLabelDetails({title,data}){
    return(
            <>
            <h3>{title}</h3><p>{data}</p>
            </>
    );
}