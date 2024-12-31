import SignupForm from "@/components/AuthForms/Signup";
import BackgroundDots from "@/components/UserInterface/BackgroundDots";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen justify-center">
      <BackgroundDots />
      <div className="z-10 flex w-full items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
}
