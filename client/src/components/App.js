import React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import Feel from "./views/Feel/Feel";
import FeelList from "./views/Feel/FeelList";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import NavBar from "./views/NavBar/NavBar";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/queryClient";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const breadcrumbNameMap = {
  "/feel": "Feel",
  "/feel/list": "Report List",
  "/login": "Login",
  "/register": "Register",
  "/work": "Work",
};

function App() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <div
            style={{
              padding: "0em",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              background: "#ececec",
            }}
          >
            <Breadcrumb>
              <span style={{}}>
                <HomeOutlined style={{ margin: "1em" }} />
              </span>
              {breadcrumbItems}
            </Breadcrumb>
          </div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, true)} />
            <Route exact path="/feel" component={Auth(Feel, null)} />
            <Route exact path="/feel/list" component={Auth(FeelList, true)} />
            <Route exact path="/personal" component={Auth(FeelList, true)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, null)}
            />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
