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
                    <a href="https://wine.gounevps.com" className="text-cyan-400 underline">wine.gounevps.com</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot.png" alt="" />
                    <div className="mt-8">
                        <Badge>React</Badge> <Badge>Tailwind</Badge> <Badge>Express</Badge> <Badge>MongoDB</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-72 h-96 lg:w-96 lg:h-96">
                <CardHeader>
                    <CardTitle>RankingComparator</CardTitle>
                    <a href="https://ranking-comparator.vercel.app/" className="text-cyan-400 underline">ranking-comparator.vercel.app</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot2.png" alt="" />
                    <div className="mt-8">
                        <Badge>NextJS</Badge> <Badge>Tailwind</Badge> <Badge>ChatGPT integration</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-72 h-96 lg:w-96 lg:h-96">
                <CardHeader>
                    <CardTitle>SwipeTrip</CardTitle>
                    <a href="https://swipe-trip.vercel.app/" className="text-cyan-400 underline">swipe-trip.vercel.app</a>
                </CardHeader>
                <CardContent>
                    <img src="images/app_screenshot3.png" alt="" />
                    <div className="mt-8">
                        <Badge>NextJS</Badge> <Badge>Tailwind</Badge> <Badge>Stripe</Badge> <Badge>ThreeJS</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
