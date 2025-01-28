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
      <Container className="profile-card" maxWidth="lg" sx={{ height: "100%" }}>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/default_user.jpg"
            sx={{ width: 112, height: 112 }}
          >
            RS
          </Avatar>
        </div>
        <div>
          <h3>Remy Sharp</h3>
        </div>
        <div>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Notifications">
              <IconButton size="large">
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Post New Question">
              <IconButton size="large">
                <PostAddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
              <IconButton size="large">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </div>
      </Container>
    </div>
  );
}
