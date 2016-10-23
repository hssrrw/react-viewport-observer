import React, { Children, Component, PropTypes } from 'react';

class ViewportBroadcaster extends Component {
  getChildContext() {
    return { viewportStore: this.props.store };
  }

  render() {
    return Children.only(this.props.children);
  }
}

ViewportBroadcaster.childContextTypes = {
  viewportStore: React.PropTypes.object,
};

ViewportBroadcaster.propTypes = {
  children: PropTypes.element,
  store: PropTypes.object,
};

export default ViewportBroadcaster;
