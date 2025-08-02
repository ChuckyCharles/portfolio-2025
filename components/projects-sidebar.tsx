"use client"

import type React from "react"

import {
  useState,
  useRef,
  useEffect,
} from "react"
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  Share2,
  Star,
  Calendar,
  Code,
  Globe,
  Zap,
  ArrowRight,
  Server,
  Bot,
  Layout,
  FileCode,
  Menu,
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  tagline: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  status: "Live" | "In Development" | "Creation"
  image: string
  githubUrl?: string
  liveUrl?: string
  challenges: string[]
  solutions: string[]
  features: string[]
  dateCompleted: string
  metrics?: string[]
  primaryTech: string
  primaryTechIcon: React.ReactNode
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kubernetes Multi-Cloud Orchestration Platform",
    tagline: "Advanced Kubernetes management across AWS, Azure, and GCP with automated deployments",
    description: "Advanced Kubernetes management across AWS, Azure, and GCP with automated deployments",
    longDescription:
      "A comprehensive multi-cloud Kubernetes orchestration platform that manages containerized applications across AWS EKS, Azure AKS, and Google GKE. Features automated deployments, cross-cluster networking, disaster recovery, and cost optimization with Terraform and Helm.",
    technologies: ["Kubernetes", "Terraform", "Helm", "AWS EKS", "Azure AKS", "GCP GKE"],
    category: "Infrastructure",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/k8s-platform.png",
    githubUrl: "https://github.com/charles-ochieng/k8s-multi-cloud",
    liveUrl: "https://k8s-dashboard.charles-ochieng.com",
    challenges: ["Multi-cloud networking", "Cross-cluster service discovery", "Cost optimization", "Disaster recovery automation"],
    solutions: ["Istio service mesh", "External DNS for service discovery", "Cluster autoscaling", "Automated backup strategies"],
    features: [
      "Multi-cloud Kubernetes management", 
      "Automated deployments with GitOps", 
      "Service mesh integration", 
      "Cost monitoring and optimization", 
      "Disaster recovery automation",
      "Centralized logging and monitoring"
    ],
    dateCompleted: "2024-03-15",
    metrics: ["99.9% uptime", "50+ microservices managed", "70% cost reduction"],
    primaryTech: "Kubernetes",
    primaryTechIcon: <Server />,
  },
  {
    id: 2,
    title: "Infrastructure as Code CI/CD Pipeline",
    tagline: "Terraform-based infrastructure automation with Jenkins and GitOps workflows",
    description: "Terraform-based infrastructure automation with Jenkins and GitOps workflows",
    longDescription:
      "A comprehensive Infrastructure as Code solution using Terraform for provisioning AWS resources, with Jenkins pipelines for automated testing, validation, and deployment. Implements GitOps workflows with automated rollbacks and environment promotion.",
    technologies: ["Terraform", "Jenkins", "AWS", "GitLab CI", "Ansible", "Python"],
    category: "DevOps",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/iac-pipeline.png",
    githubUrl: "https://github.com/charles-ochieng/terraform-cicd",
    challenges: ["State management", "Environment consistency", "Automated testing", "Rollback mechanisms"],
    solutions: ["Remote state with S3 and DynamoDB", "Terraform modules", "Terratest for testing", "Blue-green deployments"],
    features: [
      "Terraform infrastructure provisioning", 
      "Automated testing and validation", 
      "GitOps deployment workflows", 
      "Environment promotion pipelines", 
      "State management and locking",
      "Automated rollback capabilities"
    ],
    dateCompleted: "2024-02-20",
    metrics: ["10x faster deployments", "Zero manual interventions", "100% infrastructure versioned"],
    primaryTech: "Terraform",
    primaryTechIcon: <Code />,
  },
  {
    id: 3,
    title: "Prometheus & Grafana Monitoring Stack",
    tagline: "Comprehensive monitoring and alerting solution for cloud-native applications",
    description: "Comprehensive monitoring and alerting solution for cloud-native applications",
    longDescription:
      "A production-ready monitoring and observability stack using Prometheus for metrics collection, Grafana for visualization, and AlertManager for intelligent alerting. Includes custom dashboards, SLA monitoring, and integration with PagerDuty for incident management.",
    technologies: ["Prometheus", "Grafana", "AlertManager", "PagerDuty", "Docker", "Kubernetes"],
    category: "Monitoring",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/monitoring-stack.png",
    githubUrl: "https://github.com/charles-ochieng/prometheus-monitoring",
    liveUrl: "https://monitoring.charles-ochieng.com",
    challenges: ["Metric cardinality", "Alert noise reduction", "Dashboard standardization", "Multi-cluster monitoring"],
    solutions: ["Recording rules for aggregation", "Intelligent alert routing", "Template dashboards", "Prometheus federation"],
    features: ["Real-time metrics collection", "Custom Grafana dashboards", "Intelligent alerting", "SLA monitoring", "Multi-cluster visibility"],
    dateCompleted: "2024-01-15",
    metrics: ["500+ metrics tracked", "99.5% alert accuracy", "< 30s incident detection"],
    primaryTech: "Prometheus",
    primaryTechIcon: <Globe />,
  },
  {
    id: 4,
    title: "Docker Registry & Security Scanning",
    tagline: "Private Docker registry with automated vulnerability scanning and compliance",
    description: "Private Docker registry with automated vulnerability scanning and compliance",
    longDescription:
      "A secure private Docker registry with automated vulnerability scanning using Trivy, policy enforcement with OPA, and compliance reporting. Includes image signing, RBAC, and integration with CI/CD pipelines for secure container deployments.",
    technologies: ["Docker", "Harbor", "Trivy", "OPA", "Kubernetes", "Helm"],
    category: "Security",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/docker-registry.png",
    githubUrl: "https://github.com/charles-ochieng/secure-docker-registry",
    challenges: ["Vulnerability management", "Policy enforcement", "Image signing", "Access control"],
    solutions: ["Automated Trivy scanning", "OPA policy as code", "Notary for image signing", "RBAC implementation"],
    features: ["Private Docker registry", "Automated vulnerability scanning", "Policy enforcement", "Image signing and verification", "Compliance reporting"],
    dateCompleted: "2023-12-10",
    metrics: ["100% images scanned", "Zero critical vulnerabilities in production", "50+ policies enforced"],
    primaryTech: "Docker",
    primaryTechIcon: <Server />,
  },
  {
    id: 6,
    title: "AWS Cost Optimization Dashboard",
    tagline: "Real-time AWS cost monitoring and optimization recommendations with automation",
    description: "Real-time AWS cost monitoring and optimization recommendations with automation",
    longDescription:
      "A comprehensive AWS cost optimization platform that monitors spending in real-time, provides recommendations for cost savings, and automates resource optimization. Includes budget alerts, rightsizing recommendations, and reserved instance management.",
    technologies: ["AWS", "Python", "Lambda", "CloudWatch", "S3", "DynamoDB"],
    category: "FinOps",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/cost-optimization.png",
    githubUrl: "https://github.com/charles-ochieng/aws-cost-optimizer",
    liveUrl: "https://cost-dashboard.charles-ochieng.com",
    challenges: ["Complex billing data", "Automated recommendations", "Resource rightsizing", "Multi-account management"],
    solutions: ["AWS Cost Explorer API", "Machine learning for predictions", "Lambda automation", "Cross-account roles"],
    features: ["Real-time cost monitoring", "Optimization recommendations", "Automated resource scaling", "Budget alerts", "Reserved instance management"],
    dateCompleted: "2023-11-20",
    metrics: ["70% cost reduction achieved", "$50K+ monthly savings", "95% recommendation accuracy"],
    primaryTech: "AWS",
    primaryTechIcon: <Zap />,
  },
  {
    id: 7,
    title: "ELK Stack Log Management Platform",
    tagline: "Centralized logging solution with Elasticsearch, Logstash, and Kibana",
    description: "Centralized logging solution with Elasticsearch, Logstash, and Kibana",
    longDescription:
      "A production-grade centralized logging platform using the ELK stack for collecting, processing, and analyzing logs from distributed systems. Features log parsing, alerting, retention policies, and security audit trails.",
    technologies: ["Elasticsearch", "Logstash", "Kibana", "Beats", "Docker", "AWS"],
    category: "Logging",
    difficulty: "Advanced",
    status: "Live",
    image: "/projects/elk-stack.png",
    githubUrl: "https://github.com/charles-ochieng/elk-logging-platform",
    challenges: ["Log parsing complexity", "Storage optimization", "Search performance", "Data retention"],
    solutions: ["Grok patterns for parsing", "Index lifecycle management", "Cluster optimization", "Automated archival"],
    features: [
      "Centralized log collection",
      "Real-time log analysis",
      "Custom dashboards and visualizations",
      "Automated alerting",
      "Security audit trails",
    ],
    dateCompleted: "2023-10-05",
    metrics: ["10TB+ logs processed daily", "Sub-second search performance", "99.9% log ingestion success"],
    primaryTech: "Elasticsearch",
    primaryTechIcon: <FileCode />,
  },
  {
    id: 8,
    title: "GitOps Deployment Automation",
    tagline: "ArgoCD-based GitOps workflow for automated Kubernetes deployments",
    description: "ArgoCD-based GitOps workflow for automated Kubernetes deployments",
    longDescription:
      "A complete GitOps implementation using ArgoCD for automated Kubernetes deployments, with git-based configuration management, automated sync, rollback capabilities, and multi-environment promotion workflows.",
    technologies: ["ArgoCD", "Kubernetes", "Helm", "Git", "Kustomize", "Prometheus"],
    category: "GitOps",
    difficulty: "Intermediate",
    status: "Live",
    image: "/projects/gitops-automation.png",
    githubUrl: "https://github.com/charles-ochieng/gitops-argocd",
    liveUrl: "https://argocd.charles-ochieng.com",
    challenges: ["Configuration drift", "Multi-environment sync", "Rollback automation", "Secret management"],
    solutions: ["ArgoCD auto-sync", "Environment-specific overlays", "Automated rollback policies", "Sealed secrets"],
    features: ["Git-based deployments", "Automated synchronization", "Visual deployment tracking", "Rollback capabilities", "Multi-environment support"],
    dateCompleted: "2023-09-15",
    metrics: ["50+ applications managed", "Zero deployment failures", "90% faster releases"],
    primaryTech: "ArgoCD",
    primaryTechIcon: <Bot />,
  },
]

