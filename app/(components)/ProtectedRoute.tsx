import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!isUser) router.push("/SignIn");
  }, [isUser, status, router]);

  if (isUser) {
    return children;
  }

  return <div>Loading...</div>;
};

export default ProtectedRoute;
