export default function PastEventsPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Timeline</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A timeline of milestones in the history of the company.
            </p>
            <div className="w-full max-w-lg space-y-8">
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">January 2024</div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Milestone 1</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="mt-4 grid gap-4">
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">February 2024</div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Milestone 2</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="mt-4 grid gap-4">
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-gray-400" />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">March 2024</div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Milestone 3</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="mt-4 grid gap-4">
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                            <img
                                alt="Image"
                                className="aspect-video overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/placeholder.svg"
                                width="600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

