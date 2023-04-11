import React, { Component } from "react";

export default class DynamicContent extends Component {
    constructor() {
        super()
        this.state = {
            textList: false , 
        }
    } ;
    handleEdit = () => {
        this.setState({ textList : !this.state.textList})
    }
  render() {
    return (
      <div>
      {this.state.textList ? (
        <p>xin chào, tên tôi là NGguyeenc Gia Quân.
           năm nay tôi 21 tuổi.
        Hiện tại tôi đang học Lập trình viên tại học viện Rikkei.</p>
      ) : (
        <p>
          안녕하세요, 제 이름은 NGUYEN Gia Quan입니다. 나는 21 살이야. 현재 저는
          Rikkei 아카데미에서 프로그래밍을 공부하고 있습니다.
        </p>
      )
      }
        <button onClick={this.handleEdit}>Dịch</button> 
      </div>
    );
  }
}
