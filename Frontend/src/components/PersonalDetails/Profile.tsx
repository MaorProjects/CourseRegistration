<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
=======
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
import User from "../../Types/User";
import { Box, CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";
import APIRequests from "../../APIRequests";
import WaitingPage from "../../Pages/WaitingPage";

<<<<<<< HEAD
const Profile: React.FC<{}> = () => {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => APIRequests.getUser(),
  });
  const user: User | undefined = userQuery.data;

  return (
    <List sx={{ maxHeight: "20vh" }}>
      {userQuery.isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ListItemText
              primary="שם פרטי:"
              secondary={
                <Typography variant="h6">{user?.firstName}</Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ListItemText
              primary="שם משפחה:"
              secondary={<Typography variant="h6">{user?.lastName}</Typography>}
            />
          </ListItem>
          <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ListItemText
              primary={'דוא"ל:'}
              secondary={<Typography variant="h6">{user?.email}</Typography>}
            />
          </ListItem>
          <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ListItemText
              primary={"תאריך לידה:"}
              secondary={
                <Typography variant="h6">
                  {user ? new Date(user.birthday).toLocaleDateString() : ""}
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
            <ListItemText
              primary={"טלפון נייד:"}
              secondary={
                <Typography variant="h6">{user?.phoneNumber}</Typography>
              }
            />
          </ListItem>
        </>
      )}
=======
type ProfilrProps = {
  user: User|null
}

const Profile: React.FC<ProfilrProps> = ({user}) => {
  return (
    <List>
      <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ListItemText
          primary="שם פרטי:"
          secondary={<Typography variant="h6">{user?.firstName}</Typography>}
        />
      </ListItem>
      <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ListItemText
          primary="שם משפחה:"
          secondary={<Typography variant="h6">{user?.lastName}</Typography>}
        />
      </ListItem>
      <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ListItemText
          primary={'דוא"ל:'}
          secondary={<Typography variant="h6">{user?.email}</Typography>}
        />
      </ListItem>
      <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ListItemText
          primary={"תאריך לידה:"}
          secondary={
            <Typography variant="h6">
              {user ? new Date(user.birthday).toLocaleDateString() : ""}
            </Typography>
          }
        />
      </ListItem>
      <ListItem sx={{ borderBottom: 1, borderColor: "divider" }}>
        <ListItemText
          primary={"טלפון נייד:"}
          secondary={<Typography variant="h6">{user?.phoneNumber}</Typography>}
        />
      </ListItem>
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
    </List>
  );
};

export default Profile;
