import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Loading from "./component/loading";
import Button from "antd/es/button";
import TopNavigation from "./component/navbar/navbar";
import FooterCustom from "./component/footer/footer";
import Service from "./page/service/service";

const HomePage = lazy(() => import("./page/homePage/homePage"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <TopNavigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/trang-chu" element={<HomePage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route
            path="*"
            element={
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
            }
          />
        </Routes>
        <FooterCustom/>
      </Suspense>
    </div>
  );
}

export default App;
