import { Component } from "react";
import TTSquare from "./TTSquare";
import "./TTstyle.css";
export default class TTGame extends Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         XIsNext: true,
         value: Array(9).fill(null),
         win: "",
         score1: 0,
         score2: 0,
         winComb: Array(3).fill(null),
         apiResponse: "",
      };
   }
   click(id: number) {
      if (this.state.win === "") {
         const copyValue = this.state.value.concat();
         if (copyValue[id] == null) {
            copyValue[id] = this.state.XIsNext ? "X" : "O";
         }
         this.setState({ value: copyValue });
         const savedWinComb = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
         ];
         for (let i = 0; i < savedWinComb.length; i++) {
            const [a, b, c] = savedWinComb[i];
            if (
               copyValue[a] &&
               copyValue[a] === copyValue[b] &&
               copyValue[a] === copyValue[c]
            ) {
               this.setState({
                  win: this.state.XIsNext
                     ? "Wygrał krzyżyk!"
                     : "Wygrało kółko!",
                  winComb: savedWinComb[i],
               });
            }
         }
         this.setState({ XIsNext: !this.state.XIsNext });
         console.log(this.state.value);

         // fetch("http://localhost:9000/testAPI", {
         //    method: "POST",
         //    connection: {
         //       "content-type": "application/json",
         //    },
         //    // We convert the React state to JSON and send it as the POST body
         //    body: this.state.value,
         // })
         //    .then((res) => res.json())
         //    .then((res) => {
         //       console.log(res["value"]);
         //       this.setState({ value: res["value"] });
         //    });
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
            winComb: Array(3).fill(null),
         });
      else
         this.setState({
            XIsNext: true,
            value: Array(9).fill(null),
            win: "",
            score1: this.state.score1,
            score2: this.state.score2,
            winComb: Array(3).fill(null),
         });
   }
   // callAPI() {
   //    fetch("http://localhost:9000/testAPI")
   //       .then((res) => res.json())
   //       .then((res) => this.setState({ value: res["value"] }));
   // }
   componentWillMount() {
      // this.callAPI();
   }
   init() {
      const a: any = [];
      for (let i = 0; i < 9; i++) {
         a.push(
            <TTSquare
               className={
                  this.state.win !== "" &&
                  this.state.winComb.some((e: number) => {
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
            <p className="App-intro">{this.state.apiResponse}</p>
            <div className="grid">{this.init()}</div>
            <TTSquare
               value={"Rst"}
               onClick={() => {
                  this.restart();
               }}
            />
            <TTSquare
               className="win-comb-X"
               value={"P1:" + this.state.score1}
            />
            <TTSquare
               className="win-comb-O"
               value={"P2:" + this.state.score2}
            />
            <div className="win">{this.state.win}</div>
         </div>
      );
   }
}
