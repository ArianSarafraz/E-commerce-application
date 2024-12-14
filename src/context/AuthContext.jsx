import { createContext, useContext, useEffect, useState } from "react";
import http, { setUpInterceptor } from "../services/httpService";
import toast from "react-hot-toast";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem("authToken"));
  const [isLoading, setIsLoading] = useState(false);

  // login
  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const { data } = await http.post("/auth/login", { username, password });
      const { token } = data;
      setToken(token);
      sessionStorage.setItem("authToken", token);
      toast.success("Logged in succussfully");
    } catch (error) {
      toast.error("Username or password is wrong.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  // logout
  const logout = () => {
    setToken(null);
    sessionStorage.removeItem("authToken");
  };

  useEffect(() => {
    setUpInterceptor(token);
  }, [token]);

  return (
    <div>
      <AuthContext.Provider value={{ login, logout, token, isLoading }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}
// A custom hook which returns the Authentication's context values
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthProvider;
