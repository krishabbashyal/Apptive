"use client";
import { User } from "@supabase/supabase-js";
import { getUser } from "@/app/(auth)/actions";
import { useState, useEffect } from "react";


const UserInfo = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return <div className="absolute opacity-30 text-accent">{JSON.stringify(user, null, 2)}</div>;
};

export default UserInfo;
