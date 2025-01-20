import React from 'react';
import { BarChart, PieChart, Wallet, TrendingUp } from 'lucide-react';

export const featuresData = [
  {
    icon: <BarChart className="w-10 h-10" />,
    title: "AI-Powered Analytics",
    description: "Get intelligent insights and predictions about your spending habits.",
  },
  {
    icon: <PieChart className="w-10 h-10" />,
    title: "Smart Categorization",
    description: "Our AI automatically categorizes your expenses for effortless tracking.",
  },
  {
    icon: <Wallet className="w-10 h-10" />,
    title: "Personalized Budgeting",
    description: "Receive AI-generated budget recommendations tailored to your financial goals.",
  },
  // Add more features as needed
];

export const howItWorksData = [
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts and credit cards to start tracking expenses.",
  },
  // Add more steps as needed
];

export const statsData = [
  { value: "1M+", label: "Active Users" },
  { value: "$10B+", label: "Expenses Tracked" },
  { value: "95%", label: "User Satisfaction" },
  { value: "50+", label: "AI Insights Daily" },
];

export const testimonialsData = [
  {
    name: "Jane Doe",
    role: "Small Business Owner",
    quote: "This AI expense tracker has revolutionized how I manage my business finances.",
    image: "/testimonial1.jpg",
  },
  // Add more testimonials as needed
];
