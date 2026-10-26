import BtnDarkMode from "@/components/ui/BtnDarkMode";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-1 p-1 min-h-0">
      <header data-theme="cupcake" className="h-16 shrink-0 border border-slate-300 rounded">
        <BtnDarkMode />
      </header>
      <main className="border border-slate-300 flex-1 flex gap-1 p-1 rounded min-h-0 min-w-0">
        <aside className="border border-slate-300 p-1 rounded shrink-0 w-[225px]">aside</aside>
        <div className="border border-slate-300 flex-1 flex flex-col gap-1 rounded p-1 min-h-0 min-w-0">
          <h3>Contenido</h3>
          <section className="rounded flex-1 p-1 min-h-0 overflow-y-auto">sección</section>
        </div>
      </main>
      <footer className="border border-slate-300 h-16 shrink-0 rounded">footer</footer>
    </div>
  );
}
