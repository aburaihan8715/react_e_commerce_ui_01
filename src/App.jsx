import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </>
  );
};

export default App;
