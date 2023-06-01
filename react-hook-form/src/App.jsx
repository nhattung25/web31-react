import { useForm } from "react-hook-form";
import "./App.css";
import "./framer-motion-test.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     usename: "",
  //     password: "",
  //   },
  // });
  // const onSubmit = (values) => {
  //   console.log(values);
  // };
  // console.log(errors);
  //watch cho phép theo dõi trạng thái để thay đổi ngay lập tức

  const dropdowContainer = {
    open: { opacity: 1, y: 0 },
    close: { opacity: 0 },
    y: 20,
  };
  const dropdownItem = {
    open: {},
    close: {},
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {/* <h1>React form</h1>
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div className="form-field">
            <label>Username</label>
            <input
              type="text"
              {...register("user.usename", {
                required: {
                  value: true,
                  message: "Vui lòng nhập tài khoản",
                },
              })}
            />
            {errors.usename && <span>{errors.user.usename.message}</span>}
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="user"
              {...register("user.password", {
                required: {
                  value: true,
                  message: "Vui lòng nhập mật khẩu",
                },
              })}
            />
            {errors.password && <span>{errors.user.password.message}</span>}
          </div>
          <button className="submit-btn">Submit</button>
        </form> */}
        <div>
          <button className="dropdow-btn" onClick={() => setOpen(!open)}>
            Drop
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                className="dropdow"
                initial={{ opacity: 0, x: 20 }}
                // animate={{ opacity: 1, x: 0 }}
                variants={dropdowContainer}
                animate={open ? "open" : "close"}
              >
                <ul className="drop-dow">
                  <motion.li className="item" variants={dropdownItem}>
                    1
                  </motion.li>
                  <motion.li className="item" variants={dropdownItem}>
                    2
                  </motion.li>
                  <motion.li className="item" variants={dropdownItem}>
                    3
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
