import printer from "@/public/svg/printer.svg"
import thermal from "@/public/svg/thermal.svg"
import ink from "@/public/svg/ink.svg"
import calculator from "@/public/svg/calculator.svg"
import tape from "@/public/svg/tape.svg"
import computer from "@/public/svg/computer.svg"
import flashdisk from "@/public/svg/flashdisk.svg"

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
        title: "Ribbon Cartridge & Ink",
        value: "ink",
        icon: ink
    },
    {
        id: 4,
        title: "Calculator",
        value: "calculator",
        icon: calculator
    },
    {
        id: 5,
        title: "Computer Acessories",
        value: "acessories",
        icon: computer
    },
    {
        id: 6,
        title: "Flashdisk",
        value: "flashdisk",
        icon: flashdisk
    },
    {
        id: 7,
        title: "Duct Tape",
        value: "tape",
        icon: tape
    },
];

export default categories;