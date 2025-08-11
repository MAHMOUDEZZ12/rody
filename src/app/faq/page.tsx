
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'FAQ | Rody Wellness',
  description: 'Frequently Asked Questions about Rody Wellness at-home spa services in Dubai.',
};

const faqs = [
    {
        category: 'Booking & Scheduling',
        questions: [
            {
                question: 'How do I book an appointment?',
                answer: "You can book your appointment easily through our online booking system directly on our website. Simply select your desired service(s), choose a preferred date and time from our available slots, and provide your details to confirm. You can also contact us via WhatsApp for booking assistance.",
            },
            {
                question: 'How far in advance should I book?',
                answer: "We recommend booking at least 24-48 hours in advance to secure your preferred time and therapist. As it is currently the weekend, our popular evening and weekend slots tend to fill up quickly, so booking earlier is always better.",
            },
            {
                question: 'What are your hours of operation?',
                answer: "Our therapists are available for at-home services from 10:00 AM to 10:00 PM, seven days a week, including public holidays, to fit your busy schedule.",
            },
            {
                question: 'What areas in Dubai do you service?',
                answer: "We proudly serve all major residential areas within Dubai. If you are located in a more remote area, please contact us before booking to confirm service availability. A nominal travel fee may apply for certain locations outside our standard service zone.",
            },
        ],
    },
    {
        category: 'The At-Home Appointment',
        questions: [
            {
                question: "What do I need to prepare for my therapist's arrival?",
                answer: "Very little! Your therapist will bring everything needed for your treatment, including a professional massage table, clean linens, towels, premium oils, and all necessary equipment. All we ask is that you provide a quiet, clean, and safe space (approximately 2x3 meters) with access to a power outlet for certain treatments.",
            },
            {
                question: 'What should I wear for my massage or body treatment?',
                answer: "Your comfort and privacy are our top priority. For a massage or body scrub, you can undress to your level of comfort. You will be professionally draped with towels at all times, and only the area being worked on will be exposed. For nail or facial services, simply wear something comfortable.",
            },
            {
                question: 'Can I choose a male or female therapist?',
                answer: "Rody Wellness is a dedicated service for women, and all of our highly-trained and certified therapists are female to ensure your utmost comfort and privacy.",
            },
            {
                question: 'Is it safe to have an at-home spa service?',
                answer: "Absolutely. Your safety is paramount. All our therapists are vetted, certified professionals who adhere to the strictest standards of hygiene and professionalism. We use sanitized equipment for every appointment.",
            },
        ],
    },
    {
        category: 'Services & Treatments',
        questions: [
            {
                question: 'I am pregnant. Which services are safe for me?',
                answer: "We offer a wonderful Pre-Post-Natal Massage specifically designed for expectant and new mothers (after the first trimester). Many of our facials and nail services are also safe. Please inform us that you are pregnant when booking so we can tailor the treatment accordingly and use pregnancy-safe products. We recommend consulting your doctor before booking any new treatment."
            },
            {
                question: "I've never had a facial/massage before. Which one do you recommend?",
                answer: "For a first-time massage, our Relaxation Massage is a perfect introduction. For a first facial, the Deep Hydrating Facial is a great choice for all skin types. Our therapists will also conduct a brief consultation before your treatment begins to help recommend the perfect service for your needs."
            },
            {
                question: 'What is the difference between Gel Overlay and Polygel Extensions?',
                answer: "A Gel Overlay is a layer of strengthening gel applied directly onto your natural nails to add strength and durability without adding any length. Polygel Extensions are used to sculpt and add length to your natural nails, combining the flexibility of gel with the strength of acrylic.",
            },
            {
                question: 'How long will my lash extensions last?',
                answer: "With proper care, your eyelash extensions can last for 3-4 weeks. To maintain their fullness, we recommend booking a refill appointment every 2-3 weeks.",
            }
        ],
    },
    {
        category: 'Payment & Policies',
        questions: [
            {
                question: 'What payment methods do you accept?',
                answer: "We accept several convenient payment methods to suit your needs. You can pay securely online with a credit/debit card at the time of booking. Alternatively, we offer cash on delivery or payment via a credit card machine on delivery. Please let your therapist know your preferred method.",
            },
            {
                question: 'What is your cancellation policy?',
                answer: "We understand that plans can change. We kindly request a minimum of 24 hours' notice for any cancellations or rescheduling. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee.",
            },
            {
                question: 'Is tipping expected?',
                answer: "Tipping is not required but is greatly appreciated by our therapists for service that exceeds your expectations. It can be given directly to your therapist in cash or added during online payment if the feature is available.",
            },
        ],
    },
];

export default function FAQPage() {
  return (
    <div className="container max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          At Rody Wellness, we want your at-home spa experience to be seamless, serene, and simple from start to finish. Here are answers to some of our most frequently asked questions.
        </p>
      </header>

      <main className="space-y-12">
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
                {faqs.map((category) => (
                <section key={category.category} className="mb-8 last:mb-0">
                    <h2 className="font-headline text-3xl text-primary mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </section>
                ))}
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
