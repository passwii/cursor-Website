import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit">
                Amazon China Experts
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock Your Amazon Success in China
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Navigate the world's largest e-commerce market with confidence. We help businesses like yours thrive on Amazon China.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
              <div className="flex items-center gap-1">
                <ShoppingCart className="h-4 w-4" />
                <span>500+ Successful Launches</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>200% Avg. Sales Growth</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Amazon China Success"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-medium">
                  "Our sales increased by 300% within 6 months of partnering with this amazing team!"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  - Zhang Wei, CEO of TechGadgets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}