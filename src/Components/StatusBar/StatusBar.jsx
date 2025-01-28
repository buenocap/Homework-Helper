import "./StatusBar.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

export default function StatusBar() {
  return (
    <div id="status-bar">
      <Container maxWidth="sm">
        <div>
          <h3 className="status-bar-title">Just Answered</h3>
          <Divider variant="middle" />
        </div>
        <div>
          <h3 className="status-bar-title">Pending</h3>
          <Divider variant="middle" />
        </div>
        <div>
          <h3 className="status-bar-title">Past Questions</h3>
          <Divider variant="middle" />
        </div>
      </Container>
    </div>
  );
}
