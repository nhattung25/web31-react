import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    songs: [
      {
        id: 1,
        title: "Cô ấy của anh ấy",
        singer: "Bảo Anh",
        src: "/songs/CoAyCuaAnhAy.mp3",
      },
      {
        id: 2,
        title: "Ngày mai người ta lấy chồng",
        singer: "Unknow",
        src: "/songs/NgayMaiNguoiTaLayChong.mp3",
      },
    ],
    current: 1,
    isPlaying: false,
    volume: 100,
    loop: "no",
    mix: false,
  },
  reducers: {
    play(state, action) {
      state.isPlaying = true;
    },
    pause(state, action) {
      state.isPlaying = false;
    },
    next(state, action) {
      switch (state.loop) {
        case "no":
          if (state.current < state.songs.length) {
            state.current++;
            state.isPlaying = true;
          }
          break;

        case "all":
          if (state.current < state.songs.length) {
            state.current++;
          } else {
            state.current = 1;
          }

          state.isPlaying = true;
          break;

        case "one":
          break;

        default:
          return state;
      }
    },
    prev(state, action) {
      switch (state.loop) {
        case "no":
          if (state.current > 1) {
            state.current--;
            state.isPlaying = true;
          }
          break;

        case "all":
          if (state.current > 1) {
            state.current--;
          } else {
            state.current = state.songs.length;
          }

          state.isPlaying = true;
          break;

        case "one":
          break;

        default:
          return state;
      }
    },
    mix(state, action) {},
    loop(state, action) {
      if (state.loop === "no") {
        state.loop = "all";
      } else if (state.loop === "all") {
        state.loop = "one";
      } else {
        state.loop = "no";
      }
    },
  },
});

const playerReducer = playerSlice.reducer;
const playerAction = playerSlice.actions;

export const usePlayer = () => {
  const dispatch = useDispatch();
  const playerState = useSelector((state) => state.player);
  return {
    ...playerState,
    current: playerState.songs.find((song) => song.id === playerState.current),
    play() {
      dispatch(playerAction.play());
    },
    pause() {
      dispatch(playerAction.pause());
    },
    next() {
      dispatch(playerAction.next());
    },
    prev() {
      dispatch(playerAction.prev());
    },
    changeLoop() {
      dispatch(playerAction.loop());
    },
  };
};

export default playerReducer;
