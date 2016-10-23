import React, { Component, PropTypes } from 'react';
import pick from 'lodash/pick';
import { injectProps } from './utils';

class ViewportSubscriber extends Component {
  componentDidMount() {
    if (!this.context.viewportStore) {
      throw new Error('Can\'t find a viewport store. ' +
        'Make sure a <ViewportBroadcaster /> ancestor is defined, ' +
        'it broadcasts a viewport store thru the context.');
    }
    this.unsubscribe = this.context.viewportStore.subscribe((state) => {
      this.setState({ ...state });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { children, fields } = this.props;
    const state = fields && fields.length > 0
      ? pick(this.state, fields)
      : this.state;
    return injectProps(children, state);
  }
}

ViewportSubscriber.contextTypes = {
  viewportStore: React.PropTypes.object,
};

ViewportSubscriber.propTypes = {
  children: PropTypes.any,
  fields: PropTypes.arrayOf(PropTypes.string),
};

export default ViewportSubscriber;
