import React from 'react';

export default class CoreLayout extends React.PureComponent {
  render() {
    return (
      <div className="layout-core">
        {this.props.children}
      </div>
    )
  }
}
