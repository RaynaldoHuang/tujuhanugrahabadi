/**
 * Products will be divided into four categories:
 * 1. Printer -> printer
 * 2. Thermal Paper -> thermalPaper
 * 3. Ink -> ink
 * 4. Ribbon Cartridge -> ribbonCartridge
 * 5. Flashdisk -> flashdisk
 * 6. Tape -> tape
 * 7. Keyboard -> keyboard
 * 8. 
 */

import pita from "@/public/svg/putaepson.svg"
import kertaslabel from "@/public/svg/kertaslabel.svg"
import printer from "@/public/svg/epsonprinter.svg"
import tinta from "@/public/svg/tintaepson.svg"

import epson057Black from "@/public/png/ink/Epson_057_Black.jpg"
import epson057Cyan from "@/public/png/ink/Epson_057_Cyan.jpg"

import b100 from "@/public/png/mouse/Logitech_B100.jpg"
import hp280 from "@/public/png/mouse/HP_280_Silent_Wireless_Mouse.jpg"
import m170 from "@/public/png/mouse/Logitech_M170.jpg"

import mk220 from "@/public/png/keyboard/Logitech_MK220.jpg"
import mk120 from "@/public/png/keyboard/Logitech_MK120.jpg"
import k120 from "@/public/png/keyboard/Logitech_K120.jpg"
import k150 from "@/public/png/keyboard/HP_k150.jpg"

import h111 from "@/public/png/headset/Logitech_H111.jpg"
import r400 from "@/public/png/pointer/Logitech_R400.jpg"

import kingston from "@/public/png/flashdisk/kingston.png"

