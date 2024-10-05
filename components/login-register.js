import React from 'react'
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const LRBtn = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="dark:text-white text-black">
                        Login/Register
                    </Button>
                </SheetTrigger>
                <SheetContent className="h-[80%]" side="bottom">
                    <SheetHeader>
                        <SheetTitle className="mx-auto text-white">Login or Register</SheetTitle>
                        <SheetDescription className="mt-10 mx-auto">
                            <Tabs defaultValue="login" className="w-[40vw]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="login">Log In</TabsTrigger>
                                    <TabsTrigger value="register">Register</TabsTrigger>
                                </TabsList>
                                <TabsContent value="login" className="mx-auto">
                                    <Card className="w-[40vw]">
                                        <CardHeader>
                                            <CardTitle>Log In</CardTitle>
                                            <CardDescription>
                                                Enter your credentials
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" placeholder="9012345678" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="pass">Password</Label>
                                                <Input id="pass" placeholder="..." type="password" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Log In</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="register">
                                    <Card className="w-[40vw]">
                                        <CardHeader>
                                            <CardTitle>Register</CardTitle>
                                            <CardDescription>
                                                Enter your credentials
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" type="text" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" placeholder="irc@soa.com" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="regd-num">Registration Number</Label>
                                                <Input id="regd-num" type="number" placeholder="2141000000" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="year">Passing Year</Label>
                                                <Input id="year" type="number" placeholder="2025" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" type="number" placeholder="9012345678" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="pass">Password</Label>
                                                <Input id="pass" type="password" placeholder="..." />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="conf-pass">Confirm Password</Label>
                                                <Input id="conf-pass" type="password" placeholder="..." />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Register</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default LRBtn
