// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import r2wc from '@r2wc/react-to-web-component';

export function App() {
  return (
    <div>
      <NxWelcome title="remote3"/>
    </div>
  );
}

export function defineReactWebComponent() {
  // Define the new custom element with the element name for the React Web Component.
  if (!customElements.get('wc-remote3')) {
    // This is where we convert the React component to a Web Component
    customElements.define('wc-remote3', r2wc(App));
  }
}

defineReactWebComponent();
export default App;
