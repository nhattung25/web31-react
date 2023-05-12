import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Gọi API lấy dữ liệu
  // Fetch by render

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      console.log(data);
      setTodos(data);
    };
    getTodos();
  }, []);

  const todoList = todos.map((item) => {
    console.log(todoList);
    // return <h1 key={item.id}></h1>;
  });

  return (
    <>
      <div>{/* <div className="user-name">{userList}</div> */}</div>
    </>
  );
}

export default App;

/**
 * **Use effect
 *
 * Thực thi các tác vụ chứa side effect
 * Side effect là các hành động tác động đến hệ thống bên ngoài(bên ngoài React: server, local storage, ...). Sử dụng để đồng bộ trạng thái ứng dụng react với các hệ thống khác.
 * Các thao tác với useEffect: cập nhật DOM, cập nhật localStorage, phổ biến nhất là sử dụng để gọi API...
 * Mỗi useEffect có 1 mảng dependencies (các phụ thuộc) tùy chỉnh hành vi chạy của useEffect. Nếu ko có dependencies thì sẽ chạy với mỗi lần render. Nếu depen là mảng rỗng thì chỉ chạy lần đầu, nếu depen chứa 1 hoặc nhiều giá trị thì chỉ chạy khi giá trị thay đổi.
 *
 *
 * useEffect chia thành 2 dạng:
 * - cần phải clean: Hàm chưa side effect càn phải return về 1 hàm để clean effect
 * - không cần clean:
 *
 * Khi dùng useEffect cần quan tâm: có chứa side effect hay không, nó chạy khi nào, phụ thuộc vào giá trị nào; nó có clean up hay không.
 *
 * Các lỗi khi dùng useEffect
 * 1. Không xác định đúng dependencies
 * 2. Sử dụng setStage trong useEff mà không có denpendencies
 * 3. Quên hàm clean up khi sủ dụng useEffect
 * 4.
 *
 *
 * Nên dùng useEffect khi
 * 1. Fetch by render => bên trong useEffect gọi hàm fetch data( nên dùng khi fetch data có tham số )
 * 2. Fetch then render: gọi hàm fetch data bên ngoài component. Sử dụng useEffect để cập nhật
 * 3.
 *
 */

/**
 * Btvn:
 * Hoàn thành todos
 * Btập tổng hợp, tìm hiểu hook khác trong zalo.
 */
