import { useContext} from "react";
import { CoursesContext } from "../../CoursesContext";
import ChosenCoursesList from "./ChosenCoursesList";
import Course from "../../Types/Course";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const Cart: React.FC<{}> = ({}) => {
  console.log(`render cart.tsx`);
  const coursesContext = useContext(CoursesContext);

  const chosenCourses: Course[] = coursesContext!.chosenCourses;
  const disableAddButton: boolean = chosenCourses.length === 0;

  const registerForCourses = () => {
<<<<<<< HEAD
    let takenCourseIds: number[] = []
    chosenCourses.forEach((chosenCourse) =>
      takenCourseIds.push(chosenCourse.courseDates[0].id)
    );
    coursesContext?.addTakenCoursesMutation.mutateAsync(takenCourseIds)
=======
    setIsLoading(true);
    setTimeout(() => {
      chosenCourses.forEach((chosenCourse) =>
        coursesContext?.addTakenCourse(chosenCourse)
      );
      coursesContext?.clearChosenCourses();
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const closeSnackbar = () => {
    setIsSuccess(false);
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minWidth: "20em",
        minHeight: "28em",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            סלסלה
          </Typography>
        </Toolbar>
      </AppBar>
      <ChosenCoursesList />
      {coursesContext?.addTakenCoursesMutation.isPending ? (
        <CircularProgress />
      ) : (
        <Button
          variant="contained"
          onClick={registerForCourses}
          sx={{ marginTop: "1vh", marginBottom: "1vh", width: "5em" }}
          disabled={disableAddButton}
        >
          הרשם
        </Button>
      )}
    </Box>
  );
};

export default Cart;