const categories = [
  "All",
  "Infrastructure",
  "DevOps",
  "Monitoring",
  "Security",
  "FinOps",
  "Logging",
  "GitOps",
]

export default function ProjectsSidebar() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault()
        const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject?.id)

        if (e.key === "ArrowUp" && currentIndex > 0) {
          handleProjectSelect(filteredProjects[currentIndex - 1])
        } else if (e.key === "ArrowDown" && currentIndex < filteredProjects.length - 1) {
          handleProjectSelect(filteredProjects[currentIndex + 1])
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredProjects, selectedProject, isMounted])

  useEffect(() => {
    if (!isMounted) return;

    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }, [selectedProject, isMounted])
  
  // Filter projects based on active category and search query
  useEffect(() => {
    if (!isMounted) return;
    
    let filtered = [...projects];
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        project =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
    
    // If the currently selected project is not in the filtered list,
    // select the first project in the filtered list
    if (filtered.length > 0 && !filtered.some(p => p.id === selectedProject?.id)) {
      setSelectedProject(filtered[0]);
    }
  }, [activeCategory, searchQuery, selectedProject?.id, isMounted])

  const moveX = mousePosition.x * 10 - 5
  const moveY = mousePosition.y * 10 - 5

  const handleProjectSelect = (project: Project) => {
    setIsLoading(true)
    setSelectedProject(project)
    setIsMobileSidebarOpen(false)

    if (typeof window !== 'undefined') {
      window.history.replaceState(null, "", `#projects-${project.id}`)
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "#00ff88"
      case "In Development":
        return "#ffd700"
      case "Creation":
        return "#00d4ff"
      default:
        return "#00d4ff"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "#00ff88"
      case "Intermediate":
        return "#00d4ff"
      case "Advanced":
        return "#ff6b6b"
      default:
        return "#00d4ff"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "E-commerce":
        return "#00d4ff"
      case "API":
        return "#00ff88"
      case "Cloud":
        return "#ffd700"
      case "AI/Bot":
        return "#ff6b6b"
      case "Web App":
        return "#9c5fff"
      case "Blog":
        return "#00d4ff"
      case "Corporate":
        return "#00ff88"
      case "Marketing":
        return "#ffd700"
      case "Fintech":
        return "#ff6b6b"
      default:
        return "#00d4ff"
    }
  }

  const shareProject = (project: Project) => {
    if (typeof window === 'undefined') {
      alert("Sharing features are not available during server rendering.");
      return;
    }
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveUrl || window.location.href,
      })
    } else {
      navigator.clipboard.writeText(project.liveUrl || window.location.href)
    }
  }

  const getRelatedProjects = () => {
    const relatedProjects = projects
      .filter(
        (project) =>
          project.id !== selectedProject?.id &&
          project.technologies.some((tech) => selectedProject?.technologies.includes(tech)),
      )
      .slice(0, 3)
    return relatedProjects
  }

  return (
    <section id="projects" className="min-h-screen py-24  relative" ref={containerRef}>
      <div
        className="absolute pointer-events-none w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
          left: `calc(${mousePosition.x * 100}% - 20vw)`,
          top: `calc(${mousePosition.y * 100}% - 20vw)`,
          transition: "all 0.3s ease",
        }}
      />

      <div className="container w-full">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "var(--accent-primary)",
              transform: `translate(${moveX * -0.3}px, ${moveY * -0.3}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-[#b4bcd0] text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving
          </p>
        </div>

        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="w-full glass-card p-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <Menu className="w-5 h-5 mr-2 text-[#00d4ff]" />
              <span>{selectedProject?.title}</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row gap-6 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div
            className={cn(
              "md:w-[30%] glass-card p-4 md:max-h-[800px] overflow-hidden flex flex-col",
              isMobileSidebarOpen ? "block" : "hidden md:flex",
            )}
          >
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b4bcd0] w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 glass-card text-white placeholder-[#b4bcd0] focus:outline-none focus:ring-1 focus:ring-[#00d4ff] transition-all duration-300 text-sm"
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Filter className="w-4 h-4 mr-2" style={{ color: 'var(--accent-primary)' }} />
                <h4 className="text-sm font-medium">Filter by Category</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      activeCategory === category ? "text-[#0a0f1c]" : "glass-card hover:text-[#00d4ff]"
                    }`}
                    style={
                      activeCategory === category
                      ? { backgroundColor: "var(--accent-primary)", color: "#0a0f1c" }
                      : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.slice(5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 text-xs rounded-lg transition-all duration-300 ${
                      activeCategory === category ? "text-[#ffff]" : "glass-card hover:text-[#00d4ff]"
                    }`}
                    style={
                      activeCategory === category
                        ? { backgroundColor: "var(--accent-primary)", color: "#ffff" }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <h4 className="text-sm font-medium mb-2 text-[#b4bcd0]">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? "s" : ""}
              </h4>
              <div className="space-y-2">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left p-3 rounded-lg  ${
                      selectedProject?.id === project.id
                        ? " border-l-4 border-[#00d4ff]"
                        : "glass-card hover:bg-white/10"
                    }`}
                    style={{ transform: "none" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{
                            backgroundColor: `${getCategoryColor(project.category)}15`,
                            color: getCategoryColor(project.category),
                          }}
                        >
                          {project.primaryTechIcon}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{project.title}</h3>
                          <p className="text-[#b4bcd0] text-xs truncate max-w-[180px]">{project.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="text-center py-8 glass-card">
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-[#b4bcd0]">No projects found</p>
                    <button
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory("All")
                      }}
                      className="mt-2 text-[#00d4ff] text-sm hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#b4bcd0] flex items-center justify-center">
              <span className="glass-card px-2 py-1 rounded mr-2">↑</span>
              <span className="glass-card px-2 py-1 rounded mr-2">↓</span>
              <span>to navigate projects</span>
            </div>
          </div>

          <div className="md:w-[70%] glass-card p-6 md:max-h-[800px] overflow-hidden relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-t-[#00d4ff] border-r-[#00d4ff] border-b-[#00ff88] border-l-[#00ff88] rounded-full animate-spin"></div>
              </div>
            )}

            <div ref={contentRef} className="h-full overflow-y-auto pr-2 custom-scrollbar">
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject?.title}</h2>
                    <p className="text-[#b4bcd0] text-lg">{selectedProject?.tagline}</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 md:mt-0">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: getStatusColor(selectedProject?.status),
                        color: "#0a0f1c",
                      }}
                    >
                      {selectedProject?.status}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: getDifficultyColor(selectedProject?.difficulty),
                        color: "#0a0f1c",
                      }}
                    >
                      {selectedProject?.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-lg"
                      style={{
                        backgroundColor: "var(--accent-primary)",
                      }}
                    >
                      <span className="text-white">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedProject?.githubUrl && (
                    <a
                      href={selectedProject?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject?.liveUrl && (
                    <a
                      href={selectedProject?.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: "var(--accent-primary)",
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-white">Live Demo</span>
                    </a>
                  )}
                  <button
                    onClick={() => shareProject(selectedProject)}
                    className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:text-[#00d4ff] transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-[#00d4ff]" />
                    Overview
                  </h3>
                  <p className="text-[#b4bcd0] leading-relaxed">{selectedProject?.longDescription}</p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedProject?.image || "/placeholder.svg"}
                    alt={selectedProject?.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-[#00ff88]" />
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject?.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 glass-card p-3 rounded-lg">
                        <div className="w-5 h-5 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#00ff88]"></div>
                        </div>
                        <span className="text-[#b4bcd0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {selectedProject?.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-5 h-5 rounded-full bg-[#ff6b6b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#ff6b6b]"></div>
                          </div>
                          <span className="text-[#b4bcd0]">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {selectedProject?.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-5 h-5 rounded-full bg-[#00d4ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                          </div>
                          <span className="text-[#b4bcd0]">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-sm text-[#b4bcd0] flex items-center">
                  <Calendar className="w-4 h-4 mr-1 opacity-60" />
                  <span className="opacity-60">Completed: {new Date(selectedProject?.dateCompleted).toLocaleDateString()}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {getRelatedProjects().map((project) => (
                      <button
                        key={project.id}
                        onClick={() => handleProjectSelect(project)}
                        className="glass-card p-4 rounded-lg text-left transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                        aria-label={`View details for ${project.title}`}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: getCategoryColor(project.category),
                              color: "#0a0f1c",
                            }}
                          >
                            {project.primaryTechIcon}
                          </div>
                          <h4 className="font-medium text-sm">{project.title}</h4>
                        </div>
                        <p className="text-[#b4bcd0] text-xs line-clamp-2">{project.tagline}</p>
                        <div className="flex items-center mt-2 text-[#00d4ff] text-xs">
                          <span>View details</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </button>
                    ))}
                    {getRelatedProjects().length === 0 && (
                      <div className="col-span-3 glass-card p-6 text-center">
                        <p className="text-[#b4bcd0]">No related projects found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
