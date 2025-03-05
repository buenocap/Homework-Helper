import "./UserProfile.css";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import PostAddIcon from "@mui/icons-material/PostAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

export default function QuickAdd() {
  return (
    <div id="user-profile">
      <Container className="profile-card" maxWidth="sm" sx={{ height: "100%" }}>
        <div>
          <Avatar
            alt="Marleny Lopez"
            src="/static/images/default_user.jpg"
            sx={{ width: 112, height: 112 }}
          >
            RS
          </Avatar>
        </div>
        <div>
          <h4 style={{ color: "white" }}>Marleny Lopez</h4>
        </div>
        <div>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Notifications">
              <IconButton size="large">
                <Badge badgeContent={0} color="primary">
                  <NotificationsIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Post New Question">
              <IconButton size="large">
                <PostAddIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton size="large">
                <SettingsIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        </div>
      </Container>
    </div>
  );
}
