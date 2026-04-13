import Navbar from "@/components/layout/Navbar";
import { ListingForm } from "@/components/ads/ListingForm";

export default function PostAdPage() {
  return (
    <main className="min-h-screen premium-gradient">
      <Navbar />
      <div className="pt-32">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Post Your Advertisement</h1>
          <p className="text-slate-500 font-medium max-w-lg mx-auto">
            Sell with precision. Use our AI tools to create the perfect listing in under 60 seconds.
          </p>
        </div>
        <ListingForm />
      </div>
    </main>
  );
}
