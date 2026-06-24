import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface QuizButtonProps {
  href?: string
}

export function QuizButton({ href = "https://learningapps.org" }: QuizButtonProps) {
  return (
    <div className="mt-12 rounded-3xl bg-texture-accent border border-border p-8 text-center flex flex-col items-center gap-4">
      <span className="text-4xl">🎯</span>
      <h3 className="text-2xl font-bold text-secondary-foreground">Проверь свои знания!</h3>
      <p className="text-muted-foreground max-w-xl">
        Пройдите небольшой интерактивный тест по этой теме и закрепите изученный материал.
      </p>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="text-base px-8">
          <Icon name="CheckCircle2" className="mr-2" size={20} />
          Проверь себя
        </Button>
      </a>
    </div>
  )
}

export default QuizButton
