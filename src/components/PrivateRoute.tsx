import { JSXElementConstructor } from "react";
import { RouteProps, RedirectProps } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  validator,
  ...rest
}: RouteProps &
  RedirectProps & {
    validator: () => boolean;
    component: JSXElementConstructor<any>;
  }) => {
  return (
    <Route
      render={(props) =>
        validator() ? <Component {...props} /> : <Redirect {...rest} />
      }
    />
  );
};

export default ProtectedRoute;
