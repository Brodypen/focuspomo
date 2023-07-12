import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import PomodoroTimer from "@/components/pomodoroTimer/pomodoroTimer"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <PomodoroTimer />
      </div>
    </section>
  )
}
