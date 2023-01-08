import { Link, useRoutes } from "react-router-dom";
import { Button } from "antd";
import HomePage from "../page/homePage/homePage";

function PageRouter() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "*",
      element: (
        <div>
          <center>
            <br />
            <h3>Lỗi 404</h3>
            <br />
            <h5>Bạn đang truy cập vào đường dẫn không tồn tại</h5>
            <br />
            <Link to="/">
              <Button>Quay lại trang chủ</Button>
            </Link>
          </center>
        </div>
      ),
    },
  ]);
  return routing;
  //   return (
  //     <div className="App">
  //       <Suspense fallback={<Loading />}>
  //         <Routes>
  //           <Route path="/" element=<HomePage /> />
  //           <Route
  //             path="*"
  //             element={
  //               <div>
  //                 <center>
  //                   <br />
  //                   <h3>Lỗi 404</h3>
  //                   <br />
  //                   <h5>Bạn đang truy cập vào đường dẫn không tồn tại</h5>
  //                   <br />
  //                   <Link to="/home">
  //                     <Button>Quay lại trang chủ</Button>
  //                   </Link>
  //                 </center>
  //               </div>
  //             }
  //           />
  //         </Routes>
  //       </Suspense>
  //     </div>
  //   );
}

export default PageRouter;
