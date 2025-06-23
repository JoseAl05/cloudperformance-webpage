"use client"
import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

export const LogoComponent = ({ isExpanded }: { isExpanded?: boolean }) => {
  const { theme } = useTheme()

  return isExpanded ? (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image width={100} height={100} alt="Logo Cloud Performance" src="/logo.png" className="object-contain" />
      </div>
      <h1
        className={cn(
          "text-base font-bold truncate transition-all",
          montserrat.className,
          theme === "dark" ? "text-white" : "text-blue-600",
        )}
      >
        Cloud Performance
      </h1>
    </Link>
  ) : (
    <div className="relative w-8 h-8 flex-shrink-0">
      <Image width={100} height={100} alt="Logo Cloud Performance" src="/logo.png" className="object-contain" />
    </div>
  )
}

