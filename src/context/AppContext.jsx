import { createContext, useContext, useReducer, useCallback } from "react";
import PropTypes from "prop-types";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const AppContext = createContext();

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const initialState = {
  captchaToken: null,
  captchaBadgeVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "captcha/fetched":
      return { ...state, captchaToken: action.payload };
    case "captcha/toggle":
      return { ...state, captchaBadgeVisible: action.payload };
    default:
      console.error("Unknown action type provided");
      return state;
  }
}

export function AppProvider({ children }) {
  const [{ captchaToken, captchaBadgeVisible }, dispatch] = useReducer(reducer, initialState);

  const { executeRecaptcha } = useGoogleReCaptcha();

  // ✅ Memoize to prevent infinite loop
  const refreshCaptcha = useCallback(async () => {
    if (!executeRecaptcha) {
      console.warn("ReCAPTCHA is not available");
      return;
    }
    const token = await executeRecaptcha("auth_action");
    dispatch({ type: "captcha/fetched", payload: token });
  }, [executeRecaptcha]);

  // ✅ Memoize to avoid unnecessary re-renders
  const toggleCaptchaBadge = useCallback((visible) => {
    dispatch({ type: "captcha/toggle", payload: visible });
  }, []);

  return (
    <AppContext.Provider value={{ captchaToken, refreshCaptcha, captchaBadgeVisible, toggleCaptchaBadge }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
