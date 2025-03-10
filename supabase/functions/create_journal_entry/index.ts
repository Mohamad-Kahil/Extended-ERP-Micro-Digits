import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Auth context of the logged in user
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      },
    );

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("Not authenticated");

    // Get the request body
    const {
      entryNumber,
      date,
      description,
      reference,
      amount,
      entityId,
      status,
      lineItems,
    } = await req.json();

    // Start a transaction
    const { data, error } = await supabaseClient.rpc("create_journal_entry", {
      p_entry_number: entryNumber,
      p_date: date,
      p_description: description,
      p_reference: reference || null,
      p_amount: amount,
      p_entity_id: entityId,
      p_status: status,
      p_created_by: user.id,
      p_line_items: lineItems.map((item: any) => ({
        account_id: item.accountId,
        description: item.description || null,
        debit: item.debit || null,
        credit: item.credit || null,
      })),
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
