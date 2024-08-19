import { createBrowserClient } from "@supabase/ssr";
import { User } from "@supabase/supabase-js";
import React, { createContext, useEffect, useState } from "react";



interface AuthContextValue {
    user: User | null;
    loading: boolean;
    handleSignOut: () => Promise<void>;
    handleLogin:(email:string,password:string) => Promise<void>;
    handleSignUp: (email:string,username:string,password:string) => Promise<void>;
    updateUser:(username:string) => Promise<{ success: boolean}>;
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);


export default function AuthProvider({children} : {children: React.ReactNode}) {
    const  supabase = createBrowserClient()
    const [user,setUser] = useState<User | null >(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event,  session ) => {
            if(event === "SIGNED_IN" || 
                event === "INITIAL_SESSION" ||
                event ===  "USER_UPDATED"
            ) {
                setUser(session?.user ?? null);
            }else if (event === "SIGNED_OUT") {
                setUser(null);
            }
            setLoading(false);

        })

    },[])

}