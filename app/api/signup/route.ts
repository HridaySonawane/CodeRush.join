import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("members")
      .insert([{ name, email }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You’re already part of Coderush 👀" },
          { status: 409 }
        );
      }

      throw error;
    }

    return NextResponse.json(
      { message: "Welcome to Coderush 🚀" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
