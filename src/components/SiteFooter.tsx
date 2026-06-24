import { Link } from "react-router-dom"
import { METHODS } from "@/data/methods"

export function SiteFooter() {
  return (
    <footer className="bg-secondary border-t border-border py-12 mt-16">
      <div className="container px-6 mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-extrabold text-primary">Растишка</span>
          </Link>
          <p className="text-secondary-foreground/80 text-sm">
            Образовательный проект о современных педагогических методиках для воспитателей детских садов и учителей начальных классов.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
          {METHODS.map((m) => (
            <Link
              key={m.slug}
              to={`/method/${m.slug}`}
              className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
            >
              {m.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="container px-6 mx-auto mt-8 pt-6 border-t border-border/60 text-center text-sm text-secondary-foreground/60">
        © 2026 «Растишка». Учебный образовательный проект.
      </div>
    </footer>
  )
}

export default SiteFooter
