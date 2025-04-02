"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Box, Cloud, Home, PieChart, Zap, LineChart, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LogoComponent } from "./LogoComponent"
import { useTheme } from "next-themes"

export const CollapseSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const routes = [
    {
      label: "Azure",
      icon: Cloud,
      href: "#",
      tooltip: "Azure",
      color: "text-blue-600",
    },
    {
      label: "Inicio",
      icon: Home,
      href: "/main-view",
      tooltip: "Vista Principal",
      color: "text-sky-500",
    },
    {
      label: "Consumo",
      icon: LineChart,
      href: "/consumo",
      tooltip: "Vista Consumos",
      color: "text-green-600",
    },
    {
      label: "Quotas",
      icon: PieChart,
      href: "/quotas",
      tooltip: "Vista Quotas",
      color: "text-violet-500",
    },
    {
      label: "Deployments",
      icon: Zap,
      href: "/deployments",
      tooltip: "Vista Deployments",
      color: "text-pink-500",
    },
    {
      label: "Recursos",
      icon: Box,
      href: "/recursos",
      tooltip: "Vista Recursos",
      color: "text-orange-600",
    },
    {
      label: "Funciones",
      icon: BarChart2,
      href: "/music",
      tooltip: "Funciones",
      color: "text-emerald-500",
    },
  ]

  if (!isMounted) return null

  return (
    <>
      {/* Overlay when sidebar is expanded on mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full z-[101] flex flex-col transition-all duration-300 ease-in-out",
          isExpanded ? "w-64 shadow-xl" : "w-16 shadow-md",
          theme === "dark" ? "bg-slate-900 border-r border-slate-800" : "bg-white border-r border-slate-100",
        )}
      >
        {/* Toggle button */}
        <div className="flex justify-end p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={cn(
              "rounded-full w-8 h-8 transition-all",
              theme === "dark"
                ? "text-slate-400 hover:text-white hover:bg-slate-800"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
            )}
          >
            <ChevronRight className={cn("h-5 w-5 transition-transform duration-300", isExpanded && "rotate-180")} />
          </Button>
        </div>

        {/* Logo and navigation */}
        <div className={cn("flex flex-col items-center mt-2", isExpanded ? "gap-6" : "gap-6")}>
          <div className="px-2 py-2">
            <LogoComponent isExpanded={isExpanded} />
          </div>

          <div className="w-full px-2">
            <TooltipProvider delayDuration={300}>
              <div className={cn("flex flex-col gap-2 w-full", isExpanded ? "px-2" : "items-center")}>
                {routes.map((route) => (
                  <div key={route.href} className="w-full">
                    {isExpanded ? (
                      <Link
                        href={route.href}
                        className={cn(
                          "flex items-center px-3 py-2.5 rounded-xl w-full transition-all duration-200",
                          pathname === route.href
                            ? theme === "dark"
                              ? "bg-slate-800 text-white font-medium"
                              : "bg-slate-100 text-slate-900 font-medium"
                            : theme === "dark"
                              ? "text-slate-400 hover:text-white hover:bg-slate-800/70"
                              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                        )}
                      >
                        <div className="flex items-center justify-center w-8 h-8">
                          <route.icon
                            className={cn("h-5 w-5 transition-transform", pathname === route.href ? route.color : "")}
                          />
                        </div>
                        <span className="ml-3 text-sm">{route.label}</span>
                      </Link>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={route.href}
                            className={cn(
                              "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                              pathname === route.href
                                ? theme === "dark"
                                  ? "bg-slate-800 text-white"
                                  : "bg-slate-100 text-slate-900"
                                : theme === "dark"
                                  ? "text-slate-400 hover:text-white hover:bg-slate-800/70"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                            )}
                          >
                            <route.icon
                              className={cn("h-5 w-5 transition-transform", pathname === route.href ? route.color : "")}
                            />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side="right"
                          className={cn(
                            "font-medium",
                            theme === "dark"
                              ? "bg-slate-800 text-white border-slate-700"
                              : "bg-white text-slate-900 border-slate-200",
                          )}
                        >
                          {route.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  )
}

