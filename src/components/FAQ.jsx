const faqs = [
  { q: 'How do I register for courses?', a: 'You can register via ERP using your credentials.' },
  { q: 'What are the options for eating on campus?', a: 'Halls have messes, plus food outlets like CCD, Tech Market, etc.' },
  { q: 'Where can I find academic support?', a: 'Department seniors, TAs, and faculty advisors are there to help.' },
  { q: 'How do I join a club?', a: 'Attend inductions held at the beginning of the semester.' },
  { q: 'How do I access healthcare?', a: 'Visit the B.C. Roy hospital on campus.' },
  { q: 'Are there banking services?', a: 'Yes, SBI and PNB have branches and ATMs inside the campus.' },
];

const FAQ = () => {
  return (
     <section id="faq" className="py-16 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <details key={i} className="mb-4 bg-white p-4 rounded shadow cursor-pointer">
            <summary className="font-semibold">{faq.q}</summary>
            <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
