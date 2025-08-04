import { AppBar } from "./components/AppBar/AppBar";
import { Title } from "./components/Title/Title";
import { Table } from "./components/Table/Table";

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <AppBar>
          <Title title="TaskFlow" />
        </AppBar>
      </div>

      <div className="app-body">
        <div className="dashboard-top">
          <Table />
        </div>
      </div>

      <div className="app-footer"></div>
    </div>
  );
}
