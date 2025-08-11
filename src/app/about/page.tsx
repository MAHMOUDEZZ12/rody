
import { AboutClient } from '@/components/page/about-client';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'About Us | Rody Wellness',
  description: 'Learn the story and philosophy behind Rody Wellness, Dubai\'s premier at-home luxury spa service.',
};

export default function AboutUsPage() {
  return (
    <div className="container max-w-5xl px-4 py-12">
        <Card className="bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
                 <AboutClient />
            </CardContent>
        </Card>
    </div>
  );
}
