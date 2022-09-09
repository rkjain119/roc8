import { UserState } from '../../context/users'
function FaqItems() {
  let faqs
  UserState()
    ? (faqs = [
        {
          question:
            'What if your profile picture isn`t reflecting on the portal',
          answer:
            'No worries, your quality of projects matters more than anything.',
        },
        {
          question: 'When to submit your projects?',
          answer:
            "You can submit your projects as soon as you finish them. Just Sign In to the portal, and press 'Add New', submit the form, and voila! Mind the deadlines though..",
        },
        {
          question:
            'What happens if you edit your projects after the deadline?',
          answer:
            'It would be marked as a late submission, and you would slip down on the priority list.',
        },
        {
          question: 'How your projects are evaluated?',
          answer: 'Wear your documentation reader hat, and have a look at this',
        },
        // More questions...
      ])
    : (faqs = [
        {
          question: 'Why should a company hire from roc8?',
          answer:
            'Resumes are inadequate to provide an assessment of skills required on the job. When you partner with roc8, we show you a portfolio of projects which helps you judge a candidate better than any DS / Algo questions.',
        },
        {
          question:
            'What if your first screening round relies on DS / Algo questions as a company?',
          answer:
            'We strongly suggest you to remove that in favor of proof of work, which also shows a high-level overview of the candidate’s communication skills. When you hire from us, you can and should skip that round.',
        },
        {
          question: 'Does it cost anything for a company to hire from us?',
          answer:
            "Yes, we charge you a month's salary (+ taxes) for every hire. We don't charge you anything for the first hire.",
        },
        {
          question: 'Have any other questions?',
          answer: 'Drop a mail to team@roc8.careers',
        },
      ])
  return faqs
}

export default FaqItems
