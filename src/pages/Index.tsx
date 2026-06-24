import { Link } from "react-router-dom"
import { useEffect } from "react"
import { METHODS } from "@/data/methods"
import { SiteNavbar } from "@/components/SiteNavbar"
import { SiteFooter } from "@/components/SiteFooter"
import { QuizButton } from "@/components/QuizButton"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const INTRO_PARAGRAPHS = [
  "Современная педагогика предлагает воспитателям и учителям множество эффективных методик, которые помогают сделать обучение детей увлекательным, осмысленным и результативным. На этом сайте собраны самые востребованные подходы к работе с детьми дошкольного и младшего школьного возраста. Каждая методика описана понятным языком и сопровождается практическими рекомендациями.",
  "Раннее детство — это период, когда закладывается фундамент всей будущей личности. То, как мы учим ребёнка в эти годы, определяет его отношение к познанию на всю жизнь. Поэтому так важно выбирать методы, которые уважают природу ребёнка, развивают его самостоятельность и сохраняют главное — искреннюю радость от открытий.",
  "Наш проект создан в помощь начинающим и опытным педагогам, а также студентам педагогических колледжей и вузов. Здесь вы найдёте описание девяти ключевых методик: от классической системы Монтессори до современного STEM-образования. Материалы помогут лучше понять каждый подход и применять его на практике осознанно.",
  "Каждая методика раскрыта в отдельном разделе с подробным описанием принципов, целей и конкретных приёмов работы. Вы узнаете, в чём сильные стороны каждого подхода, как он влияет на развитие ребёнка и какие задачи помогает решить. Информация структурирована так, чтобы её было удобно изучать и применять в реальной работе.",
  "Мы убеждены, что не существует одного универсального метода, подходящего всем детям и любым ситуациям. Настоящее мастерство педагога заключается в умении сочетать разные подходы, чувствовать потребности конкретного ребёнка и гибко выстраивать обучение. Знание разных методик расширяет профессиональный арсенал и делает работу более творческой.",
  "Чтобы изучение материала было не только полезным, но и интересным, в конце каждого раздела размещён интерактивный тест. Он поможет проверить, насколько хорошо вы усвоили прочитанное, и закрепить ключевые понятия. Обучение через самопроверку — один из самых эффективных способов запоминания новой информации.",
  "Выберите интересующую вас методику в галерее ниже, наведите курсор на изображение, чтобы увидеть подсказку, и переходите к подробному изучению. Желаем вам вдохновения, профессионального роста и радости от работы с детьми. Пусть знания, собранные на этом сайте, станут надёжным помощником в вашем благородном труде.",
]

const Index = () => {
  useEffect(() => {
    document.title = "Растишка — методики для детского сада и начальной школы"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-texture">
      <SiteNavbar />

      <section className="bg-texture-accent border-b border-border">
        <div className="container px-6 mx-auto py-16 lg:py-24 text-center flex flex-col items-center gap-6">
          <span className="text-6xl">🌱📚</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground max-w-3xl">
            Педагогические методики для <span className="text-primary">детского сада</span> и начальной школы
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Образовательный проект «Растишка» — копилка современных подходов к обучению и воспитанию детей. Изучайте, применяйте и проверяйте себя!
          </p>
          <a href="#methods">
            <Button size="lg" className="text-base px-8">
              Выбрать методику
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <section className="container px-6 mx-auto py-12 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">О проекте</h2>
        <div className="flex flex-col gap-5">
          {INTRO_PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-base lg:text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="methods" className="container px-6 mx-auto py-12">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Галерея методик</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Наведите курсор на карточку, чтобы увидеть подсказку, и нажмите для перехода к разделу.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {METHODS.map((m) => (
            <Link
              key={m.slug}
              to={`/method/${m.slug}`}
              title={`Перейти к разделу «${m.title}»`}
              className="group bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  title={m.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-secondary-foreground">
                    <Icon name={m.icon} size={20} />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{m.short}</p>
                <span className="inline-flex items-center text-primary font-semibold text-sm mt-4">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container px-6 mx-auto pb-12 max-w-3xl">
        <QuizButton />
      </section>

      <SiteFooter />
    </div>
  )
}

export default Index
