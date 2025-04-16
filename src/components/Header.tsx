
import { BriefcaseBusiness } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="flex items-center gap-3 mb-4">
          <BriefcaseBusiness className="h-8 w-8" />
          <h1 className="text-3xl font-bold">JobBoard</h1>
        </div>
        <h2 className="text-4xl font-bold mb-4 max-w-2xl">
          Find Your Dream Job Today
        </h2>
        <p className="text-xl opacity-90 max-w-2xl">
          Browse thousands of job listings from top companies and find the perfect opportunity for your career.
        </p>
      </div>
    </header>
  );
}