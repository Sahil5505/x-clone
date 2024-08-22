"use client"


import { useAuth } from "@/lib/db/providers/AuthProvider";
import { useState } from "react";


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
        {type === 'login' ? "Sign In" : "Sign Up"}
      </h2> 
      {type === "signup" && (
        <div className="flex flex-col gap-1">
        <label htmlFor="username">username</label>    
        <input type="text" 
        id="username"
        autoComplete="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        className="rounded-2xl border border-gray-300 py-2"
        />    
            
        </div>
      )}
    </form>
  )
}
