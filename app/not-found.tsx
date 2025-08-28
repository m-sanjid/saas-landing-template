import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteNavbar />
      <main
        id="content"
        role="main"
        className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
          Page not found
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex gap-3">
          <Link href="/" className="underline underline-offset-4">
            Go back home
          </Link>
          <Link href="/contact" className="underline underline-offset-4">
            Contact support
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
