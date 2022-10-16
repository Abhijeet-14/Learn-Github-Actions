import { styles, css } from "./App.styles";

function App() {
  console.log("Application Started");

  return <div className={css(styles.app)}>Learn Github Actions</div>;
}

export default App;
