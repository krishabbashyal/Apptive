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

  return (
    <div className="fixed bottom-4 right-[210px] py-[18px] rounded-lg border border-accent bg-accentHighlight p-4 shadow-lg backdrop-blur-sm">
      <h1 className="mb-2 text-slate-200">Logged-In User:</h1>

      <div className="space-y-2 font-mono text-sm">
        <p className="flex justify-between">
          <span className="text-slate-400">Status:</span>
          <span className="text-emerald-400">{user?.role || "N/A"}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-slate-400">Email:</span>
          <span className="text-emerald-400">{user?.email || "N/A"}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-slate-400 mr-4">ID:</span>
          <span className="text-emerald-400">{user?.id || "N/A"}</span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
