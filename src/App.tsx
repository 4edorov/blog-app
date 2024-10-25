import { Provider } from "react-redux";
import { RootComponent } from "./root-component";
import { store } from "./lib/store";

export const App = () => {
  return (
    <Provider store={store}>
      <RootComponent />
    </Provider>
  );
};
