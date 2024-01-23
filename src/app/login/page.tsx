import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="mx-auto w-[350px] space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-gray-500 dark:text-gray-400">Enter your email and password to login to your account</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link className="ml-auto inline-block text-sm underline" href="#">
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                        <div className="flex flex-col gap-2">
                            <Button className="w-full" variant="outline">
                                Login with Google
                            </Button>
                            <Button className="w-full" variant="outline">
                                Login with Facebook
                            </Button>
                            <Button className="w-full" variant="outline">
                                Login with Twitter
                            </Button>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don't have an account?
                        <Link className="underline ml-1" href="/signup">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img
                    alt="Background Image"
                    className="h-full w-full object-cover"
                    height="1080"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "1920/1080",
                        objectFit: "cover",
                    }}
                    width="1920"
                />
            </div>
        </div>
    )
}

