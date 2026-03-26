import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Для каких мероприятий подходят ваши шоу?",
    answer:
      "Наши форматы работают на корпоративах, городских праздниках, телевизионных эфирах, свадьбах и фестивалях. Мы адаптируем шоу под любой масштаб — от 20 человек до нескольких тысяч зрителей.",
  },
  {
    question: "Сколько времени нужно на подготовку шоу?",
    answer:
      "Стандартный срок подготовки — от 2 недель. Для телевизионных форматов или сложных турниров — от 1 месяца. В экстренных случаях мы готовы запустить базовые форматы за 3–5 дней.",
  },
  {
    question: "Можно ли адаптировать шоу под тематику нашей компании?",
    answer:
      "Да, это одна из наших ключевых услуг. Мы встраиваем брендинг, корпоративные истории, продукты и ценности компании прямо в игровую механику. Получается уникальное шоу, которое невозможно повторить.",
  },
  {
    question: "Какое оборудование вы привозите?",
    answer:
      "Мы привозим всё необходимое: студийный реквизит, световое и звуковое оборудование, микрофоны, игровые панели, таймеры и экраны. Вам остаётся только предоставить площадку.",
  },
  {
    question: "Работаете ли вы в регионах?",
    answer:
      "Да! Мы работаем по всей России и странам СНГ. Наша команда выезжает на место или помогает организовать шоу в дистанционном формате с местными партнёрами.",
  },
  {
    question: "Как заказать шоу?",
    answer:
      "Просто напишите нам или позвоните — обсудим формат, аудиторию, дату и бюджет. После этого мы подготовим концепцию и коммерческое предложение в течение 1–2 дней.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
