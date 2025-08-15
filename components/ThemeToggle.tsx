"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { theme, systemTheme, setTheme } = useTheme();
    const resolvedTheme = theme === "system" ? systemTheme : theme;

    const renderIcon = () => {
        if (theme === "system") return <Laptop className="h-[1.2rem] w-[1.2rem]" />
        if (resolvedTheme === "dark") return <Moon className="h-[1.2rem] w-[1.2rem]" />
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                    {renderIcon()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
