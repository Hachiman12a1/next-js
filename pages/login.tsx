import * as React from "react";
import { authApi } from "@/api/index";
import { useAuth } from "@/hooks/index";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount : false
  });

  async function handleLoginClick() {
    try {
      await login();
      console.log("Redirect to dashboard");
      router.push('/about')
    } catch (error) {
      console.log("Failed to login", error);
    }
  }
  // async function handleGetProfileClick() {
  //   try {
  //     await authApi.getProfile();
  //   } catch (error) {
  //     console.log("Failed to get profile", error);
  //   }
  // }
  async function handleLogoutClick() {
    try {
      await logout();
      console.log("Redirect lo login page");
    } catch (error) {
      console.log("Failed to logout", error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile : {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
