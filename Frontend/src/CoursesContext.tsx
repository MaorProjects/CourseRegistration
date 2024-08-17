import { createContext, useState, useEffect } from "react";
import Course from "./Types/Course";
import APIRequests from "./APIRequests";
<<<<<<< HEAD
import CourseDate from "./Types/CourseDate";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
  UseMutationResult,
} from "@tanstack/react-query";
=======
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011

export const CoursesContext = createContext<CoursesContextType | null>(null);

type CoursesContextType = {
  allCoursesQuery: UseQueryResult<Course[] | undefined, Error>;
  chosenCourses: Course[];
<<<<<<< HEAD
  takenCoursesQuery: UseQueryResult<Course[] | undefined, Error>;
  addNewCourseMutation: UseMutationResult<void, Error, Course, unknown>;
  addNewDateMutation: UseMutationResult<void, Error, CourseDate, unknown>;
=======
  takenCourses: Course[];
  addNewCourse: (courseName: string, courseDate: Date, info: string) => void;
  addNewDate: (id: number, courseDate: Date) => void;
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  addChosenCourse: (chosenCourse: Course) => void;
  deleteChosenCourse: (id: number) => void;
  clearChosenCourses: () => void;
  addTakenCoursesMutation: UseMutationResult<void, Error, number[], unknown>;
  deleteTakenCourseMutation: UseMutationResult<void, Error, Course, unknown>;
};

type CoursesContextProviderProps = {
  children: React.ReactNode;
};

const CoursesProvider: React.FC<CoursesContextProviderProps> = ({
  children,
}) => {
<<<<<<< HEAD
=======
  const [allCourses, setAllCourses] = useState<Course[]>([]);
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  const [chosenCourses, setChosenCourses] = useState<Course[]>([]);
  const queryClient = useQueryClient();

<<<<<<< HEAD
  const allCoursesQuery = useQuery({
    queryKey: ["allCourses"],
    queryFn: () => APIRequests.getAllCourses(),
  });

  const takenCoursesQuery = useQuery({
    queryKey: ["takenCourses"],
    queryFn: () => APIRequests.getTakenCourses(),
  });

  const addNewCourseMutation = useMutation({
    mutationFn: (course: Course) => APIRequests.postNewCourse(course),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
    onError: () => {
      toast.error("יש בעיה בחיבור לשרת...")
    }
  });

  const addNewDateMutation = useMutation({
    mutationFn: (courseDate: CourseDate) => APIRequests.postNewDate(courseDate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allCourses"] });
    },
    onError: () => {
      toast.error("יש בעיה בחיבור לשרת...")
    }
  });

  const addTakenCoursesMutation = useMutation({
    mutationFn: (takenCourseIds: number[]) =>
      APIRequests.postTakenCourses(takenCourseIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["takenCourses"] });
      toast.success("נרשמת בהצלחה")
      clearChosenCourses()
    },
    onError: () => {
      toast.error("יש בעיה בחיבור לשרת...")
    }
  });

  const deleteTakenCourseMutation = useMutation({
    mutationFn: (takenCourse: Course) =>
      APIRequests.deleteTakenCourse(takenCourse),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["takenCourses"] });
      toast.success("הקורס נמחק בהצלחה")
    },
    onError: () => {
      toast.error("יש בעיה בחיבור לשרת...")
    }
  });
=======
  useEffect(() => {
    APIRequests.getAllCourses()
      .then((result) => {
        setAllCourses(result);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  useEffect(() => {
    APIRequests.getTakenCourses()
      .then((result) => {
        setTakenCourses(result);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  const addNewCourseLocal = (id: number, courseName: string, courseDate: Date, info: string) => {
    let newDates: Date[] = [courseDate];
    let newCourse: Course = {
      id: id,
      name: courseName,
      dates: newDates,
      info: info,
    };
    setAllCourses((prevAllCourses) => {
      return [...prevAllCourses, newCourse];
    });
  };

  const addNewDateLocal = (id: number, courseDate: Date) => {
    setAllCourses((prevAllCourses) =>
      prevAllCourses.map((course) => {
        return course.id === id
          ? { ...course, dates: [...course.dates, courseDate] }
          : course;
      })
    );
  };
>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011

  const addTakenCourseLocal = (takenCourse: Course) => {
    setTakenCourses((prevTakenCourses) => [...prevTakenCourses, takenCourse]);
  };

  const deleteTakenCourseLocal = (id: number) => {
    setTakenCourses((prevTakenCourses) =>
      prevTakenCourses.filter((takenCourse) => takenCourse.id !== id)
    );
  };

  const addNewCourse = (courseName: string, courseDate: Date, info: string) => {
    APIRequests.postNewCourse(courseName, courseDate, info, addNewCourseLocal);
  };

  const addNewDate = (id: number, courseDate: Date) => {
    APIRequests.postNewDate(id, courseDate, addNewDateLocal);
  };

  const addChosenCourse = (chosenCourse: Course) => {
    setChosenCourses((prevChosenCourses) => {
      return [...prevChosenCourses, chosenCourse];
    });
  };

  const deleteChosenCourse = (id: number) => {
    setChosenCourses((prevChosenCourses) =>
      prevChosenCourses.filter((chosenCourse) => chosenCourse.id !== id)
    );
  };

  const clearChosenCourses = () => {
    setChosenCourses([]);
  };

<<<<<<< HEAD
=======
  const addTakenCourse = (takenCourse: Course) => {
    APIRequests.postTakenCourse(takenCourse, addTakenCourseLocal);
  };

  const deleteTakenCourse = (id: number) => {
    APIRequests.deleteTakenCourse(id, deleteTakenCourseLocal);
  };

>>>>>>> 204e19a0dbfdbdd19a65031f44588ba816aff011
  return (
    <CoursesContext.Provider
      value={{
        allCoursesQuery,
        chosenCourses,
        takenCoursesQuery,
        addNewCourseMutation,
        addNewDateMutation,
        addChosenCourse,
        deleteChosenCourse,
        clearChosenCourses,
        addTakenCoursesMutation,
        deleteTakenCourseMutation,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
