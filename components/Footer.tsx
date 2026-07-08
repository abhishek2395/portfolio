export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-[12px] text-fog/70 sm:flex-row sm:px-10">
        <p>© {new Date().getFullYear()} Abhishek Jaiswal</p>
        <p>
          Designed as a scroll, built with Next.js — and yes, the stamp is me.
        </p>
      </div>
    </footer>
  );
}
