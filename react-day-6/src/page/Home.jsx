import React from "react";

export default function Home() {
  return (
    <div>
      <div className="main-content">
        {/* Sign up-button */}
        <div className="sign">
          <div className="sign-up-button">
            <div className="sign-up-alert">
              <img src="./img/logo-brand/logo-brand.png" alt="" />
              <div className="alert-title">ĐĂNG NHẬP</div>
              <div className="sign-up-alert-form">
                <button className="sign-up-fnc fb">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                  <span>Đăng nhập với Facebook</span>
                </button>
                <button className="sign-up-fnc crt">
                  <img src="./img/icon/cat-icon.png" alt="" />
                  <span>Tạo tài khoản trên Catpaw</span>
                </button>
              </div>
            </div>
            <div className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.486446 0.528263C0.798309 0.217445 1.22108 0.0428596 1.66187 0.0428596C2.10265 0.0428596 2.5254 0.217445 2.83728 0.528263L9.97851 7.65419L17.1197 0.528263C17.2721 0.365186 17.4557 0.234397 17.6598 0.143685C17.8638 0.0529733 18.084 0.00419831 18.3074 0.000259135C18.5307 -0.00368004 18.7525 0.0373274 18.9596 0.120802C19.1667 0.204278 19.3548 0.328516 19.5127 0.486127C19.6708 0.643739 19.7953 0.831492 19.8789 1.03814C19.9625 1.24482 20.0037 1.46619 19.9997 1.68904C19.9957 1.91191 19.947 2.13168 19.856 2.33528C19.7651 2.53888 19.634 2.72212 19.4706 2.87406L12.3293 9.99999L19.4706 17.1259C19.634 17.2779 19.7651 17.4612 19.856 17.6648C19.947 17.8684 19.9957 18.0881 19.9997 18.311C20.0037 18.5338 19.9625 18.7551 19.8789 18.9618C19.7953 19.1685 19.6708 19.3562 19.5127 19.5138C19.3548 19.6715 19.1667 19.7957 18.9596 19.8791C18.7525 19.9626 18.5307 20.0037 18.3074 19.9997C18.084 19.9958 17.8638 19.9471 17.6598 19.8563C17.4557 19.7656 17.2721 19.6348 17.1197 19.4717L9.97851 12.3458L2.83728 19.4717C2.52196 19.7649 2.10491 19.9245 1.674 19.917C1.24308 19.9092 0.831953 19.7351 0.527187 19.431C0.222442 19.1269 0.0478819 18.7166 0.040275 18.2866C0.032668 17.8566 0.192636 17.4406 0.486446 17.1259L7.62767 9.99999L0.486446 2.87406C0.17496 2.56287 0 2.141 0 1.70116C0 1.26133 0.17496 0.83948 0.486446 0.528263Z"
                  fill="#57606A"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Banner */}
        <section className="banner">
          <div className="owl-1 owl-carousel owl-theme">
            <div className="item">
              <div className="item-title">CHẤT LƯỢNG ĐẢM BẢO</div>
              <div className="item-text">
                Catpaw luôn mang đến cho bạn những bé mèo khỏe mạnh, có nguồn
                gốc và giấy tờ rõ ràng.
              </div>
            </div>
            <div className="item">
              <div className="item-title">KHUYẾN MÃI ĐA DẠNG</div>
              <div className="item-text">
                Catpaw có nhiều chương trình khuyến mãi trong các dịp đặc biệt
                và cho những khách hàng thân thiết.
              </div>
            </div>
            <div className="item">
              <div className="item-title">CHÍNH SÁCH BẢO HÀNH HỢP LÝ</div>
              <div className="item-text">
                Bảo hành cho tất cả các bệnh đối với thú cưng của CATPAW.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC VẬN CHUYỂN ĐA DẠNG</div>
              <div className="item-text">
                Giao hàng tận nơi, toàn quốc và cả nước ngoài.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC THANH TOÁN ĐA DẠNG</div>
              <div className="item-text">
                Catpaw hỗ trợ nhiều phương thức thanh toán. Bao gồm thanh toán
                qua các dịch vụ thanh toán trực tuyến, chuyển khoản ngân hàng
                hoặc thanh toán tận nơi.
              </div>
            </div>
            <div className="item">
              <div className="item-title">PHƯƠNG THỨC THANH TOÁN ĐA DẠNG</div>
              <div className="item-text">
                Catpaw hỗ trợ nhiều phương thức thanh toán. Bao gồm thanh toán
                qua các dịch vụ thanh toán trực tuyến, chuyển khoản ngân hàng
                hoặc thanh toán tận nơi.
              </div>
            </div>
          </div>
        </section>
        {/* Hàng hot */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>1</span>
            </div>
            <span>SẢN PHẨM NỔI BẬT</span>
          </div>
          {/* Nút chuyển */}
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  BÁN CHẠY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="tab"
                  data-bs-toggle="tab"
                  href="#profile"
                >
                  MỚI VỀ
                </a>
              </li>
            </ul>
          </div>
          {/* Tab content */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="home">
              <div className="container">
                <div className="new-product">
                  <div className="owl-2 owl-carousel owl-theme">
                    <a href="./detail-product.html?id=8">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/cat-thumbnail/8.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Munchkin Xanh Xám</div>
                            <div className="card-price">19.000.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.3
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">8 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=15" itemID={1}>
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/food-thumbnail/5.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Me-O Adult Hải sản 1.2kg
                            </div>
                            <div className="card-price">120.000 đ</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.2
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">69 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=20">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/food-thumbnail/10.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Zenith Cat 1.2kg</div>
                            <div className="card-price">220.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.1
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">31 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=19">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/food-thumbnail/9.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Whiskas Adult Cá thu 1.2kg
                            </div>
                            <div className="card-price">115.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.2
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">56 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=25">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./img/accessories-thumbnail/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Cần câu mèo</div>
                            <div className="card-price">115.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.2
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">56 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="profile">
              <div className="container">
                <div className="new-product">
                  <div className="owl-2 owl-carousel owl-theme">
                    <a href="./detail-product.html?id=11">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/food-thumbnail/1.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Maxim Cá hồi 400g</div>
                            <div className="card-price">19.40.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.3
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">8 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=14">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/food-thumbnail/1.jpg" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Me-O Adult Cá ngừ 1.2kg
                            </div>
                            <div className="card-price">120.000 đ</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.1
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">67 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=21">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./img/accessories-thumbnail/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Bát gắn chuồng inox</div>
                            <div className="card-price">80.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.1
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">58 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=6">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img src="./img/cat-thumbnail/6.jpg?id=6" alt="" />
                          </div>
                          <div className="card-content">
                            <div className="card-name">
                              Mèo Anh lông ngắn Tabi
                            </div>
                            <div className="card-price">16.200.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.2
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">5 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=25">
                      <div className="item-card">
                        <div className="item-content">
                          <div className="card-thumbnail">
                            <img
                              src="./img/accessories-thumbnail/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-name">Cần câu mèo</div>
                            <div className="card-price">115.000 ₫</div>
                            <div className="card-meta">
                              <div className="card-rate">
                                4.2
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </div>
                              <div className="card-sale">56 lượt mua</div>
                            </div>
                          </div>
                          <div className="buy">
                            <button className="buy-btn">Thêm vào giỏ</button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Siêu khuyên khuyến mãi */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>2</span>
            </div>
            <span>SIÊU KHUYẾN MÃI</span>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center sale">
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="sale-off">
                  <div className="sale-off-title">Siêu khuyến mãi</div>
                  <div className="sale-off-des">
                    Nhân dịp 30 tháng 4, Catpaw mang đến cho bạn chương trình
                    khuyến mãi cực khủng
                  </div>
                  Hạn cuối:
                  <div className="sale-off-date">
                    <span>30</span> tháng <span>4</span> năm <span>2023</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="sale-off-banner">
                  <div className="owl-3 owl-carousel owl-theme">
                    <a href="./detail-product.html?id=7">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img src="./img/cat-thumbnail/7.jpg" alt="" />
                          <div className="sale-off-tag">-15%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Munchkin Bicolor
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">20.200.000 ₫</div>
                            <div className="new-price">17.170.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=8">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img src="./img/cat-thumbnail/8.jpg" alt="" />
                          <div className="sale-off-tag">-10%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Munchkin Xanh Xám
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">21.000.000 ₫</div>
                            <div className="new-price">19.000.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=13">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img src="./img/food-thumbnail/3.jpg" alt="" />
                          <div className="sale-off-tag">-14%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">Catsrang 5kg</div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">400.000 ₫</div>
                            <div className="new-price">350.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="./detail-product.html?id=17">
                      <div className="sale-off-item">
                        <div className="sale-off-thumbnail">
                          <img src="./img/food-thumbnail/7.jpg" alt="" />
                          <div className="sale-off-tag">-8%</div>
                        </div>
                        <div className="sale-off-card-content">
                          <div className="sale-off-card-name">
                            Royal Canin 2kg
                          </div>
                          <div className="price-lable">
                            <div className="old-price-label">Giá cũ</div>
                            <div className="new-price-label">Giá mới</div>
                          </div>
                          <div className="price">
                            <div className="old-price">500.000 ₫</div>
                            <div className="new-price">460.000 ₫</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sản phẩm theo chủ đề bán mèo */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>3</span>
            </div>
            <span>MÈO CƯNG</span>
          </div>
          <div className="cat-listing">
            <div className="container">
              <div className="row d-flex">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="item-card">
                    <div className="item-content">
                      <div className="card-thumbnail">
                        <img
                          src="./img/cat-thumbnail/munchkin-xam-xanh-tai-cup-anh-bia-400x400.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <div className="card-name">Mèo xám chân ngắn</div>
                        <div className="card-price">15.000.000 ₫</div>
                        <div className="card-meta">
                          <div className="card-rate">
                            4
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className="card-sale">8 lượt mua</div>
                        </div>
                      </div>
                      <div className="buy">
                        <button className="buy-btn">Thêm vào giỏ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sản phẩm theo chủ đề Thực phẩm */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>4</span>
            </div>
            <span>THỨC ĂN CHO MÈO</span>
          </div>
          <div className="food-listing">
            <div className="container">
              <div className="row d-flex">
                <div className="col-12 col-sm-6 col-md-3">
                  <a href="./detail-product.html">
                    <div className="item-card">
                      <div className="item-content">
                        <div className="card-thumbnail">
                          <img
                            src="./img/cat-thumbnail/munchkin-xam-xanh-tai-cup-anh-bia-400x400.jpg"
                            alt=""
                          />
                        </div>
                        <div className="card-content">
                          <div className="card-name">Mèo xám chân ngắn</div>
                          <div className="card-price">15.000.000 ₫</div>
                          <div className="card-meta">
                            <div className="card-rate">
                              4
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </div>
                            <div className="card-sale">8 lượt mua</div>
                          </div>
                        </div>
                        <div className="buy">
                          <button className="buy-btn">Thêm vào giỏ</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Sản phẩm theo chủ đề Đồ dùng */}
        <section>
          <div className="container section-title">
            <div className="section-num">
              <span>5</span>
            </div>
            <span>ĐỒ DÙNG CHO MÈO</span>
          </div>
          <div className="access-listing">
            <div className="container">
              <div className="row d-flex">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="item-card">
                    <div className="item-content">
                      <div className="card-thumbnail">
                        <img
                          src="./img/cat-thumbnail/munchkin-xam-xanh-tai-cup-anh-bia-400x400.jpg"
                          alt=""
                        />
                      </div>
                      <div className="card-content">
                        <div className="card-name">Mèo xám chân ngắn</div>
                        <div className="card-price">15.000.000 ₫</div>
                        <div className="card-meta">
                          <div className="card-rate">
                            4
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </div>
                          <div className="card-sale">8 lượt mua</div>
                        </div>
                      </div>
                      <div className="buy">
                        <button className="buy-btn">Thêm vào giỏ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Phản hồi của khách hàng */}
        <section>
          <div className="container">
            <div className="row testimo-section">
              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <div className="testimo-tag">
                  <div className="testimo-title">PHẢN HỒI CỦA KHÁCH HÀNG</div>
                  <div className="testimo-text">
                    Cùng xem khách hàng của Catpaw đã phản hồi gì về Catpaw nhé.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
                <div className="testimonials">
                  {/* Nội dung quote hiển thị ở đây */}
                  <p className="text" />
                  {/* Tên tác giả hiển thị ở đây */}
                  <strong className="name" />
                  {/* <div class="author-container"> */}
                  <div className="authors-list selected">
                    <div className="author selected">
                      <img
                        src="https://randomuser.me/api/portraits/men/41.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/women/50.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/men/42.jpg"
                        alt=""
                      />
                    </div>
                    <div className="author">
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Đăng ký nhận tin  */}
        <section>
          <div className="container">
            <div className="row">
              <div className="get-news">
                <div className="get-news-content">
                  <div className="get-news-title">ĐĂNG KÝ NHẬN TIN</div>
                  <div className="get-news-text">
                    Hãy để lại email của bạn để nhận ngay những tin tức khuyến
                    mại và sản phẩm mới nhất
                  </div>
                </div>
                <div className="get-news-form">
                  <input
                    className="get-news-input"
                    type="text"
                    placeholder="Nhập email của bạn"
                  />
                  <button className="get-news-btn">GỬI</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
