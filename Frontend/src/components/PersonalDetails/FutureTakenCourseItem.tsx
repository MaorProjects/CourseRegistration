import { useContext, useState } from "react";
import { CoursesContext } from "../../CoursesContext";
import Course from "../../Types/Course";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

type FutureTakenCourseItemProps = {
  furureTakenCourse: Course;
};

const FutureTakenCourseItem: React.FC<FutureTakenCourseItemProps> = ({
  furureTakenCourse,
}) => {
<<<<<<< HEAD
  const date: string = new Date(
    furureTakenCourse.courseDates[0].date
  ).toLocaleDateString();
  const deleteTakenCourse = useContext(CoursesContext)!.deleteTakenCourseMutation.mutateAsync;
=======
  const date: string = new Date(furureTakenCourse.dates[0]).toLocaleDateString();
  const deleteTakenCourse = useContext(CoursesContext)!.deleteTakenCourse;
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

<<<<<<< HEAD
  const deleteCourse = (takenCourse: Course) => {
    deleteTakenCourse(takenCourse);
    closeModal();
=======
  const deleteCourse = (courseId: number) => {
    deleteTakenCourse(courseId);
    closeModal()
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxHeight: "10em",
        }}
      >
        <ListItem disablePadding>
          <Button onClick={openModal} sx={{ color: "black" }}>
            <DeleteIcon />
          </Button>
          <ListItemText primary={furureTakenCourse.name} />
        </ListItem>
        <ListItem sx={{ paddingLeft: "4em" }}>
          <Typography sx={{ fontSize: "1em" }} color="text.secondary">
            {date}
          </Typography>
          <Tooltip title={furureTakenCourse.info} placement="top">
            <InfoIcon sx={{ marginLeft: "auto", marginTop: "auto" }} />
          </Tooltip>
        </ListItem>
      </List>
      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          האם אתה בטוח שאתה רוצה למחוק את הקורס?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            לאחר המחיקה תוכל להרשם אליו מחדש דרך רשימת הקורסים במידה ויישאר מקום
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteCourse(furureTakenCourse)}>מחק</Button>
          <Button onClick={closeModal} autoFocus>
            בטל
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FutureTakenCourseItem;
