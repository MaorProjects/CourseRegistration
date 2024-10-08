import Course from "../../Types/Course";
import {
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

type PastTakenCourseItemProps = {
  PastTakenCourse: Course;
};

const PastTakenCourseItem: React.FC<PastTakenCourseItemProps> = ({
  PastTakenCourse,
}) => {
<<<<<<< HEAD
  const date: string = new Date(
    PastTakenCourse.courseDates[0].date
  ).toLocaleDateString();
=======
  const date: string = new Date(PastTakenCourse.dates[0]).toLocaleDateString();
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  return (
    <List
      sx={{
        width: "100%",
        maxHeight: "10em",
      }}
    >
      <ListItem sx={{ paddingLeft: "4em" }} disablePadding>
        <ListItemText primary={PastTakenCourse.name} />
      </ListItem>
      <ListItem sx={{ paddingLeft: "4em" }}>
        <Typography sx={{ fontSize: "1em" }} color="text.secondary">
          {date}
        </Typography>
        <Tooltip title={PastTakenCourse.info} placement="top">
          <InfoIcon sx={{ marginLeft: "auto", marginTop: "auto" }} />
        </Tooltip>
      </ListItem>
    </List>
  );
};

export default PastTakenCourseItem;
