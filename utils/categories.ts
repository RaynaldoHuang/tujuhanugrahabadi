import printer from "@/public/svg/printer.svg"
import thermal from "@/public/svg/thermal.svg"
import ink from "@/public/svg/ink.svg"
import ribboncart from "@/public/svg/ribboncart.svg"

const categories = [
    {
        id: 1,
        title: "Printer",
        value: "printer",
        icon: printer
    },
    {
        id: 2,
        title: "Thermal Paper",
        value: "thermalPaper",
        icon: thermal
    },
    {
        id: 3,
        title: "Ink",
        value: "ink",
        icon: ink
    },
    {
        id: 4,
        title: "Ribbon Cartridge",
        value: "ribbonCartridge",
        icon: ribboncart
    },
];

export default categories;