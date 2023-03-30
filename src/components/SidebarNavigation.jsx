/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", icon: HomeIcon, current: true },
  { name: "Room1", icon: UsersIcon, current: false },
  { name: "Room2", icon: UsersIcon, current: false },
  { name: "Room3", icon: UsersIcon, current: false },
  { name: "Room4", icon: UsersIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarNavigation() {
  return (
    <div
      className="flex fixed flex-1 flex-col bg-gray-800"
      style={{ width: "15vw", height: "88vh" }}
    >
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav
          className="mt-5 flex-1 space-y-1 bg-gray-800 px-2"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <div
              key={item.name}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white text-2xl cursor-pointer"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white text-2xl cursor-pointer",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-2xl cursor-pointer"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
