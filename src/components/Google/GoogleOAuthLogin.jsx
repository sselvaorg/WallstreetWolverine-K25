import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";

function GoogleOAuthLogin() {
  const { handleGoogleOAuth } = useAuth();

  return (
    <div className="flex justify-center items-center">
      <div className="scale-125 p-4">
        <GoogleLogin
          onSuccess={(credentials) => {
            handleGoogleOAuth({
              accessId: credentials.credential,
            });
          }}
          onFailure={() => {
            toast.error("Error authenticating through Google OAuth");
          }}
          scope="https://www.googleapis.com/auth/userinfo.email"
        />
      </div>
    </div>
  );
}

export default GoogleOAuthLogin;
