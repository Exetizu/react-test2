import React, { Component } from 'react'
import Button from './Button'
import './test.css';

export default class Bparent extends Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      XIsNext: true,
      value: Array(9).fill(null),
      win: "",
      score1: 0,
      score2: 0,
      winPos:Array(3).fill(null)
    }
  }
  click(id:number) {
    if (this.state.win == "") {
      
      const copyValue = this.state.value.concat()
      if (copyValue[id] == null) {
        copyValue[id] = this.state.XIsNext ? "X" : "O"
      }
      this.setState({ value: copyValue })
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (copyValue[a] && copyValue[a] == copyValue[b] && copyValue[a] == copyValue[c]) {
          this.setState({ win: this.state.XIsNext ? "Wygrał krzyżyk!" : "Wygrało kółko!",winPos:lines[i] })
          
        }
      }
      this.setState({ XIsNext: !this.state.XIsNext })
    }
    else
      return
  }
  restart(){
    if (this.state.win != "") 
      this.setState({
      XIsNext: true,
      value: Array(9).fill(null),
      win: "",
      score1: this.state.XIsNext ? this.state.score1 : this.state.score1+1,
      score2: this.state.XIsNext ? this.state.score2+1 : this.state.score2,
      winPos:Array(3).fill(null)
    })

  }
  render() {
    return (<div>
      <div className='grid'>
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==0) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[0]} onClick={() => { this.click(0) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==1) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[1]} onClick={() => { this.click(1) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==2) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[2]} onClick={() => { this.click(2) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==3) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[3]} onClick={() => { this.click(3) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==4) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[4]} onClick={() => { this.click(4) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==5) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[5]} onClick={() => { this.click(5) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==6) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[6]} onClick={() => { this.click(6) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==7) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[7]} onClick={() => { this.click(7) }} />
        <Button className={this.state.win != "" && this.state.winPos.some((e:number)=>{if(e==8) return true})? (this.state.XIsNext? "win-comb-O":"win-comb-X"):""} value={this.state.value[8]} onClick={() => { this.click(8) }} />
      </div>
        <Button value={"Rst"} onClick={() => { this.restart() }} />
        <Button className='win-comb-X' value={"P1:"+this.state.score1} />
        <Button className='win-comb-O'  value={"P2:"+this.state.score2} />
      <div className='win'>{this.state.win}</div>
    </div>
    )
  }
}
