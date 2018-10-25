// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Receipt from "@material-ui/icons/Receipt";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import SigninPage from "views/Signin/SigninPage.jsx";
import VerifyEmailPage from "views/VerifyEmail/VerifyEmailPage.jsx";
import SignupPage from "views/Signup/SignupPage.jsx";
import CreateExercisePage from "views/CreateExercise/CreateExercisePage";
import CreateWorkoutPage from "views/CreateWorkout/CreateWorkoutPage";
import EditExercisesPage from "views/EditExercises/EditExercisesPage";
import EditWorkoutPage from "views/EditWorkout/EditWorkoutPage";

export const isSignedInUser = true;

const dashboardRoutes = [
  (isSignedInUser && {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signin",
    sidebarName: "Sign in",
    navbarName: "Sign in",
    icon: Person,
    component: SigninPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/signup",
    sidebarName: "Sign up",
    navbarName: "Sign up",
    icon: Person,
    component: SignupPage
  }) ||
    null,
  (!isSignedInUser && {
    path: "/verify-email",
    sidebarName: "Email verification",
    navbarName: "Email verification",
    icon: Person,
    component: VerifyEmailPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/create-exercise",
    sidebarName: "New Exercise",
    navbarName: "New Exercise",
    icon: Receipt,
    component: CreateExercisePage
  }) ||
    null,
  (isSignedInUser && {
    path: "/edit-exercises",
    sidebarName: "Edit Exercises",
    navbarName: "Edit Exercises",
    icon: Receipt,
    component: EditExercisesPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/create-workout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: Receipt,
    component: CreateWorkoutPage
  }) ||
    null,
  (isSignedInUser && {
    path: "/edit-workout",
    sidebarName: "Edit Workout",
    navbarName: "Edit Workout",
    icon: Receipt,
    component: EditWorkoutPage
  }) ||
    null,
  // (isSignedInUser && {
  //   path: "/workout",
  //   sidebarName: "Workout",
  //   navbarName: "Workout",
  //   icon: Receipt,
  //   component: WorkoutPage
  // }) ||
  //   null,
  {
    redirect: true,
    path: "/",
    to: isSignedInUser ? "/dashboard" : "/signin",
    navbarName: "Redirect"
  }
].filter((route) => !!route);

export default dashboardRoutes;
