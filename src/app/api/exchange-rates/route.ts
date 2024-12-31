import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = "";
const API_KEY = "";

export async function GET() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        app_id: API_KEY,
      },
    });

    return NextResponse.json(response.data.rates);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
