import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import ProfilePage from "./Pages/ProfilePage";
import CoursesProvider from "./CoursesContext";
import WelcomePage from "./Pages/WelcomePage";
import CourseRegistrationPage from "./Pages/CourseRegistrationPage";
import MenuAppBar from "./components/NavBar/MenuAppBar";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import APIRequests from "./APIRequests";
import { useState } from "react";
import WaitingPage from "./Pages/WaitingPage";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const [isLogin, setIsLogin] = useState<boolean | undefined>(undefined);

  APIRequests.getLogin().then((result) => {
    setIsLogin(result);
  });

  return (
    <>
      {isLogin !== undefined ? (
        <Router>
          <CacheProvider value={cacheRtl}>
            <MenuAppBar isLogin={isLogin!} setIsLogin={setIsLogin} />
            <CoursesProvider>
              <Routes>
                {isLogin ? (
                  <>
                    <Route path="/" element={<WelcomePage />} />
                    <Route
                      path="/Registration"
                      element={<CourseRegistrationPage />}
                    />
                    <Route path="/Profile" element={<ProfilePage />} />
                  </>
                ) : (
                  <Route path="/*" element={<WelcomePage />} />
                )}
              </Routes>
            </CoursesProvider>
          </CacheProvider>
        </Router>
      ) : (
        <WaitingPage color="white" />
      )}
    </>
  );
}

export default App;
