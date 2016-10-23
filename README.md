React Viewport Observer
=========

Declarative way to listen to `scroll` and `resize` events of the viewport.

## Installation

```
npm install --save react-viewport-observer
```

## Why

Typcal use cases are scroll controlled effects and viewport size monitoring.

This project prevents from creating multiple event listeners, allowing to 'subscribe' to viewport events in a declarative way.

## Usage

```js
// App.js
import { ViewportStore, ViewportBroadcaster } from 'react-viewport-observer';

const viewportStore = new ViewportStore();
const App = () =>
	<ViewportBroadcaster store={viewportStore}>
		{children}
	</ViewportBroadcaster>;
```
```js
// ScrollProgress.js
import { ViewportSubscriber } from 'react-viewport-observer';

const ScrollProgress = () =>
	<ViewportSubscriber fields={['scrollPercent']}>
		{/* fields can be: scrollY, scrollPercent, width, height */}
		{({ scrollPercent }) =>
			{/* some fancy scroll effect like scaling :D */}
			<div style={{ transform: `scaleX(${scrollPercent / 100})` }} />}
	</ViewportSubscriber>;
```


## License

MIT
