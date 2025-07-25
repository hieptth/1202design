import Image from "next/image";
import { NavbarItemProps } from "./types";
import { clsx } from "clsx";

function NavbarItem(props: NavbarItemProps) {
  const {
    item: { label, href, subItems },
    active,
    onActive,
  } = props;

  return (
    <li key={label} className="relative group">
      <a
        className={clsx("transition p-3 flex items-center gap-2", {
          "border-gray-400 pb-[5px] border-b-5": active === label,
          "border-transparent": active !== label,
        })}
        href={href}
        onClick={() => onActive(label)}
      >
        <p
          className={clsx(
            "text-display-xs font-medium",
            "hover:text-neutral-950",
            {
              "text-neutral-950": active === label,
              "text-gray-500": active !== label,
            }
          )}
        >
          {label}
        </p>
        {subItems && (
          <Image
            src="/assets/caret-down.svg"
            alt="caret down icon"
            width={16}
            height={16}
            className="inline-block align-middle transition-transform duration-200 group-hover:rotate-180"
          />
        )}
      </a>

      {/* Popup for subItems */}
      {subItems && (
        <ul className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full flex-col min-w-[180px] bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100 animate__animated animate__fadeInUp animate__faster opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hidden group-hover:flex">
          {subItems.map((sub) => (
            <li key={sub.label}>
              <a
                href={sub.href || "#"}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition text-sm whitespace-nowrap"
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavbarItem;
