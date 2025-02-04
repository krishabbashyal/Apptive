"use server";

import { signUpSchema, SignUpSchemaType } from "@/lib/schemas";
import { createClient } from "@/utils/supabase/server";
import { logInSchema, LogInSchemaType } from "@/lib/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

export const signupUser = async (formData: SignUpSchemaType) => {
  const validatedData = signUpSchema.safeParse(formData);
  if (validatedData.success) {
    const supabase = await createClient();

    const data = {
      email: formData.email as string,
      password: formData.password as string,
    };

    const { error } = await supabase.auth.signUp(data);
    if (error) {
      console.error(error);
    }
    revalidatePath("/", "layout");
    redirect("/dashboard", RedirectType.replace);
  }
};

export const loginUser = async (formData: LogInSchemaType) => {
  const validatedData = logInSchema.safeParse(formData);
  if (validatedData.success) {
    const supabase = await createClient();

    const data = {
      email: formData.email as string,
      password: formData.password as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      console.error(error);
    }

    revalidatePath("/", "layout");
    redirect("/dashboard", RedirectType.replace);
  }
};

export const logoutUser = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
};

export const getUser = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return null;
  }

  return data.user;
};
