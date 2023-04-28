import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="title">Login</div>
        <div className="user">
          <div className="label">Username</div>
          <input type="text" className="username" />
        </div>
        <div className="pass">
          <div className="label">Password</div>
          <input type="password" />
        </div>
        <button className="submit">Login</button>
      </div>
    </>
  );
}

export default App;


// Quản lý trạng thái của form
// 1.Uncontrolled form: có nghĩa là trạng thái của form không được kiểm soát bởi react.
// 2.Controlled form: có nghĩa là trạng thái của form được kiểm soát bởi react
// value tùy thuộc vào element
// trạng thái với mỗi hành động nhập

// Các sự kiện với form
// 1.Sự kiện onchange hoạt động tương tự oninput
// 2.Các event object => SyntheticEvent