import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import "./index.css";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatainer from "./components/MainConatainer";
import WatchPage from "./components/WatchPage";


const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainConatainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
      <Head/>
      <RouterProvider router={appRouter}/>
      
    </div>
    </Provider>
  );
}

export default App;
