import TicketList from "@/components/TicketList";
import { Suspense } from "react";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
