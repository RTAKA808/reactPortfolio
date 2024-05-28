import { useRouteError, redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ErrorPage() {
  const error = useRouteError();
  let location = useLocation();
  useEffect(() => {
    switch(location.pathname){
      case '/portfolio':
        redirect('/portfolio')
        break;
      case '/resume':
        redirect('/resume')
        break;
      case '/contact':
        redirect('/contact')
        break;
      default:
        break;
    }
  }, []);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
