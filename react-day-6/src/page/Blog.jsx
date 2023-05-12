import React from 'react'

export default function Blog() {
  return (
    <div>
      <div className="container main-content">
        {/* Sign up-button */}
        <section className="sign">
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
        </section>
        {/* Main content */}
        <div className="content">
          {/* Hot post, Seach bar and filted post */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8">
                  <a href="">
                    <div className="hot-post">
                      <img
                        className="thumbnail-img"
                        src="./img/thumbnail/thumbnail-1.jpg"
                        alt=""
                      />
                      <div className="post-tag">BÀI VIẾT NỔI BẬT</div>
                      <div className="hot-post-text">
                        <div className="title">
                          Ngày quốc tế đưa mèo đi khám bệnh
                        </div>
                        <div className="describe">
                          Ngày 22 tháng 8 đã được chỉ định là Ngày quốc gia đưa
                          mèo của bạn đến bác sĩ thú y và mặc dù đây có thể
                          không phải là “ngày lễ” yêu thích của mèo cưng, nhưng
                          đó là một ngày quan trọng...
                        </div>
                        <div className="post-footer">
                          <div className="post-action">
                            <div className="love">
                              <span>40</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            </div>
                            <div className="comemnt">
                              <span>35</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-chat-dots"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                            </div>
                            <div className="view">
                              <span>100</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="post-date">
                            Ngày 1 tháng 3, năm 2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-4">
                  <div className="search-bar">
                    <input className="search-input" type="text" />
                    <button className="search">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="new-post-list">
                    <div className="container section-title">
                      <div className="section-num">
                        <span>
                          <span className="fire">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={30}
                              height={30}
                              fill="#FAC000"
                              className="bi bi-fire"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <span>Bài viết mới nhất</span>
                    </div>
                    <div className="new-post-title">Bài viết mới nhất</div>
                    <button className="btn-prev">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi bi-caret-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                    </button>
                    <button className="btn-next">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </button>
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="new-post-card">
                            <img src="./img/thumbnail/slide-1.webp" alt="" />
                            <div className="new-post-card-content">
                              <div className="new-post-card-title">
                                Làm thế nào để mèo không làm bạn thức giấc.
                              </div>
                              <div className="new-post-card-footer">
                                <div className="post-card-action">
                                  <div className="post-card-love">
                                    <span>40</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-heart"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-comemnt">
                                    <span>35</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-chat-dots"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-view">
                                    <span>100</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-eye"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="post-card-creator">
                                  <img src="./img/avatar/avatar-1.png" alt="" />
                                  <span>cat_paw</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-post-card">
                            <img src="./img/thumbnail/slide-2.webp" alt="" />
                            <div className="new-post-card-content">
                              <div className="new-post-card-title">
                                Tầm quan trọng của thời gian chơi cho mèo.
                              </div>
                              <div className="new-post-card-footer">
                                <div className="post-card-action">
                                  <div className="post-card-love">
                                    <span>40</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-heart"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-comemnt">
                                    <span>35</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-chat-dots"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-view">
                                    <span>100</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-eye"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="post-card-creator">
                                  <img src="./img/avatar/avatar-1.png" alt="" />
                                  <span>cat_paw</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-post-card">
                            <img src="./img/thumbnail/slide-3.webp" alt="" />
                            <div className="new-post-card-content">
                              <div className="new-post-card-title">
                                Vận chuyển mèo của bạn như thế nào.
                              </div>
                              <div className="new-post-card-footer">
                                <div className="post-card-action">
                                  <div className="post-card-love">
                                    <span>40</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-heart"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-comemnt">
                                    <span>35</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-chat-dots"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-view">
                                    <span>100</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-eye"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="post-card-creator">
                                  <img src="./img/avatar/avatar-1.png" alt="" />
                                  <span>cat_paw</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="new-post-card">
                            <img src="./img/thumbnail/slide-4.webp" alt="" />
                            <div className="new-post-card-content">
                              <div className="new-post-card-title">
                                Mèo không phải là kẻ thái nhân cách.
                              </div>
                              <div className="new-post-card-footer">
                                <div className="post-card-action">
                                  <div className="post-card-love">
                                    <span>40</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-heart"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-comemnt">
                                    <span>35</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={12}
                                      height={12}
                                      fill="currentColor"
                                      className="bi bi-chat-dots"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                    </svg>
                                  </div>
                                  <div className="post-card-view">
                                    <span>100</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={16}
                                      height={16}
                                      fill="currentColor"
                                      className="bi bi-eye"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="post-card-creator">
                                  <img src="./img/avatar/avatar-1.png" alt="" />
                                  <span>cat_paw</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* All post */}
          <section>
            <div className="health-post">
              <div className="container section-title">
                <div className="section-num">
                  <span>1</span>
                </div>
                <span>Chăm sóc sức khỏe cho mèo cưng</span>
              </div>
              <div className="container">
                <div className="blog-list">
                  <div className="row d-flex justify-content-center g-4"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="health-post">
              <div className="container section-title">
                <div className="section-num">
                  <span>2</span>
                </div>
                <span>Chăm sóc dinh dưỡng cho mèo cưng</span>
              </div>
              <div className="container">
                <div className="blog-list">
                  <div className="row d-flex justify-content-center g-4">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-love">
                              <span>40</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            </div>
                            <div className="post-card-comemnt">
                              <span>35</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chat-dots"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                            </div>
                            <div className="post-card-view">
                              <span>100</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        {/* <div class="post-card-bg"></div>
                  <div class="reading-tag">ĐỌC NGAY</div> */}
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-action">
                              <div className="post-card-love">
                                <span>40</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-heart"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                              </div>
                              <div className="post-card-comemnt">
                                <span>35</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                              </div>
                              <div className="post-card-view">
                                <span>100</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-eye"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        {/* <div class="post-card-bg"></div>
                  <div class="reading-tag">ĐỌC NGAY</div> */}
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-love">
                              <span>40</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            </div>
                            <div className="post-card-comemnt">
                              <span>35</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chat-dots"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                            </div>
                            <div className="post-card-view">
                              <span>100</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        {/* <div class="post-card-bg"></div>
                  <div class="reading-tag">ĐỌC NGAY</div> */}
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-action">
                              <div className="post-card-love">
                                <span>40</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-heart"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                              </div>
                              <div className="post-card-comemnt">
                                <span>35</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                              </div>
                              <div className="post-card-view">
                                <span>100</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-eye"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        {/* <div class="post-card-bg"></div>
                  <div class="reading-tag">ĐỌC NGAY</div> */}
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-love">
                              <span>40</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                              </svg>
                            </div>
                            <div className="post-card-comemnt">
                              <span>35</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chat-dots"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                              </svg>
                            </div>
                            <div className="post-card-view">
                              <span>100</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="post-card">
                        {/* <div class="post-card-bg"></div>
                  <div class="reading-tag">ĐỌC NGAY</div> */}
                        <div className="post-card-thumbnail">
                          <img src="./img/thumbnail/thumbnail-4.jpg" alt="" />
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-title">
                            Làm thế nào để mèo không làm bạn thức giấc.
                          </div>
                          <div className="post-card-des">
                            Mèo của bạn có đánh thức bạn vào lúc bình minh ló
                            dạng không? Có phải chúng khiến bạn không thể có
                            được một giấc ngủ ngon?...
                          </div>
                          <div className="post-card-footer">
                            <div className="post-card-action">
                              <div className="post-card-love">
                                <span>40</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-heart"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                              </div>
                              <div className="post-card-comemnt">
                                <span>35</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={12}
                                  height={12}
                                  fill="currentColor"
                                  className="bi bi-chat-dots"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                                </svg>
                              </div>
                              <div className="post-card-view">
                                <span>100</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-eye"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Pagination */}
          <div className="container">
            <ul className="pagination">
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-caret-left-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </a>
              </li>
              <li className="pag-item pag-item-active">
                <a href="" className="pag-item-link">
                  1{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  2{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  3{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  4{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  ...{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  10{" "}
                </a>
              </li>
              <li className="pag-item">
                <a href="" className="pag-item-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
