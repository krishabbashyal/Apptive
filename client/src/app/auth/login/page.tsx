import LoginForm from "@/components/AuthForms/Login";
import AuthCard from "@/components/AuthForms/AuthCard";

export default function LoginPage() {
  return (
      <div className="flex justify-center h-full items-center w-full gap-x-4">
        <LoginForm />
        <AuthCard />
      </div>
  );
}
