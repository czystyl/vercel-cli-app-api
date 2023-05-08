export async function GET() {
  const deplay = Math.random() * 1000;

  await new Promise((resolve) => setTimeout(resolve, deplay));

  return new Response("Hello World" + Math.random().toFixed(2));
}
