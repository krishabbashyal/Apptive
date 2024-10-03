import SignupForm from "@/components/AuthForms/Signup";
import AuthCard from "@/components/AuthForms/AuthCard";

export default function LoginPage() {
  return (
      <div className="flex justify-center h-full items-center w-full">
        <SignupForm />
        <AuthCard />
      </div>
  );
}
