import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

  

export default function CardSection() {
    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 custom:grid-cols-3 mt-24">
            <Card className="w-72 h-96 lg:w-96 lg:h-96">
                <CardHeader>
                    <CardTitle>WineService</CardTitle>
                    <a href="https://wine.gounevps.com" className="text-cyan-400">wine.gounevps.com</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot.png" alt="" />
                    <div className="mt-8">
                        <Badge>React JS</Badge> <Badge>Tailwind</Badge> <Badge>Express</Badge> <Badge>MongoDB</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-72 h-96 lg:w-96 lg:h-96">
                <CardHeader>
                    <CardTitle>Spotistats</CardTitle>
                    <a href="https://spotistats.gounevps.com" className="text-cyan-400">spotistats.gounevps.com</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot2.png" alt="" />
                    <div className="mt-8">
                        <Badge>React JS</Badge> <Badge>Tailwind</Badge> <Badge>ChatGPT integration</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-72 h-96 lg:w-96 lg:h-96">
                <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                    <a href="https://portfolio.gounevps.com" className="text-cyan-400">portofolio.gounevps.com</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot3.png" alt="" />
                    <div className="mt-8">
                        <Badge>Next JS</Badge> <Badge>Tailwind</Badge> <Badge>Express</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
