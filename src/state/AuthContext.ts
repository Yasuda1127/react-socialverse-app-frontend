import { createContext, useReducer } from "react"; // グローバルコンテキストを作り出すことができる
import AuthReducer from "./AuthReducer";

// stateの初期値の状態

// 最初のユーザー状態を定義
const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = () => {
  // 認証をどこでも提供する
  const [state, dispatch] = useReducer(AuthReducer, initialState);
};
