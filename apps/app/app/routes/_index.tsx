import type { MetaFunction } from "@remix-run/node";
import { Button } from "@monorepo/ui";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard | Our Company" },
    { name: "description", content: "Welcome to our company dashboard!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="mb-4">This is our amazing dashboard built with Remix!</p>
      <Button>Get Started</Button>
    </div>
  );
}