"use client"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowBigDown, ArrowBigUp, CircleUser, Menu, MessageSquareMore} from "lucide-react"
import FollowCard from "../components/FollowCard"
import Sidebar from "../components/Sidebar"
import  TextareaAutosize  from "react-textarea-autosize"
import { Button } from "@/components/ui/button"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface TwitterLandingProp{
    viewMode: string
}

const TwitterLanding = ({viewMode}:TwitterLandingProp) => {

    if(viewMode === "monitor"){
    return (
        <div>
        <div className="p-6">
        <div className="flex gap-x-8">
            <div className="flex ml-[-1.5rem] max-w-max ">
                <Sidebar />
            </div>
            <div className="flex flex-col  mt-[0.6rem]  w-full">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Home</h2>
                <div className="flex flex-col space-y-4 p-4">
                <TextareaAutosize className="appearance-none p-4 resize-none border-[1px] border-slate-200 rounded-lg shadow-sm outline-none focus:border-slate-500 " minRows={5} />
                <Button className="ml-auto">Post</Button>
                <div className="flex flex-col space-y-4">
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-xl font-semibold tracking-tight">Username</h3>
                            <p className="text-lg py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[75vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                </div>
                </div>

            </div>
            <div className="hidden">
                <FollowCard />
            </div>
        </div>
    </div>
    <div className="mt-[-5.3rem]">
    <SecondFooter viewMode="monitor" />
</div>
</div>
    )
}

if(viewMode === "mobile"){
    return (
        <div className="grid grid-cols-3 ">
            <div className="col-span-3">
                <SecondNavbar viewMode="mobile" />
            </div>
            <div className="p-2 col-span-3">
            <div className="flex mt-[1.3rem]  lg:mt-[1rem] w-full">
                <h2 className="text-2xl  font-bold tracking-tight">Home</h2>
                <div className="flex flex-col w-full space-y-4 p-4">
                <TextareaAutosize className="appearance-none mt-[2rem] ml-[-3.5rem]  p-4 w-[50vh] resize-none border-[1px] border-slate-200 rounded-lg shadow-sm outline-none focus:border-slate-500 " minRows={3} />
                <Button className="ml-auto">Post</Button>
                <div className="flex ml-[-4rem] flex-col space-y-4">
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-tight">Username</h3>
                            <p className="text-[16px] py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[45vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-tight">Username</h3>
                            <p className="text-[16px] py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[45vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                    <span className="flex gap-x-1">
                        <CircleUser size={32} className="opacity-60" />
                        <span className="flex flex-col">
                            <h3 className="text-lg font-semibold tracking-tight">Username</h3>
                            <p className="text-[16px] py-[0.3rem] text-slate-500 font-medium">Post content goes here</p>
                            <div className="flex items-center mt-[0.3rem] gap-x-8">
                                <ArrowBigUp size={26} className="opacity-80 hover:opacity-100" />
                                <ArrowBigDown size={26} className="opacity-80 hover:opacity-100" />
                                <MessageSquareMore size={26} className="opacity-80 hover:opacity-100" />
                            </div>
                            <hr className="w-[45vh] my-[0.8rem]  h-[1px] border-gray-400 " />
                        </span>
                    </span>
                </div>
                </div>
                </div>
            </div>
            <div className="hidden col-span-1">
                <FollowCard />
            </div>
            <div className="col-span-3">
                <SecondFooter viewMode="mobile" />
            </div>
        </div>
    )
}
}
export default TwitterLanding 