import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"

export default function ContactUs() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-8">
            <Card className="w-full max-w-md mx-auto my-8">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Please fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="Enter your first name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                        </div>
                        <Button className="w-full" type="submit">
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

