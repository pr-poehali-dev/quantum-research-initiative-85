import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { getMethod, METHODS } from "@/data/methods"
import { SiteNavbar } from "@/components/SiteNavbar"
import { SiteFooter } from "@/components/SiteFooter"
import { QuizButton } from "@/components/QuizButton"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import NotFound from "./NotFound"

const MethodPage = () => {
  const { slug } = useParams()
  const method = slug ? getMethod(slug) : undefined

  useEffect(() => {
    if (method) document.title = `${method.title} — Растишка`
    window.scrollTo(0, 0)
  }, [method])

  if (!method) return <NotFound />

  const index = METHODS.findIndex((m) => m.slug === method.slug)
  const next = METHODS[(index + 1) % METHODS.length]

  return (
    <div className="min-h-screen bg-texture">
      <SiteNavbar />

      <header className="bg-texture-accent border-b border-border">
        <div className="container px-6 mx-auto py-12 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              Все методики
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground">
                <Icon name={method.icon} size={28} />
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground">{method.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground">{method.intro}</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-lg">
            <img src={method.image} alt={method.title} className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </header>

      <article className="container px-6 mx-auto py-12 max-w-3xl">
        <div className="flex flex-col gap-6">
          {method.paragraphs.map((p, i) => (
            <p key={i} className="text-base lg:text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        <QuizButton href={method.quizUrl} />

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to="/">
            <Button variant="outline">
              <Icon name="Home" size={18} className="mr-2" />
              На главную
            </Button>
          </Link>
          <Link to={`/method/${next.slug}`}>
            <Button>
              Следующая методика: {next.title.replace("Методика ", "")}
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  )
}

export default MethodPage