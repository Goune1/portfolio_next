import { Input } from "@/components/ui/input"

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center mt-48 pb-96">
            <div className="flex gap-12">
                <Input type="text" placeholder="First Name" className="w-72"/>
                <Input type="text" placeholder="Last Name" className="w-72"/>
            </div>

            <Input type="text" placeholder="Company" className="w-custom"/>
        </div>
    )
}