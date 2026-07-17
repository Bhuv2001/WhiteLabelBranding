import { Outlet, NavLink } from "react-router-dom";
import { FaTachometerAlt, FaSignInAlt } from "react-icons/fa";

export default function AdminLayout() {
  const navStyle = ({ isActive }) =>
    `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              White Label Branding
            </h1>

            <p className="text-sm text-slate-500">
              Customize your authentication portal
            </p>
          </div>

          <nav className="flex items-center gap-3">

            <NavLink to="/admin" className={navStyle}>
              <FaTachometerAlt />
              Admin
            </NavLink>

            <NavLink to="/" className={navStyle}>
              <FaSignInAlt />
              Login
            </NavLink>

          </nav>

        </div>

      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 py-10">
        <Outlet />
      </main>

    </div>
  );
}