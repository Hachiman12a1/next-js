import { useAuth } from "@/hooks/useAuth";
import { LayoutProps } from "@/models";
import Link from "next/link";
import { useRouter } from "next/router";
import Auth from "../common/auth";

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to login page");
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <p>Profile: {JSON.stringify(profile)}</p>

      <div>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
