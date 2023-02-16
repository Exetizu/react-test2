import "./TTstyle.css";
export default function Blockk(props: any) {
   return (
      <button className={"TTSquare " + props.className} onClick={props.onClick}>
         {props.value}
      </button>
   );
}
