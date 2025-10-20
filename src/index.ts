/**
 * Backend Wizard – Cloudflare Worker Version (TypeScript)
 * 
 * Routes:
 *  - GET /           → Basic welcome text
 *  - GET /health     → Health check
 *  - GET /me         → Returns user info + random cat fact
 */

export interface Env {}

interface CatFactResponse {
  fact: string;
  length: number;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // ✅ Health check route
    if (url.pathname === "/health") {
      return new Response("OK", { status: 200 });
    }

    // ✅ Root route
    if (url.pathname === "/") {
      return new Response("Backend Wizards - Stage 0 running 🪄", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    // ✅ /me route — with type-safe JSON
    if (url.pathname === "/me") {
      try {
        const response = await fetch("https://catfact.ninja/fact");

        if (!response.ok) {
          throw new Error("Failed to fetch cat fact");
        }

        const data = (await response.json()) as CatFactResponse;

        const body = {
          status: "success",
          user: {
            email: "abijay440@gmail.com",
            name: "Abiodun Jegede",
            stack: "TypeScript / Cloudflare Workers",
          },
          timestamp: new Date().toISOString(),
          fact: data.fact,
        };

        return new Response(JSON.stringify(body), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.error("Error fetching cat fact:", err);

        return new Response(
          JSON.stringify({
            status: "error",
            message: "Could not fetch cat fact at the moment.",
            timestamp: new Date().toISOString(),
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // ✅ Fallback 404
    return new Response("Not Found", { status: 404 });
  },
};
