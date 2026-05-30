"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type CreateReadingInput = {
  clientName: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  title: string;
  personalMessage: string;
  sunBody: string;
  moonBody: string;
  risingBody: string;
  status: "draft" | "ready";
};

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return supabase;
}

export async function createReading(input: CreateReadingInput) {
  const supabase = await requireUser();

  const content = {
    sections: [
      { key: "sun", title: "太陽星座", body: input.sunBody },
      { key: "moon", title: "月星座", body: input.moonBody },
      { key: "rising", title: "上昇星座", body: input.risingBody },
    ].filter((section) => section.body.trim().length > 0),
  };

  const { data, error } = await supabase
    .from("readings")
    .insert({
      client_name: input.clientName,
      birth_date: input.birthDate,
      birth_time: input.birthTime || null,
      birth_place: input.birthPlace,
      title: input.title,
      personal_message: input.personalMessage || null,
      content,
      status: input.status,
      sent_at: input.status === "ready" ? new Date().toISOString() : null,
    })
    .select("token")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/readings");
  return data.token as string;
}

export async function listReadings() {
  const supabase = await requireUser();

  const { data, error } = await supabase
    .from("readings")
    .select("id, token, client_name, title, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
