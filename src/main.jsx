import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
// import reactToWebComponent from 'react-to-webcomponent';

render(<App />, document.getElementById('app'))

// const widget = reactToWebComponent(App, React)