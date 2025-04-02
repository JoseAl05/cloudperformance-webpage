"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Box, Cloud, Home, PieChart, Zap, ChartLine, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const CollapseSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const routes = [
    {
      label: 'Azure',
      icon: Cloud,
      href: '#',
      tooltip: 'Inicio',
      color: 'text-blue-600'
    },
    {
      label: 'Inicio',
      icon: Home,
      href: '/main-view',
      tooltip: 'Vista Principal',
      color: 'text-sky-500',
    },
    {
      label: 'Consumo',
      icon: ChartLine,
      href: '/consumo',
      tooltip: 'Vista Consumos',
      color: 'text-green-700',
    },
    {
      label: 'Quotas',
      icon: PieChart,
      href: '/quotas',
      tooltip: 'Vista Quotas',
      color: 'text-violet-500',
    },
    {
      label: 'Deployments',
      icon: Zap,
      href: '/deployments',
      tooltip: 'Vista Deployemnts',
      color: 'text-pink-500',
    },
    {
      label: 'Recursos',
      icon: Box,
      href: '/recursos',
      tooltip: 'Vista Recursos',
      color: 'text-orange-700',
    },
    {
      label: 'Funciones',
      icon: BarChart2,
      href: '/music',
      tooltip: 'Funciones',
      color: 'text-emerald-500',
    }
  ]

  return (
    <>
      {/* Overlay when sidebar is expanded */}
      {isExpanded && <div className="fixed inset-0 bg-black/20 z-[100]" onClick={() => setIsExpanded(false)} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full z-[101] flex flex-col transition-all duration-300 ease-in-out",
          isExpanded ? "w-64 bg-gray-900" : "w-16 bg-[#1a1a1a]",
        )}
      >
        <div className="flex justify-end p-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-gray-400 cursor-pointer hover:text-white">
            <ChevronRight className={cn("h-5 w-5 transition-transform", isExpanded && "rotate-180")} />
          </Button>
        </div>

        <div className="flex flex-col items-center gap-8 mt-4">
          <TooltipProvider delayDuration={300}>
            {routes.map((route) => (
              <div key={route.href} className="w-full flex justify-center">
                {isExpanded ? (
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-center px-4 py-2 w-full text-gray-400 hover:text-white transition-colors",
                      pathname === route.href && "text-white bg-gray-800",
                      route.href === "#" && "justify-center",
                    )}
                  >
                    <div className={cn("flex items-center justify-center w-10 h-10", route.className)}>
                      <route.icon className="h-6 w-6" />
                    </div>
                    {route.href !== "#" && <span className="ml-3 font-medium">{route.label}</span>}
                  </Link>
                ) : (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={route.href}
                        className={cn(
                          "flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white transition-colors",
                          pathname === route.href && "text-white",
                          route.className,
                        )}
                      >
                        <route.icon className="h-6 w-6" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-gray-800 text-white border-gray-700">
                      {route.tooltip}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            ))}
          </TooltipProvider>
        </div>

        {/* <div className="mt-auto mb-6 flex flex-col items-center">
          {isExpanded ? (
            <div className="flex items-center px-4 py-2 w-full">
              <Avatar className="h-10 w-10 bg-gray-800 border-none">
                <AvatarFallback className="bg-gray-800 text-white">JP</AvatarFallback>
              </Avatar>
              <span className="ml-3 font-medium text-white">John Doe</span>
            </div>
          ) : (
            <Avatar className="h-10 w-10 bg-gray-800 border-none">
              <AvatarFallback className="bg-gray-800 text-white">JP</AvatarFallback>
            </Avatar>
          )}
        </div> */}
      </div>
    </>
  )
}

