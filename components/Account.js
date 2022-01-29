import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Account({ session }) {
  useEffect(() => {
    // load data here
    console.log("Hello World");
  }, [session]);
  const user = supabase.auth.user();
  return (
    <div>
      {" "}
      Hello {user.email}. This is Private Route only accessible after login.
      Have fun supabasing!
    </div>
  );
}
