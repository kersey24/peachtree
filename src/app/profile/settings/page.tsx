import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"

export default function ProfileSettingsPage() {
    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Update your profile information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                    <p className="text-xs text-red-500">Please enter a valid email.</p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar</Label>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Input id="avatar" type="file" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter your username" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input id="display-name" placeholder="Enter your display name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea className="min-h-[100px]" id="bio" placeholder="Enter your bio" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="ml-auto">Save</Button>
            </CardFooter>
        </Card>
    )
}