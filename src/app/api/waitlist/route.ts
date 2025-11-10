export async function POST(req: Request) {
  const body = await req.json();               // parse JSON
  console.log("Waitlist submission:", body);   // see it in the terminal
  return Response.json({ ok: true });
}
