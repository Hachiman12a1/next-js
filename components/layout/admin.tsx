import { LayoutProps } from "@/models/index";
import Link from "next/link";
import Auth from "../common/auth";

export function AdminLayout({ children }: LayoutProps) {


  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
