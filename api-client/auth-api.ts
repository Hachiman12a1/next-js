import axiosClient from "./axios-client";
import { LoginPayload, UserProfile } from "@/models";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile(): Promise<UserProfile> {
    return axiosClient.get("/profile");
  },
};
