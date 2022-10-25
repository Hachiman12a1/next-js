import * as React from "react";
import { authApi } from "@/api-client";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import { LoginForm } from "@/components/auth";
import { LoginPayload } from "@/models";

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login({
        username: "test1",
        password: "123123",
      });
      console.log("Redirect to dashboard");
      router.push("/about");
    } catch (error) {
      console.log("Failed to login", error);
    }
  }

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("Redirect lo login page");
    } catch (error) {
      console.log("Failed to logout", error);
    }
  }

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);
      // console.log("Redirect to dashboard");
      // router.push("/about");
    } catch (error) {
      console.log("Failed to login", error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile : {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>

      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
}
