import "./StatusBar.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

export default function StatusBar() {
  return (
    <div id="status-bar">
      <Container maxWidth="sm">
        <div>
          <h4 className="status-bar-title">Just Answered</h4>
          <Divider variant="middle" />
        </div>
        <div>
          <h4 className="status-bar-title">Pending</h4>
          <Divider variant="middle" />
        </div>
        <div>
          <h4 className="status-bar-title">Past Questions</h4>
          <Divider variant="middle" />
        </div>
      </Container>
    </div>
  );
}
