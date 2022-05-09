import { useAuth, Redirect } from 'ice';

const LoginWrapper = (WrappedComponent) => {
  const Wrapped = (props) => {
    const [auth] = useAuth();
    return <>{auth.isLogin ? <WrappedComponent {...props} /> : <Redirect to="/login" />}</>;
  };

  return Wrapped;
};

export default LoginWrapper;
