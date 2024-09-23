import { login } from './actions'
import AuthCard from '@/components/AuthForms/AuthCard'

export default function LoginPage() {
  return (
    <div className='flex min-h-screen justify-center items-center gap-x-4'>
      <form className='flex flex-col'>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form>
      <AuthCard />  
    </div>
  )
}