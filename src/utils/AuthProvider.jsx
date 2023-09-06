/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [session, setSession] = useState({ user: null, ready: false });
  useEffect(() => {
    let ignore = false;
    async function getUser() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/user`, {
        withCredentials: true,
      });
      setSession({ user: res.data.user, ready: true });
    }
    if (!ignore) {
      getUser();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session: [session, setSession] }}>
      {children}
    </AuthContext.Provider>
  );
}
