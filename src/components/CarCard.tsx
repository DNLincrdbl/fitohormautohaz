import Image from "next/image";
import Link from "next/link";
import { getBrand, type Car } from "@/lib/cars";

export function CarCard({ car, slide }: { car: Car; slide?: boolean }) {
  return (
    <Link
      href={`/keszlet/${car.slug}`}
      data-slide={slide ? "" : undefined}
      draggable={false}
      className={`group block overflow-hidden rounded-[20px] bg-white ${
        slide ? "w-[min(80vw,400px)] shrink-0" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#eee]">
        <Image
          src={car.image}
          alt={car.name}
          fill
          draggable={false}
          className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
        {car.badge ? (
          <span className="absolute left-4 top-4 rounded-[8px] bg-white/95 px-2.5 py-1 text-[12px] font-medium text-ink">
            {car.badge}
          </span>
        ) : null}
      </div>
      <div className="px-5 pb-6 pt-5">
        <p className="text-[13px] text-muted">{getBrand(car.brand).name}</p>
        <h3 className="mt-1 text-[22px] font-medium tracking-tight">{car.model}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {car.features.map((f) => (
            <li key={f} className="rounded-[8px] bg-[#f4f4f4] px-2.5 py-1 text-[12px] text-muted">
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-end justify-between gap-4">
          {car.price ? (
            <div>
              <p className="text-[12px] text-muted">
                {car.price.gross ? "Akciós bruttó vételár" : "Ár"}
              </p>
              <p className="text-[17px] font-medium">{car.price.final}</p>
            </div>
          ) : (
            <p className="text-[13px] text-muted">
              {car.grant ? "3,6 millió Ft állami támogatással" : "Érdeklődjön"}
            </p>
          )}
          <span className="text-[13px] font-medium text-brand">Részletek ›</span>
        </div>
      </div>
    </Link>
  );
}
