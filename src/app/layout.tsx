import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: {
default: "WheelsChess | Vehicle Marketplace",
template: "%s | WheelsChess",
},
description:
"Discover cars, bikes, commercial vehicles, spare parts and automotive collectibles on WheelsChess.",
applicationName: "WheelsChess",
keywords: [
"WheelsChess",
"vehicles",
"cars",
"bikes",
"spare parts",
"Pakistan vehicle marketplace",
],
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
themeColor: "#111827",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
