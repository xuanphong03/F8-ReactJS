import React from "react";

export const memo2 = (ParentComponent) => {
  return class Component extends React.Component {
    shouldComponentUpdate(nextProps) {
      return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }
    render() {
      return <ParentComponent {...this.props} />;
    }
  };
};
