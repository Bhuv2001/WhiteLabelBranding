import { supabase } from "../supabase/client";

export async function getThemes() {
  const { data, error } = await supabase
    .from("theme_templates")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
}

export async function getBranding() {
  const { data, error } = await supabase
    .from("brand_settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return data;
}

export async function saveBranding(branding) {
  const payload = {
    company_name: branding.company_name,
    app_name: branding.app_name,
    logo_url: branding.logo_url || null,
    selected_theme: branding.selected_theme || null,
    mode: branding.mode || "light",
  };

  const existing = await getBranding();

  if (existing) {
    const { data, error } = await supabase
      .from("brand_settings")
      .update(payload)
      .eq("id", existing.id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  const { data, error } = await supabase
    .from("brand_settings")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data;
}