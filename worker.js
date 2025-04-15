
import { VisitTracker } from './VisitTracker';  // Import the Durable Object class

export default {
  async fetch(request, env) {
   
    const id = env.VISIT_TRACKER.idFromName("visit-tracker-instance");

 
    const object = env.VISIT_TRACKER.get(id);

    return object.fetch(request);
  }
};
