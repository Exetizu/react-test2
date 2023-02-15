import "./test.css";
export default function Blockk(props: any) {
   return (
      <button className={props.className} onClick={props.onClick}>
         {props.value}
      </button>
   );
}
