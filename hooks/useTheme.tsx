"use client"
import { DarkModeContext } from "@/context/darkModeContext";
import { useContext } from "react";


export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};
