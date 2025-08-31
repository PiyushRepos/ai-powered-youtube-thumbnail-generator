import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1>Hello world</h1>
      <Link href="/app">
        <Button>Go to app</Button>
      </Link>
    </div>
  );
}
