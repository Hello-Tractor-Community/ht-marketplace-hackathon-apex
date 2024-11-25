// import { Navigate, useLocation, useRouteError } from "react-router-dom"

const ErrorBoundary = () => {
  // const error = useRouteError()
  // const location = useLocation()
  // const isFetchError = false; // will be changed to handle fetch errors

  let code = null

  // if (isFetchError(error)) {
  //   if (error.status === 401) {
  //     return <Navigate to="/login" state={{ from: location }} replace />
  //   }

  //   code = error.status ?? null
  // }

  let title;
  let message;

  switch (code) {
    case 400:
      title = "errorBoundary.badRequestTitle"
      message = "errorBoundary.badRequestMessage"
      break
    case 404:
      title = "errorBoundary.notFoundTitle"
      message = "errorBoundary.notFoundMessage"
      break
    case 500:
      title = "errorBoundary.internalServerErrorTitle"
      message = "errorBoundary.internalServerErrorMessage"
      break
    default:
      title = "errorBoundary.defaultTitle"
      message = "errorBoundary.defaultMessage"
      break
  }

  return (
    <div className="flex size-full min-h-screen items-center justify-center">
      <div className="text-ui-fg-subtle flex flex-col items-center gap-y-2">
        <p>Exclamation mark!!!!!!!</p>
        <p>
          {title}
        </p>
        <p className="text-gray-500">
          {message}
        </p>
      </div>
    </div>
  )
}

export default ErrorBoundary