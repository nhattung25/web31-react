import Post from "./Post";
import "./Post.css";
import "./App.css";

export default function App() {
  const post = [
    {
      thumbnail: "https://media.techmaster.vn/api/static/ehIAuZZ_/gkHQ_uH0",
      id: 1,
      title: "Chúng ta đang có lạm dụng Framework?",
      content: "Framework luôn được cập nhật theo từng ngày, tuy nhiên =))",
      view: "33",
      date: "21-04-2023",
    },
    {
      thumbnail:
        "https://media.techmaster.vn/api/static/c68uqgnk0cmj7hbgjc9g/g_MZgyUP",
      id: 1,
      title: "Cùng giải leetcode!",
      content:
        "Bài 463. Island Perimeter trên Leetcode. Cách giải và tư duy để giải bài tập Leetcode",
      view: "13",
      date: "10-04-2023",
    },
  ];
  // Sử dụng map để biến đổi mảng obj thành mảng Jsx
  const postCards = post.map((post) => <Post key={post.id} post={post} />);
  return <div className="main">{postCards}</div>;
}

// Props
// Truyền dư liệu từ component cha vào component con
// Dữ liệu truyền vào có kiểu dữ liệu bất kỳ chú ý {}
// Tất cả dũ liệu truyền vào đều đặt trong 1 tham số duy nhất là props
// Props chỉ đọc
