import type { AuthProvider } from "react-admin";
import { env } from "../config/env";

type LoginParams = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export const authProvider: AuthProvider = {
  login: async ({ username, password }: LoginParams) => {
    const response = await fetch(`${env.apiUrl}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const data: LoginResponse = await response.json();

    localStorage.setItem("adminToken", data.token);
    localStorage.setItem("adminUser", JSON.stringify(data.user));

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    return Promise.resolve();
  },

  checkAuth: () => {
    const token = localStorage.getItem("adminToken");

    return token ? Promise.resolve() : Promise.reject();
  },

  checkError: (error) => {
    const status = error.status || error.statusCode;

    if (status === 401 || status === 403) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");

      return Promise.reject();
    }

    return Promise.resolve();
  },

  getIdentity: () => {
    const user = localStorage.getItem("adminUser");

    if (!user) {
      return Promise.reject();
    }

    const parsedUser = JSON.parse(user);

    return Promise.resolve({
      id: parsedUser.id,
      fullName: parsedUser.name,
    });
  },

  getPermissions: () => {
    return Promise.resolve();
  },
};

