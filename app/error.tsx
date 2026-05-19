"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 bg-yellow flex items-center justify-center px-4">
      <div className="text-center max-w-lg py-20">
        <p className="text-7xl md:text-9xl font-bold mb-4">Oops</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Ada yang Error
        </h1>
        <p className="text-lg text-black/60 mb-8">
          Jangan panik. Coba refresh atau balik ke beranda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="brutal-btn brutal-btn-black brutal-shadow">
            Coba Lagi
          </button>
          <Link href="/" className="brutal-btn brutal-shadow">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
