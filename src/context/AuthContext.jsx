import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiGSignin } from "../api/auth";

const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const initialState = {
  user: null,
  isAuthenticated: (Cookies.get("token"))?true:false,
};

function reducer(state, action) {
  switch (action.type) {
    case "auth/success":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "auth/logout":
      return {...state, isAuthenticated : false, user:null};
    case "token/loaded": // Add this case
      return { ...state, isAuthenticated: true, user: action.payload.user };
    default:
      console.error("Unknown action type provided");
      return state;
  }
}

export function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();

  /*const refreshAuth = useCallback(async () => {
    const token = Cookies.get("token");
    if (!token) return dispatch({ type: "auth/logout" });

    try {
      const userData = await apiFetchUser(token);
      dispatch({ type: "auth/success", payload: userData });
    } catch (error) {
      dispatch({ type: "auth/logout" });
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);*/

  const handleGoogleOAuth = async (data) => {
    toast.promise(apiGSignin({ ...data }), {
      loading: "Sailing into unknown...",
      success: (res) => {
        // Save token in cookies
        Cookies.set("token", res.token, { expires: 7 });
        localStorage.setItem("token",res.token)

        // Update auth state
        dispatch({
          type: "auth/success",
          payload: res.user,
        });

        // Navigate user
        if (res.redirect?.path) {
          navigate(res.redirect.path, {
            replace: true,
            state: res.redirect.state,
          });
        } else {
          navigate("/");
        }

        return res.message;
      },
      error: (err) => err.message || "Google login failed",
    });
  };



  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleGoogleOAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
