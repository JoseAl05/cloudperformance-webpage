'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Box,
  Home,
  // PieChart,
  Zap,
  LineChart,
  ChevronRight,
  ChevronDown,
  // HardDrive,
  // Table2,
  Grid2X2,
  PieChart,
  // Layers,
  Computer,
  Database,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { LogoComponent } from '@/components/LogoComponent'
import { useTheme } from 'next-themes'

export const CollapseSidebarAWS = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    setIsMounted(true)

    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node) && openDropdowns[key]) {
          setOpenDropdowns((prev) => ({
            ...prev,
            [key]: false,
          }))
        }
      })
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdowns])

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleDropdown = (key: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation()
    }

    setOpenDropdowns((prev) => {
      const newState = { ...prev }
      Object.keys(newState).forEach((k) => {
        if (k !== key) newState[k] = false
      })
      newState[key] = !prev[key]
      return newState
    })
  }

  const routes = [
    // {
    //   label: 'Azure',
    //   icon: Cloud,
    //   href: '#',
    //   tooltip: 'Azure',
    //   color: 'text-blue-600',
    // },
    {
      label: 'Inicio',
      icon: Grid2X2,
      href: '/aws/main-view',
      tooltip: 'Vista Principal',
      color: 'text-sky-500',
    },
    {
      label: 'Funciones',
      icon: Home,
      href: '/aws/ahorro',
      tooltip: 'Funciones',
      color: 'text-teal-500',
    },
    {
      label: 'Consumo',
      icon: LineChart,
      href: '/aws/consumo',
      tooltip: 'Vista Consumos',
      color: 'text-green-600',
    },
    {
      label: 'Quotas',
      icon: PieChart,
      href: '/aws/quotas',
      tooltip: 'Vista Quotas',
      color: 'text-violet-500',
    },
    {
      label: 'Deployments',
      icon: Zap,
      href: '/aws/deployments',
      tooltip: 'Vista Deployments',
      color: 'text-pink-500',
    },
    // {
    //   label: 'Tablas de Items de Azure',
    //   icon: Table2,
    //   href: '/aws/items-tables',
    //   tooltip: 'Tablas de Items de Azure',
    //   color: 'text-red-500',
    // },
    {
      label: 'Recursos',
      icon: Box,
      isDropdown: true,
      tooltip: 'Vista Recursos',
      color: 'text-orange-600',
      subItems: [
        {
          label: 'Instancias EC2',
          icon: Computer,
          href: '/aws/recursos/instancias-ec2',
          color: 'text-orange-500',
        },
        {
          label: 'Autoscaling Groups',
          icon: Computer,
          href: '/aws/recursos/autoscaling-groups',
          color: 'text-orange-500',
        },
        {
          label: 'Instancias RDS Postgresql',
          icon: Database,
          href: '/aws/recursos/instancias-rds-pg',
          color: 'text-orange-600',
        },
        {
          label: 'Instancias RDS Mysql',
          icon: Database,
          href: '/aws/recursos/instancias-rds-mysql',
          color: 'text-orange-600',
        },
        {
          label: 'Instancias RDS SQL Server',
          icon: Database,
          href: '/aws/recursos/instancias-rds-sqlserver',
          color: 'text-orange-600',
        }
        // {
        //   label: 'Instancias RDS MariaDB',
        //   icon: Database,
        //   href: '/aws/recursos/instancias-rds-mariadb',
        //   color: 'text-orange-600',
        // },
        // {
        //   label: 'Clusters EKS',
        //   icon: Layers,
        //   href: '/aws/recursos/clusters-eks',
        //   color: 'text-orange-700',
        // },
      ],
    }
  ]

  if (!isMounted) return null

  return (
    <>
      {isExpanded && (
        <div
          className='fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] md:hidden'
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div
        className={cn(
          'fixed left-0 top-0 h-full z-[101] flex flex-col transition-all duration-300 ease-in-out',
          isExpanded ? 'w-64 shadow-xl' : 'w-16 shadow-md',
          theme === 'dark' ? 'bg-slate-900 border-r border-slate-800' : 'bg-white border-r border-slate-100',
        )}
      >
        <div className='flex justify-end p-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleSidebar}
            className={cn(
              'rounded-full w-8 h-8 transition-all',
              theme === 'dark'
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
            )}
          >
            <ChevronRight className={cn('h-5 w-5 transition-transform duration-300', isExpanded && 'rotate-180')} />
          </Button>
        </div>
        <div className={cn('flex flex-col items-center mt-2', isExpanded ? 'gap-6' : 'gap-6')}>
          <div className='px-2 py-2'>
            <LogoComponent isExpanded={isExpanded} />
          </div>

          <div className='w-full px-2 overflow-y-auto max-h-[calc(100vh-120px)]'>
            <TooltipProvider delayDuration={300}>
              <div className={cn('flex flex-col gap-2 w-full', isExpanded ? 'px-2' : 'items-center')}>
                {routes.map((route) => (
                  <div
                    key={route.label}
                    className='w-full'
                    ref={(el) => {
                      if (route.isDropdown) {
                        dropdownRefs.current[route.label] = el
                      }
                    }}
                  >
                    {isExpanded ? (
                      route.isDropdown ? (
                        <div className='w-full'>
                          <div
                            onClick={(e) => toggleDropdown(route.label, e)}
                            className={cn(
                              'flex items-center px-3 py-2.5 rounded-xl w-full transition-all duration-200 cursor-pointer',
                              theme === 'dark'
                                ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                            )}
                          >
                            <div className='flex items-center justify-center w-8 h-8'>
                              <route.icon className={cn('h-5 w-5 transition-transform', route.color)} />
                            </div>
                            <span className='ml-3 text-sm'>{route.label}</span>
                            <ChevronDown
                              className={cn(
                                'ml-auto h-4 w-4 transition-transform duration-200',
                                openDropdowns[route.label] ? 'rotate-180' : '',
                              )}
                            />
                          </div>
                          <div
                            className={cn(
                              'pl-10 pr-2 py-2 mb-5 space-y-1 overflow-hidden transition-all duration-200',
                              openDropdowns[route.label] ? 'h-full' : 'max-h-0',
                            )}
                          >
                            {route.subItems?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  'flex items-center px-3 py-2 rounded-lg w-full transition-all duration-200',
                                  pathname === subItem.href
                                    ? theme === 'dark'
                                      ? 'bg-slate-800 text-white font-medium'
                                      : 'bg-slate-100 text-slate-900 font-medium'
                                    : theme === 'dark'
                                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                                )}
                              >
                                <div className='flex items-center justify-center w-5 h-5'>
                                  <subItem.icon
                                    className={cn('h-4 w-4', pathname === subItem.href ? subItem.color : '')}
                                  />
                                </div>
                                <span className='ml-2 text-sm'>{subItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={route.href ? route.href : '#'}
                          className={cn(
                            'flex items-center px-3 py-2.5 rounded-xl w-full transition-all duration-200',
                            pathname === route.href
                              ? theme === 'dark'
                                ? 'bg-slate-800 text-white font-medium'
                                : 'bg-slate-100 text-slate-900 font-medium'
                              : theme === 'dark'
                                ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                          )}
                        >
                          <div className='flex items-center justify-center w-8 h-8'>
                            <route.icon
                              className={cn('h-5 w-5 transition-transform', pathname === route.href ? route.color : '')}
                            />
                          </div>
                          <span className='ml-3 text-sm'>{route.label}</span>
                        </Link>
                      )
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {route.isDropdown ? (
                            <div
                              onClick={(e) => toggleDropdown(route.label, e)}
                              className={cn(
                                'flex items-center justify-center w-10 h-full rounded-xl transition-all duration-200 cursor-pointer',
                                openDropdowns[route.label]
                                  ? theme === 'dark'
                                    ? 'bg-slate-800 text-white'
                                    : 'bg-slate-100 text-slate-900'
                                  : theme === 'dark'
                                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                              )}
                            >
                              <route.icon className={cn('h-5 w-5', route.color)} />
                            </div>
                          ) : (
                            <Link
                              href={route.href ? route.href : '#'}
                              className={cn(
                                'flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200',
                                pathname === route.href
                                  ? theme === 'dark'
                                    ? 'bg-slate-800 text-white'
                                    : 'bg-slate-100 text-slate-900'
                                  : theme === 'dark'
                                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                              )}
                            >
                              <route.icon
                                className={cn(
                                  'h-5 w-5 transition-transform',
                                  pathname === route.href ? route.color : '',
                                )}
                              />
                            </Link>
                          )}
                        </TooltipTrigger>
                        <TooltipContent
                          side='right'
                          className={cn(
                            'font-medium',
                            theme === 'dark'
                              ? 'bg-slate-800 text-white border-slate-700'
                              : 'bg-white text-slate-900 border-slate-200',
                          )}
                        >
                          {route.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {!isExpanded && route.isDropdown && openDropdowns[route.label] && (
                      <div
                        className={cn(
                          'absolute left-16 z-50 mt-0 w-48 rounded-md shadow-lg',
                          theme === 'dark'
                            ? 'bg-slate-800 border border-slate-700'
                            : 'bg-white border border-slate-200',
                        )}
                      >
                        <div className='py-1'>
                          {route.subItems?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                'flex items-center px-4 py-2 text-sm',
                                pathname === subItem.href
                                  ? theme === 'dark'
                                    ? 'bg-slate-700 text-white'
                                    : 'bg-slate-100 text-slate-900'
                                  : theme === 'dark'
                                    ? 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
                              )}
                            >
                              <subItem.icon className={cn('mr-2 h-4 w-4', subItem.color)} />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
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
