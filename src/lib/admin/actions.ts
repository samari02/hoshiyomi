"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { buildReadingContent } from "@/lib/readings/parseReadingContent";
import { createClient } from "@/lib/supabase/server";

export type CreateReadingInput = {
  clientName: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  title: string;
  personalMessage: string;
  sunSignKey: string;
  sunSummary: string;
  sunDetail: string;
  moonSignKey: string;
  moonSummary: string;
  moonDetail: string;
  risingSignKey: string;
  risingSummary: string;
  risingDetail: string;
  sunEnergy: string;
  moonEnergy: string;
  risingEnergy: string;
  loveTheme: string;
  workTheme: string;
  moneyTheme: string;
  talent1Title: string;
  talent1Body: string;
  talent2Title: string;
  talent2Body: string;
  talent3Title: string;
  talent3Body: string;
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

  const content = buildReadingContent(input);

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
