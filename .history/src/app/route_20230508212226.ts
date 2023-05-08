export async function GET() {
  const delay = Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return new Response(`Hello World after ${delay}ms!`);
}
