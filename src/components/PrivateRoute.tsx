import { JSXElementConstructor } from "react";
import { RouteProps, RedirectProps } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({
  component: Component,
  ...rest
}: RouteProps &
  RedirectProps & {
    // TODO: Find a way to make this a generic type?
    component: JSXElementConstructor<any>;
  }) => {
  const [cookies] = useCookies();
  return (
    <Route
      render={(props) =>
        cookies.sessionInfo ? <Component {...props} /> : <Redirect {...rest} />
      }
    />
  );
};

export default PrivateRoute;