const products = [
    {
        id: 1,
        src: epson057Black,
        alt: "Epson 057 Black",
        title: "Tinta Original EPSON 057 - Black",
        desc: "Untuk Printer L8050, L18050",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-EPSON-057-Original-Warna-Black-untuk-PRINTER-L8050-L18050-i.99363915.29470920904?sp_atk=83247d64-d7a6-4b94-81da-31bbd41a72c5",
        topedLink: "https://www.tokopedia.com/superinkjkt/tinta-epson-057-original-warna-black-untuk-printer-l8050-l18050?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 2,
        src: epson057Cyan,
        alt: "Epson 057 Cyan",
        title: "Tinta Original EPSON 057 - Light Cyan",
        desc: "Untuk Printer L8050, L18050",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-EPSON-057-Original-warna-Light-Cyan-untuk-PRINTER-L8050-L18050-i.99363915.27170921067?sp_atk=27a85bae-e4e7-4ab4-8f93-8f2549e14fd7&xptdk=27a85bae-e4e7-4ab4-8f93-8f2549e14fd7",
        topedLink: "https://www.tokopedia.com/superinkjkt/tinta-epson-057-original-warna-light-cyan-untuk-printer-l8050-l18050?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 3,
        src: b100,
        alt: "Mouse B 100",
        title: "Mouse Logitech B100",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "mouse",
        shopeeLink: "https://shopee.co.id/Mouse-LOGITECH-B100-Mouse-Kabel-USB-Optical-i.99363915.21825314656?sp_atk=5b4088e9-27bd-4c51-a43e-6398e83502b0",
        topedLink: "https://www.tokopedia.com/superinkjkt/mouse-laptop-logitech-b100-usb-komputer-computer-silent-original?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 4,
        src: hp280,
        alt: "HP 280 Silent Wireless Mouse",
        title: "HP 280 Silent Wireless Mouse",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "mouse",
        shopeeLink: "https://shopee.co.id/Mouse-Wireless-HP-280-Up-to-1600-DPI-USB-A-Windows-7-Windows-8-Windows-10-90-Noise-Reduction-i.99363915.28407349171?sp_atk=1e1b9c56-cb45-4c13-93f6-88e98c42328d&xptdk=1e1b9c56-cb45-4c13-93f6-88e98c42328d",
        topedLink: "https://www.tokopedia.com/superinkjkt/mouse-hp-m280-silent-wireless-black?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 5,
        src: m170,
        alt: "Logitech M170",
        title: "Mouse Logitech M170",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "mouse",
        shopeeLink: "https://shopee.co.id/Mouse-LOGITECH-M170-Wireless-untuk-Windows-Mac-Linux-dan-ChromeOS-i.99363915.19325344194?sp_atk=dd9d8112-372f-4824-9c1a-f90a6344a903&xptdk=dd9d8112-372f-4824-9c1a-f90a6344a903",
        topedLink: "https://www.tokopedia.com/superinkjkt/mouse-laptop-logitech-m170-wireless-tanpa-kabel-silent-click-komputer?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 6,
        src: mk220,
        alt: "Keyboard MK220",
        title: "Keyboard Logitech MK220",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/Logitech-Mk220-Keyboard-Mouse-Combo-Original-i.99363915.21526074952?sp_atk=bdabba4f-8a77-440c-b8d1-13533f7f6da3&xptdk=bdabba4f-8a77-440c-b8d1-13533f7f6da3",
        topedLink: "https://www.tokopedia.com/superinkjkt/mouse-laptop-logitech-m220-wireless-keyboard-k220-komputer-computer?extParam=whid%3D3280826%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 7,
        src: mk120,
        alt: "Keyboard MK120",
        title: "Keyboard Logitech MK120",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/Keyboard-Mouse-LOGITECH-MK120-Combo-Keyboard-Mouse-i.99363915.20023918910?sp_atk=306a2b03-bfa5-4d58-bf96-fe1a923d670a&xptdk=306a2b03-bfa5-4d58-bf96-fe1a923d670a",
        topedLink: "https://www.tokopedia.com/superinkjkt/mouse-laptop-logitech-m120-usb-keyboard-logitec-k120-komputer-computer?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 8,
        src: k120,
        alt: "Keyboard K120",
        title: "Keyboard Logitech K120",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/Keyboard-Komputer-Logitech-K120-USB-Kayboard-K-120-Computer-Gaming-Game-i.99363915.19125346183?sp_atk=9ae0623a-f178-4854-9d31-a09d2e25310a&xptdk=9ae0623a-f178-4854-9d31-a09d2e25310a",
        topedLink: "https://www.tokopedia.com/superinkjkt/keyboard-komputer-logitech-k120-usb-kayboard-k-120-computer-gaming-ori?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 9,
        src: h111,
        alt: "Headset Logitech H111",
        title: "Headset Logitech H111",
        desc: "Stereo Headset, Headset multi perangkat",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/HEADSET-LOGITECH-H111-STEREO-BUSINESS-HEADSET-i.99363915.29560796982?sp_atk=4571daa3-6f54-4302-adde-42854c857711&xptdk=4571daa3-6f54-4302-adde-42854c857711",
        topedLink: "https://www.tokopedia.com/superinkjkt/headset-logitech-h111-stereo-business?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 10,
        src: r400,
        alt: "Pointer R400",
        title: "Pointer Logitech R400",
        desc: "Logitech R 400 Wireless Presenter dengan Laser",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/LASER-POINTER-LOGITECH-R400-WIRELESS-PRESENTER-R400-Wireless-Laser-Merah-Original-Garansi-Resmi-i.99363915.26810797920?sp_atk=2e60c1e4-ad55-4a3f-8c53-8c682a34b274&xptdk=2e60c1e4-ad55-4a3f-8c53-8c682a34b274",
        topedLink: "https://www.tokopedia.com/superinkjkt/pointer-logitech-r400-laser-pointer-wirelles-presenter-r400?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 11,
        src: k150,
        alt: "HP 150 Wired Keyboard",
        title: "HP 150 Wired Keyboard",
        desc: "Untuk Windows XP, Vista, 7, 8, 10, 11",
        category: "keyboard",
        shopeeLink: "https://shopee.co.id/Keyboard-HP-K150-WIRED-Mouse-HP-150-original-MK150-Wired-i.99363915.25134470165?sp_atk=3ee74ef4-cd7a-4e61-9014-0d50753337fa&xptdk=3ee74ef4-cd7a-4e61-9014-0d50753337fa",
        topedLink: "https://www.tokopedia.com/superinkjkt/keyboard-hp-k150-wired-original?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 12,
        src: kingston,
        alt: "Kingston Flashdisk",
        title: "Flashdisk Kingston 32GB/64GB/128GB",
        desc: "Single Pack, USB 3.2 Gen 1, 5-year warranty",
        category: "flashdisk",
        shopeeLink: "https://shopee.co.id/Flashdisk-Kingston-32GB-64GB-128GB-Original-100--i.99363915.18003493482?sp_atk=85928b71-385d-44aa-91b4-87df44fad1e7&xptdk=85928b71-385d-44aa-91b4-87df44fad1e7",
        topedLink: "https://www.tokopedia.com/superinkjkt/flashdisk-kingstone-32gb-64gb-128gb-original-100-64-gb?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 13,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 14,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 15,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 16,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 17,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 18,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 19,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 20,
        src: pita,
        alt: "pita",
        title: "Ribbon Cartridge 1",
        desc: "Lorem ipsum dolor sit amet aliqua.",
        category: "ribbonCartridge",
        shopeeLink: "",
        topedLink: "",
        tiktokLink: ""
    },
]

export default products