import { getAuthority } from "../common/authority";
export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return getAuthority("authority") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
