
import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Briefcase, 
  TrendingDown, 
  Users, 
  Globe, 
  FileCheck, 
  Settings 
} from 'lucide-react';
import { Experience, Skill, Education, Certification } from './types';

export const PROFESSIONAL_SUMMARY = "Dynamic and results-oriented Senior Professional with over 24 years of extensive experience in Procurement, Project Management, and Operational Excellence. Proven track record in leading multi-million dollar projects, securing significant government incentives, and delivering substantial cost savings through strategic negotiation and vendor optimization. Expert in end-to-end supply chain management, compliance (BIS, BEE), and cross-border operations across India, Singapore, UK, Bangladesh, and Nepal. Adept at steering high-scale manufacturing setups and driving business growth through data-driven decision-making and strong leadership.";

export const EXPERIENCES: Experience[] = [
  {
    company: "Veira Electronics Pvt Ltd",
    role: "Project Manager",
    period: "06/2022 – 10/2025",
    duration: "3y 5m",
    location: "Noida, India",
    description: [
      "Led end-to-end project planning, execution, and delivery ensuring timelines and budget compliance.",
      "Coordinated cross-functional teams, vendors, and third-party partners.",
      "Oversaw procurement, contracts, and asset management including SAP PO processing.",
      "Managed royalty reporting and payments with global partners like Dolby and Microsoft.",
      "Coordinated technology, regulatory, and compliance certifications (BIS, BEE)."
    ],
    achievements: [
      "Successfully set up LED TV production line and SMT & MI lines.",
      "Secured Govt. Scheme Benefits (UP-MSME, PLI Whitegoods).",
      "Achieved UP Electronics Policy incentive of Rs. 2.27 cr."
    ]
  },
  {
    company: "Hitachi India Pvt Ltd",
    role: "Asst. Manager (Home Electronics Div.)",
    period: "11/2010 – 09/2021",
    duration: "10y 11m",
    location: "New Delhi, India",
    description: [
      "Appointment and management of new/existing dealers.",
      "Handled advertising, marketing, and sales promotion in end markets.",
      "Managed Govt. Business through GeM Portal with 150+ dealers.",
      "Maintained stock availability and order planning execution."
    ],
    achievements: [
      "Secured single orders of 94 units (Rs. 94 lacs) and 50 units (Rs. 25 lacs) for Hitachi Projectors.",
      "Attained business of INR 5.5 Cr in 2019-20 via GeM portal."
    ]
  },
  {
    company: "Cambridge University Press(I) Pvt Ltd",
    role: "Sales and Service Engineer cum Executive",
    period: "06/2006 – 10/2010",
    duration: "4y 5m",
    location: "Navi Mumbai, India",
    description: [
      "Marketing of e-educational resources (Online Journals, e-books).",
      "Installation and training for Hi-tech Teaching Technology (Interactive Whiteboards).",
      "System and Network management/administration."
    ]
  },
  {
    company: "MGM Junior College",
    role: "Hardware and Networking Engineer cum Faculty",
    period: "04/2005 – 05/2006",
    duration: "1y 1m",
    location: "Navi Mumbai, India",
    description: [
      "Teaching Networking Technology.",
      "Maintenance of IT Equipments."
    ]
  },
  {
    company: "Orange Lake School",
    role: "Computer Science Teacher",
    period: "11/2002 – 12/2004",
    duration: "2y 1m",
    location: "Darjeeling, India",
    description: [
      "Teaching Computer Science curricula to students."
    ]
  },
  {
    company: "Asia Heart Foundation (RTIICS)",
    role: "Cardiovascular Technician",
    period: "03/2001 – 07/2002",
    duration: "1y 4m",
    location: "Kolkata, India",
    description: [
      "Operation of the Unit and patient data collection.",
      "Tele-cardiology unit management and high-tech medical equipment care."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Operations Management', category: 'Operations', proficiency: 95 },
  { name: 'Vendor & Dealer Management', category: 'Procurement', proficiency: 98 },
  { name: 'Contract Negotiation', category: 'Procurement', proficiency: 92 },
  { name: 'Supplier Relationship', category: 'Procurement', proficiency: 94 },
  { name: 'Cost Reduction Strategies', category: 'Strategy', proficiency: 90 },
  { name: 'Strategic Sourcing', category: 'Procurement', proficiency: 88 },
  { name: 'Compliance Management', category: 'Operations', proficiency: 85 },
  { name: 'Project Management', category: 'Strategy', proficiency: 95 },
  { name: 'Software Implementation (SAP)', category: 'Technical', proficiency: 82 },
  { name: 'Financial Acumen', category: 'Strategy', proficiency: 80 },
  { name: 'GeM Portal Administration', category: 'Technical', proficiency: 95 },
  { name: 'Network Administration', category: 'Technical', proficiency: 75 },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc (Bachelor of Science)",
    institution: "Darjeeling Govt College",
    period: "1996 - 1998",
    field: "Physics, Chemistry, Mathematics, English",
    location: "Darjeeling, India"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Post Graduate Diploma in Sales and Marketing Management",
    institution: "All India Institute of Management, Chennai",
    date: "06/2019"
  },
  {
    name: "Post Graduate Diploma in Computer Application",
    institution: "Technical Qualification",
    date: "2001"
  }
];

export const STAT_CARDS = [
  { label: 'Years Experience', value: '24+', icon: <Briefcase className="w-6 h-6 text-white" /> },
  { label: 'Dealers Managed', value: '150+', icon: <Users className="w-6 h-6 text-emerald-600" /> },
  { label: 'Countries Worked/Trained', value: '5+', icon: <Globe className="w-6 h-6 text-azure-600" /> },
  { label: 'Savings Driven', value: 'Rs. 2.27Cr+', icon: <TrendingDown className="w-6 h-6 text-rose-600" /> },
];

export const COUNTRIES = [
  { name: 'Nepal', years: '1998, 2010' },
  { name: 'Bangladesh', years: '1998' },
  { name: 'United Kingdom', years: '2007' },
  { name: 'Singapore', years: '2009, 2010' },
  { name: 'India', years: 'Ongoing' }
];
