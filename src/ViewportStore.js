import { getViewportSize, getScrollPercent, getScrollY } from './utils';

export default class ViewportStore {
  constructor() {
    this.subscriptions = [];

    const size = getViewportSize();
    this.scrollY = getScrollY();
    this.scrollPercent = getScrollPercent();
    this.width = size.width;
    this.height = size.height;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  update(state) {
    const keys = Object.keys(state);
    for (let i = 0; i < keys.length; i++) {
      this[keys[i]] = state[keys[i]];
    }
    this.subscriptions.forEach(f => f(state));
  }

  handleScroll() {
    this.update({
      scrollY: getScrollY(),
      scrollPercent: getScrollPercent(),
    });
  }

  handleResize() {
    const size = getViewportSize();
    this.update({
      scrollY: getScrollY(),
      scrollPercent: getScrollPercent(),
      width: size.width,
      height: size.height,
    });
  }

  subscribe(f) {
    this.subscriptions.push(f);
    const size = getViewportSize();
    f({
      scrollY: getScrollY(),
      scrollPercent: getScrollPercent(),
      width: size.width,
      height: size.height,
    });
    return () => this.unsubscribe(f);
  }

  unsubscribe(f) {
    if (this.subscriptions.indexOf(f) > -1) {
      this.subscriptions.splice(this.subscriptions.indexOf(f), 1);
    }
  }
}
