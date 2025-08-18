
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Policies',
  description: 'Review our service policies for booking, cancellations, health, safety, and payments for Rody Wellness at-home spa services in Dubai.',
};

export default function PolicyPage() {
  const policies = [
    {
      title: "Booking & Confirmation",
      content: "All appointments are booked based on therapist availability. Your booking is considered confirmed only upon receiving a confirmation message or email from Rody Wellness. Please ensure that the contact information you provide is accurate."
    },
    {
      title: "Cancellation & Rescheduling Policy",
      content: "Your appointment time is reserved exclusively for you. We understand that plans can change, and we kindly request a minimum of 24 hours' notice for any cancellations or requests to reschedule. Cancellations with less than 24 hours' notice will be subject to a fee of 50% of the total booked service value. Cancellations with less than 4 hours' notice or a \"no-show\" (where the client is unavailable at the scheduled time) will be charged the full 100% of the service value. This policy is in place to honor the reserved time and income of our dedicated therapists, who are compensated for their time and travel for each confirmed appointment."
    },
    {
      title: "Client Late Arrival Policy",
      content: "Our therapists operate on a carefully managed schedule to respect the time of all our clients. We will wait up to 15 minutes after the scheduled appointment time for the client to be ready. If you are late or not ready for your appointment, your service duration may need to be shortened to avoid delaying the next client. The full service fee will still apply."
    },
    {
      title: "Therapist Arrival Window",
      content: "Dubai traffic can be unpredictable. Please allow for a 15-20 minute arrival window for your therapist. We will always notify you if we anticipate any significant delays."
    },
    {
      title: "Health & Safety",
      content: "Client Disclosure: For your safety and comfort, please inform us at the time of booking if you have any medical conditions, allergies, injuries, skin conditions, or if you are pregnant. This allows us to tailor your treatment for maximum safety and benefit. Hygiene Standards: Rody Wellness adheres to the strictest hygiene protocols. All equipment is thoroughly sanitized before and after every appointment. Our therapists use fresh, clean linens and towels for each client. Right to Refuse Service: We reserve the right to refuse service to any client with a condition that may be contagious or who is under the influence of alcohol or drugs."
    },
    {
      title: "Professional & Safe Environment",
      content: "Client Responsibility: We require a clean, safe, and reasonably quiet space for our therapists to set up their equipment. Please ensure any pets are secured and that there are no interruptions during the treatment to ensure you receive the best experience. Zero-Tolerance Policy: Rody Wellness is a strictly professional wellness service. Any inappropriate comments, sexual advances, or disrespectful behavior towards our therapists will result in the immediate termination of the service. The client will be charged the full service fee and will be prohibited from booking with us in the future. We are committed to protecting the safety and dignity of our staff."
    },
    {
      title: "Payment Policy",
      content: "Full payment is required upon completion of your service. We accept payment via a secure online link (credit/debit card) or cash, you also can pay by card on delivery."
    },
    {
      title: "Client Satisfaction",
      content: "Your satisfaction is our highest priority. If you are not fully satisfied with your service, please contact us within 24 hours of your appointment. While we do not offer refunds on services that have been rendered, we are committed to finding a fair solution. This may include a complimentary correction or a credit towards a future service, to be determined at the discretion of Rody Wellness management."
    },
    {
      title: "Privacy",
      content: "All personal information provided to Rody Wellness will be kept confidential and is protected. We will not share your information with any third parties."
    }
  ];

  return (
    <div className="container max-w-4xl px-4 py-12">
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center">
          Rody Wellness Service Policies
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          To ensure a seamless, professional, and luxurious experience for every client, we have established the following service policies. Your comfort, safety, and satisfaction are our highest priorities. We appreciate your understanding and cooperation in helping us maintain this exceptional standard of care.
        </p>
      </header>
      <main>
          <Card className="bg-card/50">
            <CardContent className="p-8 md:p-12 space-y-8">
                {policies.map((policy, index) => (
                <div key={index}>
                    <h2 className="font-headline text-2xl text-primary mb-3">
                    {index + 1}. {policy.title}
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                    {policy.content.split('. ').map((sentence, sIndex, arr) => (
                        sentence && <p key={sIndex}>{sentence}{arr.length -1 === sIndex ? '' : '.'}</p>
                    ))}
                    </div>
                </div>
                ))}
            </CardContent>
        </Card>
      </main>
      <footer className="mt-12 text-center text-muted-foreground">
        <p>Thank you for choosing Rody Wellness. These policies help us consistently deliver the exceptional, safe, and luxurious experience you deserve.</p>
      </footer>
    </div>
  );
}
