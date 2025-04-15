export class VisitTracker {
  constructor(state, env) {
    this.state = state;  
  }

  async fetch(request) {
    const today = new Date().toISOString().split("T")[0]; 
    const key = `visits:${today}`;

 
    const current = await this.state.storage.get(key);
    const count = current ? parseInt(current) + 1 : 1;

 
    await this.state.storage.put(key, count.toString());

  
    return new Response(
      JSON.stringify({
        date: today,
        visits: count,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
