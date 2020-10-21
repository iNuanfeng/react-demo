import React from 'react'
import { observable } from 'mobx'

export default class Todo extends React.Component {
  @observable title = "";
  render() {
    return (
      <div>111 todo</div>
    )
  }
}