import "styles/tailwind.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@radix-ui/themes/styles.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
        </body>
      <Analytics />
      <SpeedInsights/>
    </html>
  )
}
