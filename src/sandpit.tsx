import { Alert } from "./components/Alert/Alert";
import { AppBar } from "./components/AppBar/AppBar";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { List } from "./components/List/List";
import { Menu } from "./components/Menu/Menu";
import { Pagination } from "./components/Pagination/Pagination";
import { Progress } from "./components/Progress/Progress";
import { Table } from "./components/Table/Table";
import { TextField } from "./components/TextField/TextField";
import { ToggleButton } from "./components/ToggleButton/ToggleButton";
import { Tooltip } from "./components/Tooltip/Tooltip";

function Sandpit() {
  return (
    <>
      <div className="component-display-div">
        <Alert />
      </div>

      <div className="component-display-div">
        <AppBar />
      </div>

      <div className="component-display-div">
        <BottomNavigation />
      </div>

      <div className="component-display-div">
        <Button />
      </div>

      <div className="component-display-div">
        <Card />
      </div>

      <div className="component-display-div">
        <List />
      </div>

      <div className="component-display-div">
        <Menu open={true} />
      </div>

      <div className="component-display-div">
        <Pagination />
      </div>

      <div className="component-display-div">
        <Progress />
      </div>

      <div className="component-display-div">
        <Table />
      </div>

      <div className="component-display-div">
        <TextField />
      </div>

      <div className="component-display-div">
        <ToggleButton value="Yes" />
      </div>

      <div className="component-display-div">
        <Tooltip title="Yes" children={<div></div>} />
      </div>
    </>
  );
}

export default Sandpit;
