import React, { useState, useEffect } from 'react';
import { Target, Download, ExternalLink, Link as LinkIcon, ChevronDown, ChevronUp, HelpCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm transition-all hover:border-slate-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-bold text-slate-800 pr-4 md:text-lg">{title}</span>
        {isOpen ? <ChevronUp className="text-slate-500 shrink-0 w-6 h-6" /> : <ChevronDown className="text-slate-500 shrink-0 w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="p-6 border-t border-slate-200 text-slate-700 md:text-lg leading-relaxed space-y-4">
          {children}
        </div>
      )}
    </div>
  );
};

const TargetedTraining: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-900 font-display flex items-center gap-4">
          <div className="p-3 bg-accent-50 rounded-2xl shrink-0">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-accent-500" />
          </div>
          Целевая подготовка
        </h2>
      </div>

      {/* Action Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <a 
          href="https://disk.yandex.com/i/LSW2yfAg5rBXgA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-accent-500 hover:shadow-md transition-all group text-center gap-4"
        >
          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-accent-50 transition-colors">
            <ExternalLink className="w-8 h-8 text-slate-600 group-hover:text-accent-600" />
          </div>
          <span className="font-bold text-slate-800 group-hover:text-primary-900 md:text-lg">Положение о целевой подготовки</span>
        </a>

        <Link 
          to="/abiturientam/predlozheniya-o-tselevoj-podgotovke"
          className="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-primary-500 hover:shadow-md transition-all group text-center gap-4"
        >
          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-primary-50 transition-colors">
            <LinkIcon className="w-8 h-8 text-slate-600 group-hover:text-primary-600" />
          </div>
          <span className="font-bold text-slate-800 group-hover:text-primary-900 md:text-lg">Предложения о целевой подготовке</span>
        </Link>

        <a 
          href="/Blank_celevoj_podgotovki_2023.docx" 
          download
          className="flex flex-col items-center justify-center p-8 bg-accent-500 border border-accent-600 rounded-3xl shadow-sm hover:bg-accent-600 transition-all group text-center gap-4"
        >
          <div className="p-4 bg-white/20 rounded-2xl">
            <Download className="w-8 h-8 text-white" />
          </div>
          <span className="font-bold text-white md:text-lg">Бланк о целевой подготовке (скачать)</span>
        </a>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-8 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-accent-500" />
          Часто задаваемые вопросы
        </h3>

        <AccordionItem title="Если я передумаю учиться и захочу отчислиться, нужно ли будет возвращать затраченные средства?">
          <p className="text-justify">
            К сожалению, так как за твоё обучение платит организация, то деньги придётся вернуть за тот срок, что ты отучился, даже если ты передумал учиться.
          </p>
        </AccordionItem>

        <AccordionItem title="Что такое целевое обучение?">
          <p className="text-justify">
            Целевой договор подразумевает обучение за счёт средств организаций, которые нуждаются в определённых специалистах.
          </p>
        </AccordionItem>

        <AccordionItem title="Что такое целевое направление?">
          <p className="text-justify">
            Целевое направление позволяет бесплатно получить профессионально-техническое, среднее специальное, высшее (бакалавриат и магистратура) и послевузовское образование (аспирантура, докторантура). Договор о целевой подготовке — документ, который подписывается тремя сторонами: абитуриентом, организацией-заказчиком и учреждением образования. Организации, которым нужны определённые специалисты, могут подавать заявки в местные или республиканские органы госуправления, в подчинении которых находятся учреждения образования, где готовят таких специалистов. Затем органы управления, куда поступают заявки на целевую подготовку, формируют цифры целевого набора с учётом планируемого приёма и сообщают эти сведения Министерству образования, организациям-заказчикам и учреждениям образования (где-то в мае). Подавать заявку на целевую подготовку кадров могут государственные и частные организации.
          </p>
        </AccordionItem>

        <AccordionItem title="Для кого предназначено целевое направление?">
          <p className="text-justify">
            Обзавестись целевым направлением с 2020 года может любой абитуриент. Однако целевые направления могут выдавать только те организации-заказчики, что располагаются в городах с численностью населения менее 20 тысяч человек, в деревнях, а также в населенных пунктах, находящихся на территории радиоактивного загрязнения. Но с 2022 учебного года делать запросы на целевое обучение смогут организации крупных городов, областных центров и даже Минска.
          </p>
        </AccordionItem>

        <AccordionItem title="Сколько отрабатывать по целевому направлению?">
          <p className="text-justify">
            Получившим высшее образование — не менее пяти лет, среднее специальное — не менее трёх лет, профессионально-техническое — не менее двух. В срок обязательной отработки по желанию выпускника может быть включён, к примеру, период прохождения военной службы по призыву или в резерве Вооруженных Сил Республики Беларусь, других войсках и воинских формированиях Беларуси, декретный отпуск (до достижения ребёнком возраста трёх лет). Учёба в магистратуре и аспирантуре на сокращение времени отработки не влияет.
          </p>
        </AccordionItem>

        <AccordionItem title="Чем отличается целевое от обычного бюджета?">
          <p className="text-justify">
            Практические ничем. Студент также получает стипендию, имеет право на место в общежитии и сдаёт все положенные экзамены. Только срок отработки после выпуска составляет не 2 года, а 5 лет. Ну и, конечно, конкурс при поступлении по целевому договору может быть не таким высоким, как на обычный бюджет.
          </p>
        </AccordionItem>

        <AccordionItem title="Есть ли какие-то требования, чтобы заключить целевой договор?">
          <p className="text-justify">
            Особых требований для заключения договора нет. Но абитуриент должен сдать все положенные ЦТ и экзамены, которые предполагает специальность, и набрать баллы не ниже пороговых.
          </p>
        </AccordionItem>

        <AccordionItem title="Где можно взять целевое направление?">
          <p className="text-justify">
            Можно обратиться в вуз и приёмная комиссия подскажет, в каких организациях есть заказ на подготовку кадров. Также ты можешь связаться напрямую с предприятием, где хочешь работать после выпуска. Если они нуждаются в специалистах, то заключат с тобой договор на целевое обучение.
          </p>
        </AccordionItem>

        <AccordionItem title="Кто может взять целевое направление?">
          <p className="text-justify">
            Обзавестись целевым направлением может любой абитуриент. Делать запросы на целевое обучение могут организации из любых населённых пунктов, как частные, так и государственные.
          </p>
        </AccordionItem>

        <AccordionItem title="Можно ли взять целевое в другом городе?">
          <p className="text-justify">
            Возможность взять целевое никак не ограничено местом проживания и прописки. Живя в Гродно можно взять целевое в организации из Витебска.
          </p>
        </AccordionItem>

        <AccordionItem title="На какие специальности можно взять целевое направление?">
          <p className="text-justify">
            Далеко не на все специальности выделяют целевые места. В основном это медицинские, педагогические, технические, сельскохозяйственные, таможенное дело.
          </p>
        </AccordionItem>

        <AccordionItem title="Когда брать целевое направление?">
          <p className="text-justify">
            Главное успеть до подачи документов в вуз. Напомним, что приёмная кампания начинается 18 июля. Самое горячее время для заключения целевого договора — май-июнь.
          </p>
        </AccordionItem>

        <AccordionItem title="Можно ли взять несколько целевых направлений?">
          <p className="text-justify">
            В теории можно, но воспользоваться ты можешь при поступлении только одним.
          </p>
        </AccordionItem>

        <AccordionItem title="Я 100% поступлю, если возьму целевое?">
          <p className="text-justify">
            Такой гарантии нет, так как среди целевиков также есть конкурс. Допустим, у нас есть 10 целевых мест, а желающих — 15. Получается, что возьмут только тех, у кого сумма баллов будет больше.
          </p>
        </AccordionItem>

        <AccordionItem title="Проще ли поступить, взяв целевое?">
          <p className="text-justify">
            Да, порой легче. Например, проходной балл в прошлом году на специальность «Стоматология» в БГМУ по общему конкурсу был 387, а по целевому от 332 до 364 в зависимости от области.
          </p>
        </AccordionItem>

        <AccordionItem title="Сколько мест в вузе выделяют на целевое?">
          <p className="text-justify">
            Зависит от специальности. Где-то может быть и одно вакантное место, а где-то 120, как на «Лечебном деле» в БГМУ. В общем на сельскохозяйственные специальности выделяют — до 70% от общих контрольных цифр приёма, на медицинские — до 80%, на иные — до 50%.
          </p>
        </AccordionItem>

        <AccordionItem title="Какой проходной балл на целевое обучение?">
          <p className="text-justify">
            Как правило он ниже, чем по общему конкурсу. Поэтому у абитуриентов, которые хотят иметь больше шансов поступить, так популярен этот вид обучения в вузе.
          </p>
        </AccordionItem>

        <AccordionItem title="Можно ли не подавать целевой договор в приёмную комиссию, если передумал?">
          <p className="text-justify">
            Пока ты не заключишь договор с вузом, целевое ещё не вступило в силу. Поэтому если ты передумал поступать на этих условиях, то ты имеешь на это право.
          </p>
        </AccordionItem>

        <AccordionItem title="Если я не пройду по целевому конкурсу, можно ли поступать на общих условиях?">
          <p className="text-justify">
            Да, ты можешь указать в заявлении при подаче документов, что хочешь участвовать и в обычном конкурсе на бюджет и платное, если не будешь проходить по целевому.
          </p>
        </AccordionItem>

        <AccordionItem title="Если я передумаю учиться и захочу отчислиться, нужно ли будет возвращать затраченные средства?">
          <p className="text-justify text-slate-500 italic">
            (Повтор вопроса) К сожалению, так как за твоё обучение платит организация, то деньги придётся вернуть за тот срок, что ты отучился, даже если ты передумал учиться.
          </p>
        </AccordionItem>

        <AccordionItem title="Сколько нужно отрабатывать по целевому направлению?">
          <p className="text-justify text-slate-500 italic">
            (Повтор вопроса) Получившим высшее образование — не менее пяти лет, среднее специальное — не менее трёх лет, профессионально-техническое — не менее двух. В срок обязательной отработки по желанию выпускника может быть включён, к примеру, период прохождения военной службы по призыву или в резерве Вооруженных Сил Республики Беларусь, других войсках и воинских формированиях Беларуси, декретный отпуск (до достижения ребёнком возраста трёх лет). Учёба в магистратуре и аспирантуре на сокращение времени отработки не влияет.
          </p>
        </AccordionItem>

        <AccordionItem title="Как отказаться от распределения по целевому обучению?">
          <div className="space-y-4">
            <p className="text-justify">
              Если ты отказываешься от распределения, то обязан выплатить стоимость обучения, а это круглая сумма. Но есть ряд случаев, когда целевой договор можно прервать:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-justify">
              <li>установление гражданину, не достигшему 18-летнего возраста, инвалидности;</li>
              <li>установление гражданину инвалидности I или II группы;</li>
              <li>установление одному из родителей или мужу (жене) гражданина инвалидности I или II группы или инвалидности ребенку гражданина;</li>
              <li>возникновение медицинских противопоказаний к работе по получаемой специальности (направлению специальности, специализации) и присваиваемой квалификации;</li>
              <li>ликвидация организации-заказчика;</li>
              <li>досрочное прекращение образовательных отношений по обстоятельствам, не зависящим от воли гражданина, учреждения образования.</li>
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Стоит ли брать целевое направление?">
          <p className="text-justify">
            Заключение такого договора подойдёт тем абитуриентам, которые планируют вернуться после учёбы в родные края или хотят заранее обеспечить себя рабочим местом. Если же для тебя главная цель — обучение на бюджете, лучше семь раз подумать, прежде чем решиться на заключение данного договора. Никто не знает, как повернётся жизнь через несколько лет, и спасательный круг может оказаться тяжкой обузой. Юридическая консультация не будет лишней при подписании столь серьёзного документа.
          </p>
        </AccordionItem>
      </div>

    </div>
  );
};

export default TargetedTraining;
