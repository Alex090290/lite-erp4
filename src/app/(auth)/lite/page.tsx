import {
  ChartColumnBig,
  Percent,
  Settings,
  ShelvingUnit,
  ShoppingBasket,
  SquareOff,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type AppBoxType = { name: string; icon: ReactNode; route: string };

const appBox: AppBoxType[] = [
  { name: "Ventas", icon: <ChartColumnBig size={50} />, route: "lite/sales" },
  { name: "Compras", icon: <ShoppingBasket size={50} />, route: "/" },
  { name: "Facturación", icon: <Percent size={50} />, route: "/" },
  { name: "Inventario", icon: <ShelvingUnit size={50} />, route: "/" },
  { name: "Ajustes", icon: <Settings size={50} />, route: "/" },
];

export function createMenuApp({
  name,
  route,
  icon = <SquareOff size={50} />,
}: AppBoxType) {
  for (const item of appBox) {
    if (item.name === name) {
      return item;
    } else {
    }
  }
  appBox.push({ name, route, icon });
}

export default function page() {
  return (
    <div className="flex-1 flex flex-col gap-1 min-h-0 overflow-hidden">
      <header className="h-14 bg-gray-200 shadow-sm">header</header>
      <div className="flex flex-col flex-1 w-full min-h-0 p-8">
        <section className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 content-start w-full md:w-4/5 2xl:w-1/2 mx-auto flex-1 min-h-0 overflow-y-auto rounded-lg">
          {appBox.map((app) => (
            <article
              key={app.name}
              className="flex flex-col items-center gap-1"
            >
              <Link
                className="border border-gray-100 bg-white hover:bg-gray-50 hover:border-gray-200 transition-colors shadow-md rounded-lg p-2"
                href={app.route}
              >
                {app.icon}
              </Link>
              <span
                className="text-md text-shadow-sm
"
              >
                {app.name}
              </span>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
