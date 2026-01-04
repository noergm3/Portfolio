// app/components/Analytics.js
"use client";
import { useEffect } from "react";

export default function Analytics() {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-13P4TBDEJH'); // reemplaza con tu ID
    }, []);
    return null;
}
