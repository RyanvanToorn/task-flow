import { AppBar } from "./components/AppBar/AppBar";
import { Title } from "./components/Title/Title";

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <AppBar>
          <Title title="TaskFlow" />
        </AppBar>
      </div>

      <div className="app-body"></div>

      <div className="app-footer"></div>
    </div>
  );
}
