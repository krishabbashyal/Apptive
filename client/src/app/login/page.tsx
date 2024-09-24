import { login } from './actions'
import AuthCard from '@/components/AuthForms/AuthCard'

export default function LoginPage() {
  return (
    <div className='flex min-h-screen justify-center items-center w-full gap-x-4'>
      <form className='flex bg-white p-8 rounded-lg w-96 flex-col'>
      <h1 className='text-5xl text-black font-black mb-4'>Log in</h1>
        <label htmlFor="email">Email:</label>
        <input  className="h-12 rounded pl-4" id="email" name="email" type="email" required />
        <label className='mt-2' htmlFor="password">Password:</label>
        <input className="h-12 rounded pl-4" id="password" name="password" type="password" required />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' formAction={login}>Log in</button>
      </form>
      <AuthCard />  
    </div>
  )
}