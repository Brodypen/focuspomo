import { createClient } from "@supabase/supabase-js"

// import { Database } from "./types/supabase"

export const supabase = createClient(
  process.env.NEXT_SUPABASE_URL as string,
  process.env.NEXT_SUPABASE_KEY as string
)
