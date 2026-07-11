import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import ClienteAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/user", () =>
    ClienteAxios("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response?.data?.errors);
      }),
  );

  const login = async (datos, setErrors) => {
    try {
      const { data } = await ClienteAxios.post("/api/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrors([]);
      await mutate();
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
  };

  const registro = () => {};

  const logout = async () => {
    try {
      await ClienteAxios.post("/api/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {}
  };

  useEffect(() => {
    if (middleware === "guest" && url && user) {
      navigate(url);
    }
    if (middleware === "auth" && error) {
      navigate("/auth/login");
    }
  }, [user, error]);

  return {
    login,
    logout,
    registro,
    user,
    error,
  };
};
