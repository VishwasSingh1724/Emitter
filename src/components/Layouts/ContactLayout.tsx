import Image from "next/image"
import FirstContactPng from "../../../images/FirstContact.png"
import SecondContactPng from "../../../images/SecondContact.png"
import ThirdContactPng from "../../../images/ThirdContact.png"
import FourthContact from "../../../images/FourthContact.png"
import {useComponentPageConfig } from "../../app/Context/ComponentPageContext"
import { usePageSelection } from "@/app/Context/ActivePageContext"
import { usePageConfig } from "@/app/Context/pageConfigContext"
import { useBlankPageConfig } from "@/app/Context/BlankPageContext"

const ContactLayout = () => {

    const { pageConfig, addPageConfig } = usePageConfig();
    const { currentPage, setCurrentPage } = usePageSelection();
    const { ensureBlankPage, blankPageConfig } = useBlankPageConfig();

    const Layouts = [
        {id:1,name:'Contact 1',img:FirstContactPng},
        {id:2,name:'Contact 2',img:SecondContactPng},
        {id:1,name:'Contact 3',img:ThirdContactPng},
        {id:2,name:'Contact 4',img:FourthContact}
    ]


    const { addComponent} = useComponentPageConfig();

    const handleClick = (componentName:string) => {
        ensureBlankPage();
        const targetPage = currentPage || blankPageConfig[0].name;
        setCurrentPage(targetPage);
        addComponent(componentName, targetPage);
    };
    return (
        <div className="flex flex-col my-[8px] space-y-2">
            <h4  className="text-sm text-start px-[4px] pt-[4px] text-muted-foreground font-medium mb-1">Components</h4>
            {Layouts.map((layout) => (
                <div onClick={() => handleClick(`${layout.name}`)} key={layout.id} className="mb-2 rounded-sm w-full bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer flex flex-col items-center">
                    <Image src={layout.img} alt={layout.name} width={180} height={200} className="rounded-sm mt-[6px]" />
                    <h3 className="text-[10px] text-center pt-[4px] text-muted-foreground font-medium mb-2">{layout.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default ContactLayout