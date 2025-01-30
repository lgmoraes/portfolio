import { Container } from '@/components/layout/Container/Container';
import {
  StaticAccordion,
  StaticAccordionItem,
} from '@/components/ui/StaticAccordion/StaticAccordion';
import faqData from '@/data/faq.json';

export const FAQ = () => {
  return (
    <Container className="p-8 sm:p-12 lg:p-16">
      <section className="flex min-h-content flex-col gap-12 text-center font-title text-slate-50 sm:flex-row">
        <h2 className="sr-only">FAQ - Foire Aux Questions</h2>
        <div className="text-4xl">
          <div className="sm:hidden">
            <p>FAQ - Foire Aux Questions</p>
          </div>
          <div className="hidden border-r-8 pr-8 text-right sm:block">
            <p className="mb-8 text-6xl font-bold">FAQ</p>
            <p>Foire</p>
            <p>Aux</p>
            <p>Questions</p>
          </div>
        </div>

        <div className="sm:flex-grow">
          {
            <StaticAccordion>
              {faqData.map((item, index) => {
                return (
                  <StaticAccordionItem
                    key={index}
                    id={`accordion-item${index}`}
                    title={item.question}
                    isOpen
                  >
                    {item.answer}
                  </StaticAccordionItem>
                );
              })}
            </StaticAccordion>
          }
        </div>
      </section>
    </Container>
  );
};
