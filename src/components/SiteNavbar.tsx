import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useState } from "react"
import { METHODS } from "@/data/methods"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur border-b border-border py-3">
      <div className="container px-6 mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌱</span>
          <span className="text-xl font-extrabold text-primary">Растишка</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <Link to="/">
            <Button variant="ghost" size="sm">Главная</Button>
          </Link>
          {METHODS.slice(0, 5).map((m) => (
            <Link key={m.slug} to={`/method/${m.slug}`}>
              <Button variant="ghost" size="sm">{m.title.replace("Методика ", "")}</Button>
            </Link>
          ))}
          <Link to="/about">
            <Button variant="ghost" size="sm">О сайте</Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Меню"
        >
          <Icon name={open ? "X" : "Menu"} />
        </Button>
      </div>

      {open && (
        <div className="lg:hidden container px-6 mx-auto mt-3 flex flex-col gap-1 pb-2">
          <Link to="/" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">Главная</Button>
          </Link>
          {METHODS.map((m) => (
            <Link key={m.slug} to={`/method/${m.slug}`} onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">{m.title}</Button>
            </Link>
          ))}
          <Link to="/about" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">О сайте</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default SiteNavbar
