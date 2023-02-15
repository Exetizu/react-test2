import { Component } from "react";
import Button from "./Button";
import "./test.css";
export default class Bparent extends Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         XIsNext: true,
         value: Array(9).fill(null),
         win: "",
         score1: 0,
         score2: 0,
         winPos: Array(3).fill(null),
      };
   }
   click(id: number) {
      if (this.state.win === "") {
         const copyValue = this.state.value.concat();
         if (copyValue[id] == null) {
            copyValue[id] = this.state.XIsNext ? "X" : "O";
         }
         this.setState({ value: copyValue });
         const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
         ];
         for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
               copyValue[a] &&
               copyValue[a] === copyValue[b] &&
               copyValue[a] === copyValue[c]
            ) {
               this.setState({
                  win: this.state.XIsNext
                     ? "Wygrał krzyżyk!"
                     : "Wygrało kółko!",
                  winPos: lines[i],
               });
            }
         }
         this.setState({ XIsNext: !this.state.XIsNext });
      } else return;
   }
   restart() {
      if (this.state.win !== "")
         this.setState({
            XIsNext: true,
            value: Array(9).fill(null),
            win: "",
            score1: this.state.XIsNext
               ? this.state.score1
               : this.state.score1 + 1,
            score2: this.state.XIsNext
               ? this.state.score2 + 1
               : this.state.score2,
            winPos: Array(3).fill(null),
         });
   }
   init() {
      const a: any = [];
      for (let i = 0; i < 9; i++) {
         a.push(
            <Button
               className={
                  this.state.win !== "" &&
                  this.state.winPos.some((e: number) => {
                     return e === i ? true : false;
                  })
                     ? this.state.XIsNext
                        ? "win-comb-O"
                        : "win-comb-X"
                     : ""
               }
               value={this.state.value[i]}
               onClick={() => {
                  this.click(i);
               }}
            />,
         );
      }
      return a;
   }
   render() {
      return (
         <div>
            <div className="grid">{this.init()}</div>
            <Button
               value={"Rst"}
               onClick={() => {
                  this.restart();
               }}
            />
            <Button className="win-comb-X" value={"P1:" + this.state.score1} />
            <Button className="win-comb-O" value={"P2:" + this.state.score2} />
            <div className="win">{this.state.win}</div>
         </div>
      );
   }
}
