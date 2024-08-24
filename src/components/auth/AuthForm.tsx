"use client"


import { useAuth } from "@/lib/db/providers/AuthProvider";
import Link from "next/link";
import { useState } from "react";
import SubmitButton from '../ui/SubmitButton';


interface AUthFormProps {
    type: "login" | "signup"
}


export default function AuthForm({ type } : AUthFormProps) {
    const {handleSignUp, handleLogin, loading} = useAuth();
    const [username, setUsername ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (type === 'login') {
            handleLogin(email, password)
        }
        if(type === "signup") {
            handleSignUp(email,username, password);
        }
    }

  return (
    <form
    className="flex flex-col space-y-4 p-4 md:p-6"
    onSubmit={handleSubmit}
    >
      
      <h2 className="text-2xl font-semibold to-gray-600">
        {type === 'login' ? "Login" : "Sign Up"}
      </h2> 
      {type === "signup" && (
        <div className="flex flex-col gap-1">
        <label htmlFor="username">username</label>    
        <input 
        type="text" 
        id="username"
        autoComplete="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="rounded-2xl border border-gray-300 py-2"
        />    
        </div>
      )}

       <div className="flex flex-col gap-1">
        <label htmlFor="email">email</label>    
        <input type="email" 
        id="email"
        autoComplete="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-2xl border border-gray-300 py-2"
        />    
        </div>

        <div className="flex flex-col gap-1">
        <label htmlFor="password">password</label>    
        <input 
        minLength={6}
        type="password" 
        id="password"
        name="password"
        autoComplete={type === 'signup' ? 'new-password': 'current-password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="rounded-2xl border border-gray-300 py-2"
        />    
        </div>

        <SubmitButton  loading={loading} className="w-max px-8">
        {type === "signup" ? "Sign Up" : "Login"}
        </SubmitButton>
          <p>
            {type === "signup" ? "Already  have an account ?" : "Don't have an account ?"}
            <Link href={`/${type === "signup"? "login" : "sign-up"}`}
            
            className="ml-2 text-blue-500"
            >
            {type === "signup" ? "Login" : "Sign Up"}
            </Link>
          </p>
    </form>
  )
}
