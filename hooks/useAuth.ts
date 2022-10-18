import useSWR from "swr";
import { Fetcher, PublicConfiguration } from "swr/dist/types";
import { authApi } from "@/api/index";
import { UserProfile } from "@/models/index";

export function useAuth(
  options?: Partial<
    PublicConfiguration<UserProfile | null, any, Fetcher<UserProfile | null>>
  >
) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>("/profile", {
    dedupingInterval: 3600 * 1000, //1hr
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: "test",
      password: "123456",
    });

    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate(null, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
