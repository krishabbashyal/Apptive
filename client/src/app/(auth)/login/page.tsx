import LoginForm from "@/components/AuthForms/Login";
import BackgroundDots from "@/components/UserInterface/BackgroundDots";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <BackgroundDots />
      <div className="z-10 flex w-full items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
