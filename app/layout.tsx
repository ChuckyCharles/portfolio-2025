import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import CursorSpotlight from "@/components/cursor-spotlight"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Base URL for your site - use relative URLs for local development
const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = isProduction 
  ? 'https://charles-ochieng.com' 
  : ''; // Use relative URLs in development

  export const metadata: Metadata = {
    title: {
      default: "Charles Ochieng | Cloud Infrastructure & DevOps Engineer",
      template: "%s | Charles Ochieng"
    },
    description: "Explore the expertise of Charles Ochieng, a seasoned Cloud Infrastructure and DevOps Engineer specializing in scalable cloud solutions, automation, CI/CD pipelines, and infrastructure as code. Building resilient, secure, and cost-effective cloud architectures.",
    
    keywords: [
      "Charles Ochieng",
      "Cloud Infrastructure Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "AWS Engineer",
      "Azure Engineer",
      "Google Cloud Platform",
      "Kubernetes Engineer",
      "Docker Specialist",
      "Terraform Expert",
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Cloud Automation",
      "Site Reliability Engineer",
      "Cloud Security",
      "Microservices Architecture",
      "Container Orchestration",
      "Cloud Migration",
      "DevOps Automation",
      "Infrastructure Monitoring",
      "Cloud Cost Optimization",
      "Scalable Cloud Solutions",
      "Jenkins",
      "GitLab CI",
      "Ansible",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Kenya DevOps Engineer",
      "East Africa Cloud Engineer"
    ],
    
    authors: [{ name: "Charles Ochieng", url: baseUrl }],
    creator: "Charles Ochieng",
    publisher: "Charles Ochieng",
    generator: 'Next.js',
    applicationName: "Charles Ochieng - Cloud Infrastructure & DevOps Engineer",
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: baseUrl ? new URL(baseUrl) : new URL('http://localhost:3000'),
    alternates: {
      canonical: baseUrl,
    },
    
    // OpenGraph metadata
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title: "Charles Ochieng | Cloud Infrastructure & DevOps Engineer",
      description: "Discover Charles Ochieng, an expert Cloud Infrastructure and DevOps Engineer crafting scalable cloud solutions with AWS, Azure, Kubernetes, and modern DevOps practices.",
      siteName: "Charles Ochieng - Cloud Infrastructure & DevOps Engineer",
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: "Charles Ochieng - Professional Cloud Infrastructure & DevOps Engineer",  
          type: 'image/jpeg',
        },
        {
          url: '/og-image-square.jpg',
          width: 1200,
          height: 1200,
          alt: "Charles Ochieng - Cloud & DevOps Engineer",
          type: 'image/jpeg',
        }
      ],
    },
  
    // Twitter metadata
    twitter: {
      card: 'summary_large_image',
      title: "Charles Ochieng | Cloud Infrastructure & DevOps Engineer",
      description: "Professional Cloud Infrastructure and DevOps Engineer specializing in scalable cloud architectures, automation, and modern DevOps practices.",
      creator: '@charles_ochieng',
      site: '@charles_ochieng',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: "Charles Ochieng - Cloud Infrastructure & DevOps Engineer",
        }
      ],
    },
  };
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Comprehensive Favicon Configuration */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Charles Ochieng",
              "jobTitle": "Cloud Infrastructure & DevOps Engineer",
              "description": "Expert Cloud Infrastructure and DevOps Engineer specializing in scalable cloud solutions and automation",
              "url": baseUrl,
              "sameAs": [
                process.env.NEXT_PUBLIC_GITHUB_URL,
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                process.env.NEXT_PUBLIC_TWITTER_URL,
              ].filter(Boolean),
              "email": process.env.NEXT_PUBLIC_EMAIL,
              "knowsAbout": [
                "Cloud Infrastructure",
                "DevOps Engineering",
                "AWS",
                "Azure", 
                "Kubernetes",
                "Docker",
                "Terraform",
                "CI/CD Pipelines",
                "Infrastructure as Code",
                "Cloud Security",
                "Monitoring & Observability"
              ],
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}