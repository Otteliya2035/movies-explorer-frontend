import React, {useContext} from 'react';
import {routes} from "../../../contstrains/routes";
import {Route, Routes} from "react-router-dom";
import ProtectedView from "../../ProtectedView/ProtectedView";
import NoResults from "../../NoResults/NoResults";
import {UserContext} from "../../../contexts/user";

const RouterComponent = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes>
      {routes.map(item => <Route key={item.path} path={item.path} element={
        <ProtectedView isLoggedIn={isLoggedIn} isPublicPage={item.isPublicPage}>
          {item.component}
        </ProtectedView>
      } /> )}
      <Route path="*" element={<NoResults/>} />
    </Routes>
  );
};

export default RouterComponent;
