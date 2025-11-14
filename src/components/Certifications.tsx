import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

// Import certificate images
import deepLearningBadge from '@/assets/certificates/deep-learning-essentials.png';
import graphicDesign from '@/assets/certificates/graphic-design.png';
import promptEngineering from '@/assets/certificates/prompt-engineering.png';
import googleSentiment from '@/assets/certificates/google-sentiment-badge.png';
import ibmDeepLearning from '@/assets/certificates/ibm-deep-learning-badge.png';
import salesforceAI from '@/assets/certificates/salesforce-ai-badge.png';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'ai-ml' | 'design' | 'cloud';
  image: string;
  verifyUrl?: string;
  credentialId?: string;
  skills?: string[];
}

const certificates: Certificate[] = [
  {
    id: 'google-sentiment',
    title: 'Analyze Sentiment with Natural Language API',
    issuer: 'Google Cloud',
    date: 'April 2025',
    category: 'cloud',
    image: googleSentiment,
    verifyUrl: 'https://www.credly.com/go/iq5xqdPE',
    skills: ['Machine Learning', 'Natural Language API', 'Sentiment Analysis']
  },
  {
    id: 'salesforce-ai',
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    date: 'February 2025',
    category: 'ai-ml',
    image: salesforceAI,
    verifyUrl: 'https://sforce.co/verifycerts',
    credentialId: '5736463',
    skills: ['Artificial Intelligence', 'Salesforce', 'AI Implementation']
  },
  {
    id: 'ibm-deep-learning',
    title: 'Deep Learning Essentials',
    issuer: 'IBM Skills Network',
    date: 'March 2025',
    category: 'ai-ml',
    image: deepLearningBadge,
    verifyUrl: 'https://www.credly.com/badges/25c50d56-2c56-48ef-8c0e-0e689531f874',
    skills: ['Deep Learning', 'Neural Networks', 'IBM Watson']
  },
  {
    id: 'linkedin-genai',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    date: 'March 2025',
    category: 'ai-ml',
    image: ibmDeepLearning,
    skills: ['Generative AI', 'AI Tools', 'Artificial Intelligence']
  },
  {
    id: 'ibm-prompt-engineering',
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM Cognitive Class',
    date: 'March 2025',
    category: 'ai-ml',
    image: ibmDeepLearning,
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/4bccba4b267f41be8d22c6feee02dc67',
    skills: ['Prompt Engineering', 'AI Communication', 'LLMs']
  },
  {
    id: 'alison-prompt',
    title: 'Prompt Engineering for AI Applications',
    issuer: 'Alison',
    date: '2025',
    category: 'ai-ml',
    image: promptEngineering,
    skills: ['Prompt Engineering', 'AI Applications', 'CPD Certified']
  },
  {
    id: 'alison-graphic',
    title: 'Graphic Design',
    issuer: 'Alison',
    date: '2025',
    category: 'design',
    image: graphicDesign,
    skills: ['Graphic Design', 'Visual Design', 'CPD Certified']
  }
];

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and skill badges demonstrating expertise in AI, Machine Learning, Cloud Technologies, and Design
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai-ml">AI/ML</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates.map((cert, index) => (
                  <Card 
                    key={cert.id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <span className="font-semibold text-foreground/80">{cert.issuer}</span>
                        <span className="text-muted-foreground">• {cert.date}</span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {cert.skills && (
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline group/link"
                        >
                          Verify Certificate
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCertificates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No certifications found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All certifications can be verified through their respective issuing organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
