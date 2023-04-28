import "./App.css";
import Counter from "../../react-day-3/src/Counter";
import { useState } from "react";

// Note:
// Component được render lần đầu tiên, khi trạng thái của comp thay đổi, khi props thay đổi
// Component chỉ là một hàm bình thường, các câu lệnh được chạy từ đầu đến cuối và trả về JSX
// Các lỗi khi sử dụng useState(Hook)
// 1.Sử dụng useState với giá trị không đúng( kiểu dữ liệu)
// 2.Sử dụng trong vòng lặp if else,hàm..
// 3.Sử dụng usestate(Hook) sau return
// 4.Thay đổi trực tiếp giá trị của state, không thông qua hàm setState()
// 5.Sử dụng useState không phải trong component hoặc custom hook (chung cho tất cả component)
// Nên gọi hook trên cùng của hàm trước các block code
// 6.setState là hàm bất đồng bộ
// 7.Sử dụng quá nhiều useState
// 8.Giá trị trạng thái không tự động merge khi thay đổi

function App() {
  // useState(gia_tri_ban_dau | ham); //Trả về 1 mảng 2 giá trị[state-biến tham chiếu đến giá tri trạng thái, setState-hàm cập nhật trạng thái]

  // date: Biến tham chiếu đến giá trị trạng thái
  // setDate: Hàm cập nhật giá trị trạng thái và render lại

  // const [date, setDate] = useState(
  //   new Date(
  //     setTimeout(() => {
  //       setDate(new Date());

  //       // Nếu như trạng thái mới phụ thuộc vào trạng thái cũ dùng hàm dưới. Hàm này sẽ nhận trạng thái mới nhất ở thời điểm hiện tại
  //       // setDate((previousDate) => {});
  //     }, 1000)
  //   )
  // );

  // return <>{/* <div>{date.toLocaleString()}</div> */}</>;
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
