import printer from "@/public/svg/printer.svg"
import thermal from "@/public/svg/thermal.svg"
import ink from "@/public/svg/ink.svg"
import ribboncart from "@/public/svg/ribboncart.svg"
import calculator from "@/public/svg/calculator.svg"
import mouse from "@/public/svg/mouse.svg"
import keyboard from "@/public/svg/keyboard.svg"
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
        title: "Printer Ink",
        value: "ink",
        icon: ink
    },
    {
        id: 4,
        title: "Ribbon Cartridge",
        value: "ribbonCartridge",
        icon: ribboncart
    },
    {
        id: 5,
        title: "Calculator",
        value: "calculator",
        icon: calculator
    },
    {
        id: 6,
        title: "Mouse",
        value: "mouse",
        icon: mouse
    },
    {
        id: 7,
        title: "Keyboard",
        value: "keyboard",
        icon: keyboard
    },
    {
        id: 8,
        title: "Flashdisk",
        value: "Flashdisk",
        icon: flashdisk
    },
];

export default categories;