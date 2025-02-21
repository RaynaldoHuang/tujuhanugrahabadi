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
 * 
 * From shopee:
 * 1. tinta, toner, ribbon, dan cartridge
 * 2. Printer dan proyektor
 * 3. kalkulator
 * 4. mouse, keyboard, headset, printer
 * 5. kertas
 * 6. lakban
 * 7. flaskdisk
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
        title: "Mouse Original Logitech B100",
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
        title: "Mouse Original Logitech M170",
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
        title: "Tinta CANON 745s/746s Warna Catridge Original",
        desc: "iP2870,iP2872,MG2470,MG2570,MG2970,MX497",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-CANON-745s-746s-Warna-Catridge-Original-iP2870-iP2872-MG2470-MG2570-MG2970-MX497-i.99363915.17268770533",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 14,
        src: pita,
        alt: "pita",
        title: "Tinta Epson 008",
        desc: "L15150 L15160 L6550 L6580 L3150 L5190",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Epson-008-Hitam-Warna-Original-untuk-Printer-L15150-L15160-L6550-L6580-L3150-L5190-i.99363915.27357668785?sp_atk=a13f0690-98d9-4b6e-be5b-ceb6699005a2",
        topedLink: "https://www.tokopedia.com/superinkjkt/tinta-epson-008-original-for-printer-l6550-l6580-l15150-l15160-black-45ea7?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 15,
        src: pita,
        alt: "pita",
        title: "TINTA CATRIDGE CANON PG 810/811",
        desc: "iP2770, iP2772",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TINTA-CATRIDGE-CANON-PG-810-811-Warna-Hitam-Original-iP2770-iP2772-i.99363915.17068726578?sp_atk=e0fda95d-967c-4e95-94f8-4a11df979bc5",
        topedLink: "https://www.tokopedia.com/superinkjkt/tinta-catridge-canon-pg-810-hitam-original-ip2770-ip2772-1730673782303065842?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 16,
        src: pita,
        alt: "Ribbon Cartridge",
        title: "RIBBON CARTRIDGE EPSON ERC-38",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/RIBBON-CARTRIDGE-EPSON-ERC-38-PITA-ORIGINAL-i.99363915.28458597674?sp_atk=2de4d95c-616d-4ed6-824b-714ba9fcbfde",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 17,
        src: pita,
        alt: "Printer",
        title: " ",
        desc: "PRINTHEAD HP MOH51AA/MOH50AA",
        category: "printer",
        shopeeLink: "https://shopee.co.id/PRINTHEAD-HP-MOH51AA-Black-MOH50AA-Color-Original-Printer-HP-DeskJet-GT-5810-and-5820-Ink-Tank-i.99363915.13692661582?sp_atk=0dcb60bf-35bb-4f39-9393-9b2fe5f099eb",
        topedLink: "https://www.tokopedia.com/superinkjkt/printhead-hp-moh51aa-moh50aa-colour-black-original-hitam?extParam=src%3Dshop%26whid%3D3280826&aff_unique_id=&channel=others&chain_key=",
        tiktokLink: ""
    },
    {
        id: 18,
        src: pita,
        alt: "Ink",
        title: "Tinta EPSON 003",
        desc: "Black, Cyan, Magenta, Yellow CMYK ",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-EPSON-003-Black-Cyan-Magenta-Yellow-CMYK-Original-100--i.99363915.16568826003?sp_atk=876134b7-3bdf-4d87-86b1-1e25b0b676d4",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 19,
        src: pita,
        alt: "Ink",
        title: "Tinta HP 682",
        desc: "Catridge 1216 2335 2336 2337 2775",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-HP-682-Black-Color-Original-Ink-Catridge-1216-2335-2336-2337-2775-i.99363915.15884705601?sp_atk=d27c37dd-a5e2-4a7a-930f-2f5d2ba10525",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 20,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer HP Original 680",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-HP-Original-680-Hitam-Black-Cartridge-Asli-Twin-Pack-Combo-2-Tri-Color-Colour-Warna-i.99363915.16868795114?sp_atk=35d45a7e-b433-41c3-82e4-34b508778d8d",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 21,
        src: pita,
        alt: "Ink",
        title: "Tinta EPSON 664",
        desc: "T6641 T6642 T6643T 6644",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Tinta-EPSON-664-Black-Cyan-Magenta-Yellow-T6641-T6642-T6643T-6644-Resmi-EPSON-INDONESIA-i.99363915.21903259562?sp_atk=9125c00b-cb71-49f8-8f38-a7baa7ecfc9b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 22,
        src: pita,
        alt: "Ink",
        title: "Tinta HP GT53 XL",
        desc: "HP115 315 415 520 580 615 670 720 750",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Tinta-HP-GT53-XL-GT-53-XL-Black-Original-untuk-Printer-HP115-315-415-520-580-615-670-720-750-i.99363915.28607245193?sp_atk=f58f6363-f6ff-4149-8c62-c139da3cfbe8",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 23,
        src: pita,
        alt: "Ribbon",
        title: "Pita EPSON LQ-310",
        desc: "C13S015639",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Ribbon-Cartridge-(-Pita-EPSON-)-LQ-310-(C13S015639)-Hitam-i.99363915.27769756271?sp_atk=694596a1-0c47-4229-96f3-d556b73aabb1",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 24,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 103 A/AD",
        desc: "W1103AD",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-103-A-AD-Original-W1103AD-i.99363915.21303476137?sp_atk=a744b9ae-acdb-404f-aa5b-3d96dc6c61db",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 25,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer Canon 71s",
        desc: "G1020 G2020 G3020 G3060",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-CANON-GI-71s-GI71s-GI-71s-G1020-G2020-G3020-G3060-Black-Cyan-Magenta-Yellow-i.99363915.15984694064?sp_atk=8a9aafbb-e5d0-49b9-ae67-7517a2ea581f",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 26,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer HP 803",
        desc: "1110, 1115, 2130, 3630, 4520, 3830, 4650",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-HP-803-Black-803-Colour-1Set-Original-1110-1115-2130-3630-4520-3830-4650-i.99363915.20103250030?sp_atk=0c56f3f6-88b5-4c29-9a1a-9528b1bdd981",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 27,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 416A",
        desc: "W2040A W2041A W2042A W2043A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-416A-Original-4-Varian-Warna-(CMYK)-W2040A-W2041A-W2042A-W2043A-i.99363915.18003440722?sp_atk=9db10483-657f-4cf0-a7df-dbf58afc6bd7",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 28,
        src: pita,
        alt: "Ink",
        title: "PRINTHEAD HP GT X4E75AA",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/PRINTHEAD-HP-GT-X4E75AA-Original-Warna-Black-i.99363915.20503418178?sp_atk=cd56b482-fcbd-47df-a49b-5fd273c6fcf5",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 29,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer HP 46",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-HP-46-1-Set-Original-i.99363915.19003263744?sp_atk=6f19b3df-4269-4b57-8e0f-0cffca8b3153",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 30,
        src: pita,
        alt: "Ink",
        title: "TINTA CATRIDGE CANON PG811",
        desc: "iP2770, iP2772",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TINTA-CATRIDGE-CANON-PG811-Colour-Original-iP2770-iP2772-i.99363915.24389279619?sp_atk=6aa769bb-e958-45f8-a856-a68e4df39295",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 31,
        src: pita,
        alt: "Ink",
        title: "TINTA HP 975XL",
        desc: "L0S09AA L0S00AA L0S03AA L0S06AA",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TINTA-HP-975XL-BK-C-M-Y-ORIGINAL-L0S09AA-L0S00AA-L0S03AA-L0S06AA-i.99363915.27607441795?sp_atk=2976d534-aff1-4896-b2ad-abe9d8fe55d4",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 32,
        src: pita,
        alt: "Ink",
        title: "Toner Printer HP Laserjet 119A",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-Printer-HP-Laserjet-119A-Original-4-Varian-Warna-(CMYK)-i.99363915.17169257936?sp_atk=b0351884-1137-42e5-a991-782c370f6a5e",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 33,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer HP 62 Original",
        desc: "5540, 5542, 5544, 5545, 5640, 5642, 5643, 5660, 5665, 7640, 7645.",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-HP-62-Original-1-Set-5540-5542-5544-5545-5640-5642-5643-5660-5665-7640-7645.-i.99363915.15184698797?sp_atk=5bfdbd25-46f9-4241-819f-5a8f7a87209c",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 34,
        src: pita,
        alt: "Ink",
        title: "Toner HP LaserJet 204A",
        desc: "CF510 CF511 CF512 CF513",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-LaserJet-204A-Black-Color-CF510-CF511-CF512-CF513-i.99363915.17869265474?sp_atk=b28540e5-19c1-464d-91c3-a04b21dc6b5f",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 35,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer HP GT52/ GT53 90ml",
        desc: "HP115 315 415 520 580 615 670 720 750",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-HP-GT52-GT53-90ml-CMYK-Original-HP115-315-415-520-580-615-670-720-750-i.99363915.17769220173?sp_atk=becb67ce-c28e-4cec-9311-72a250a45032",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 36,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 76A",
        desc: "CF276A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-76A-(CF276A)-Black-Original-i.99363915.17469240295?sp_atk=531d0d32-4c4b-4b53-b15a-183bb6003c96",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 37,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 125A",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-125A-Original-4-Varian-Warna-(CMYK)-i.99363915.13292700136?sp_atk=c10fb92a-d948-4f61-9cf6-e67f25259ab3",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 38,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 12A",
        desc: "Q2612A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-12A-Black-Original-(Q2612A)-i.99363915.20903423019?sp_atk=f3420d99-cae3-4963-b17d-93befbf8e240",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 39,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 53A",
        desc: "Q7553A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-53A-Black-Original-(Q7553A)-i.99363915.14484899976?sp_atk=6cb352b6-bcd6-42e0-a461-53195d306158",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 40,
        src: pita,
        alt: "Ink",
        title: "Toner HP Laserjet 85A",
        desc: "CE285A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-HP-Laserjet-85A-Black-Original-(CE285A)-i.99363915.10695777770?sp_atk=4447988a-b812-451f-8284-fbceb2a3e7a7",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 41,
        src: pita,
        alt: "Ribbon Cartridge",
        title: "CARTRIDGE TINTA HP 955 XL",
        desc: "HP 8210, 8216, 7740, 8710, 8720, 8730,8740",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/CARTRIDGE-TINTA-HP-955-XL-ORI-BLACK-CYAN-MAGENTA-YELLOW-HP-8210-8216-7740-8710-8720-8730-8740-i.99363915.11095724230?sp_atk=433a7703-98c9-4ff0-9cd0-b1000b4fb9a2",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 42,
        src: pita,
        alt: "Ink",
        title: "TONER HP LASERJET 131A",
        desc: "CF210A CF211A CF212A CF212A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TONER-HP-LASERJET-131A-ORIGINAL-CF210A-CF211A-CF212A-CF212A-i.99363915.25284521959?sp_atk=b66e2b30-3731-4678-9700-8aaf920ec61f",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 43,
        src: pita,
        alt: "Ink",
        title: "Tinta Epson 774",
        desc: "",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Epson-774-black-Original-i.99363915.29961923886?sp_atk=aa75c226-3526-469a-a3a3-8c250af1719b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 44,
        src: pita,
        alt: "Ink",
        title: "Toner Printer HP Laserjet 126A",
        desc: "CE310A CE311A CE312A CE313A",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Toner-Printer-HP-Laserjet-126A-Original-4-Varian-Warna-(CMYK)-CE310A-CE311A-CE312A-CE313A-i.99363915.16069376144?sp_atk=8ba345a0-9135-48ab-8547-ae153390fa95",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 45,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer Cartridge HP 704",
        desc: "K010a",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Printer-Cartridge-HP-704-Black-Tri-Color-1Set-Original-K010a-i.99363915.12192574769?sp_atk=a37669cf-077a-48cf-a951-8c56a810b78f",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 46,
        src: pita,
        alt: "Ink",
        title: "PRINTHEAD CANON BH7/CH7",
        desc: "CA91 CA92",
        category: "ink",
        shopeeLink: "https://shopee.co.id/PRINTHEAD-CANON-BH7-CH7-Warna-Hitam-CA91-CA92-i.99363915.20003220948?sp_atk=9f76754e-5aa4-47a1-8040-acc94faf6eae",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 47,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer CANON 790",
        desc: "G1000, G2000, G3000, G4000, G1010, G2010, G3010, G4010",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TInta-Printer-CANON-790-Original-Black-G1000-G2000-G3000-G4000-G1010-G2010-G3010-G4010-i.99363915.17768804886?sp_atk=63e7ca8e-734b-4fae-a70b-0bff305da83a",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 48,
        src: pita,
        alt: "Ink",
        title: "Tinta Printer CANON 790",
        desc: "G1000, G2000, G3000, G4000, G1010, G2010, G3010, G4010",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TInta-Printer-CANON-790-Original-Black-G1000-G2000-G3000-G4000-G1010-G2010-G3010-G4010-i.99363915.17768804886?sp_atk=63e7ca8e-734b-4fae-a70b-0bff305da83a",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 49,
        src: pita,
        alt: "Ink",
        title: "TINTA CATRIDGE HP 678",
        desc: "HP1515 2515 2545 2645 3545 4515 4645",
        category: "ink",
        shopeeLink: "https://shopee.co.id/TINTA-CATRIDGE-HP-678-Ink-Catridge(CZ108AA)-For-Printer-HP1515-2515-2545-2645-3545-4515-4645-i.99363915.17469216662?sp_atk=021a62bb-5753-4208-98cf-d261433d3fe6",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 50,
        src: pita,
        alt: "Ribbon Cartridge",
        title: "Pita EPSON Ribbon LQ 2190/2180/2070/2080",
        desc: "C13S015531",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Pita-EPSON-Ribbon-LQ-2190-2180-2070-2080-(C13S015531)-Original-i.99363915.24839113761?sp_atk=c838364b-1089-4ff4-a863-533bef803907",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 51,
        src: pita,
        alt: "Ink",
        title: "Tinta HP 682 ",
        desc: "1216 2335 2336 2337 2775",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-HP-682-Black-Color-Original-Ink-Catridge-1216-2335-2336-2337-2775-i.99363915.15884705601?sp_atk=6ee8aa59-d8ce-498b-bba5-cd730a012809",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 52,
        src: pita,
        alt: "Ink",
        title: "Tinta HP 802",
        desc: "CH561ZZ CH562ZZ",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-HP-802-Black-Hitam-Colour-Warna-Original-CH561ZZ-CH562ZZ-i.99363915.17469221694?sp_atk=dcb5a52c-f1dc-48da-86ed-579370c52c1b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 53,
        src: pita,
        alt: "Ink",
        title: "Tinta Brother D60",
        desc: "DCP-T310 DCP-T510W DCP-T710W MFC-T810W MFC-T910DW",
        category: "ink",
        shopeeLink: "https://shopee.co.id/Tinta-Brother-D60-black-untuk-Printer-DCP-T310-DCP-T510W-DCP-T710W-MFC-T810W-MFC-T910DW-i.99363915.25284460942?sp_atk=bf19611c-9f33-4f78-8afd-13f62633a130",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 54,
        src: pita,
        alt: "pita",
        title: "Tinta Brother D60 bk BT5000",
        desc: "T310/T420W/T510/T520W/T710W/T810W/T910DW",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Tinta-Brother-D60-bk-BT5000-cmy-untuk-Printer-T310-T420W-T510-T520W-T710W-T810W-T910DW-i.99363915.22512760957?sp_atk=c493f754-2e3b-4d0f-b08b-0c3fbe28e71b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 55,
        src: pita,
        alt: "pita",
        title: "Kassen K330",
        desc: "Cash drawer",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Cash-drawer-Kassen-K330-Black-Laci-Kasir-i.99363915.24936050140?sp_atk=48ad6fc8-e6c6-4d2a-ae3f-1e41bca9db77",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 56,
        src: pita,
        alt: "pita",
        title: "Paket Printer Iware C58BT + Cash Drawer + Kertas Thermal",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Paket-Printer-Iware-C58BT-Cash-Drawer-Kertas-Thermal-i.99363915.24639196373?sp_atk=44e98d35-189e-4569-8182-88dd5ca0b41d",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 57,
        src: pita,
        alt: "pita",
        title: "Kaizen-Tech KZ 58BT",
        desc: "Usb Bluetooth POS Original",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-Kasir-Kaizen-Tech-KZ-58BT-Printer-Thermal-Usb-Bluetooth-POS-Original-i.99363915.29119800904?sp_atk=9d48d9ee-aa3c-4b44-b768-d612281c5375",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 58,
        src: pita,
        alt: "pita",
        title: "IWARE C58-BT Printer Kasir +Kertas Thermal +Cash Drawer +Kalkulator Casio MX12B",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Paket-Printer-IWARE-C58-BT-Printer-Kasir-Kertas-Thermal-Cash-Drawer-Kalkulator-Casio-MX12B-i.99363915.24239200460?sp_atk=5e1486e5-021f-43ee-9658-dee020661ae3",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 59,
        src: pita,
        alt: "pita",
        title: "EPSON Printer Epson Dotmatrix LQ310",
        desc: "LQ-310 LQ310 LQ 310",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/EPSON-Printer-Epson-Dotmatrix-LQ310-EPSON-LQ-310-LQ310-LQ-310-Original-Garansi-Resmi-Jakarta-i.99363915.27052291304?sp_atk=7ab6e00e-245e-4eda-9b5f-35d579b44af6",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 60,
        src: pita,
        alt: "pita",
        title: "PRINTER KASIR IWARE THERMAL C58BT",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/PRINTER-KASIR-IWARE-THERMAL-C58BT-i.99363915.24535831824?sp_atk=0f9c3f46-8cb4-425b-bdc4-8532f5c9843b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 61,
        src: pita,
        alt: "pita",
        title: "Printer Thermal Mobile Iware MP-58SB 58mm",
        desc: "Bluetooth Android Ios",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-Thermal-Mobile-Iware-MP-58SB-58mm-Bluetooth-Android-Ios-i.99363915.24089037059?sp_atk=d6b5ddd2-f577-4dfb-909d-803731aa5489",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 62,
        src: pita,
        alt: "pita",
        title: "KASSEN DT 640 100x150mm A6",
        desc: "IOS Android Windows Bluetooth",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Tinta-Brother-D60-bk-BT5000-cmy-untuk-Printer-T310-T420W-T510-T520W-T710W-T810W-T910DW-i.99363915.22512760957?sp_atk=c493f754-2e3b-4d0f-b08b-0c3fbe28e71b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 63,
        src: pita,
        alt: "pita",
        title: "KASSEN DT-369 Printer Label Thermal",
        desc: "USB Bluetooth 80 mm cocok untuk 78x100mm",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-Bluetooth-KASSEN-DT-369-Printer-Label-Thermal-USB-Bluetooth-80-mm-cocok-untuk-78x100mm-i.99363915.29109310385?sp_atk=e5dfcd39-725a-4dea-826b-5885dda81727",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 64,
        src: pita,
        alt: "pita",
        title: "Printer Epson L3250",
        desc: "Print Scan Copy Wireless Ecotank All-In-One",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-Epson-L3250-Print-Scan-Copy-Wireless-Ecotank-All-In-One-i.99363915.25431950991?sp_atk=cccc43ec-28f2-4ca2-bdd6-6af2f2650b81",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 65,
        src: pita,
        alt: "pita",
        title: "EPSON EcoTank L121 A4 ",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-EPSON-L121-ECO-TANK-EPSON-EcoTank-L121-A4-Print-Saja-i.99363915.26302290743?sp_atk=c048082b-288c-4c4c-8f01-89217d1aada5",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 66,
        src: pita,
        alt: "pita",
        title: "Printer EPSON L3210 All In One",
        desc: "Print Scan Copy Pengganti Epson L3110 Printer Eco Tank",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Tinta-Brother-D60-bk-BT5000-cmy-untuk-Printer-T310-T420W-T510-T520W-T710W-T810W-T910DW-i.99363915.22512760957?sp_atk=c493f754-2e3b-4d0f-b08b-0c3fbe28e71b",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 67,
        src: pita,
        alt: "pita",
        title: "Kassen P299",
        desc: "BLUETOOTH PPOB THERMAL 58MM",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/KASSEN-PRINTER-BLUETOOTH-P299-KASIR-PPOB-THERMAL-58MM-TERMURAH-SUPPORT-CASH-DRAWER-i.99363915.27159296589?sp_atk=f07bc37d-1e67-4d49-bc60-39ea5743390e",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 68,
        src: pita,
        alt: "pita",
        title: "Printer EPSON ECOTANK L14150",
        desc: "WIFI",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Printer-EPSON-ECOTANK-L14150-WIFI-(A3-ONLY-PRINT-SIMPLEX)-Print-Scan-Copy-Fax-Wifi-Garansi-Resmi-i.99363915.26307211743?sp_atk=8a1ec03d-e2cd-44ce-8549-a9da7f86be4c",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 69,
        src: pita,
        alt: "pita",
        title: "Kertas Label Barcode 100 X 150 Kertas Stiker Thermal 100x150 mm (500 pcs)",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Label-Barcode-100-X-150-Kertas-Stiker-Thermal-100x150-mm-(500-pcs)-i.99363915.26120830162?sp_atk=74450cbf-8957-4efb-aa8c-8fb2bd06fac5",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 70,
        src: pita,
        alt: "pita",
        title: "Kertas Label Thermal 78x100 mm 78 x 100 isi 300 pcs",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Label-Thermal-78x100-mm-78-x-100-isi-300-pcs-i.99363915.28770826111?sp_atk=f6a31251-00d0-41fa-bfe7-6f25495577e9",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 71,
        src: pita,
        alt: "pita",
        title: "Kertas Label Barcode Thermal 78x100 mm Label Resi Pengiriman isi 300 pcs",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Label-Barcode-Thermal-78x100-mm-Label-Resi-Pengiriman-isi-300-pcs-i.99363915.25938276419?sp_atk=c99b59bb-d3e7-4af9-a89d-a38595bd6b6d",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 72,
        src: pita,
        alt: "pita",
        title: "Kertas Thermal 57x30mm",
        desc: "Printer Kasir Depot / Restaurant / Cafe",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Thermal-57x30mm-Printer-Kasir-Depot-Restaurant-Cafe-i.99363915.28270990425?sp_atk=25bc2a9d-c1a3-49e4-9e99-223e0d94bcde",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 73,
        src: pita,
        alt: "pita",
        title: "Kertas Label Thermal [100 X 100] Kertas Stikcer Barcode 100x100 Isi 500line",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Label-Thermal-100-X-100-Kertas-Stikcer-Barcode-100x100-Isi-500line-i.99363915.29470817663?sp_atk=ab664c4b-203c-4b73-8918-c42ecceecbac",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 74,
        src: pita,
        alt: "pita",
        title: "1 DUS Kertas Thermal Sticker 78x100 untuk Label Resi Barcode 1 dus 36 pcs",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/1-DUS-Kertas-Thermal-Sticker-78x100-untuk-Label-Resi-Barcode-1-dus-36-pcs-i.99363915.27020112465?sp_atk=8884cdfd-6682-4158-b53a-00370650602e",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 75,
        src: pita,
        alt: "pita",
        title: "Kertas Struk Kasir NCR 2 ply 75 x 60 mm Paper Thermal Roll",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Kertas-Struk-Kasir-NCR-2-ply-75-x-60-mm-Paper-Thermal-Roll-i.99363915.28121094205?sp_atk=fe65bc37-de32-4079-ae7d-ea38b24a3780",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 76,
        src: pita,
        alt: "pita",
        title: "Lakban Selotip Bening 72 Yard/90 Yard/100 Yard x 45 mm murah Kuat Tebal",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Lakban-Selotip-Bening-72-Yard-90-Yard-100-Yard-x-45-mm-murah-Kuat-Tebal-i.99363915.26320522148?sp_atk=807829fa-38d8-4df6-b947-71cf1296bd9c",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 77,
        src: pita,
        alt: "pita",
        title: "Lakban Selotip Coklat 72 yard x 45 mm /lakban Tebal/Lakban murah/Lakban Kuat/Lakban Tebal",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Lakban-Selotip-Coklat-72-yard-x-45-mm-lakban-Tebal-Lakban-murah-Lakban-Kuat-Lakban-Tebal-i.99363915.24289438809?sp_atk=2a75d1b4-da4d-4f7b-a614-0e86c9bd1bc8",
        topedLink: "",
        tiktokLink: ""
    },
    {
        id: 78,
        src: pita,
        alt: "pita",
        title: "Lakban Selotip Coklat 72 yard x 45 mm /lakban Tebal/Lakban murah/Lakban Kuat/Lakban Tebal",
        desc: "",
        category: "ribbonCartridge",
        shopeeLink: "https://shopee.co.id/Lakban-Selotip-Coklat-72-yard-x-45-mm-lakban-Tebal-Lakban-murah-Lakban-Kuat-Lakban-Tebal-i.99363915.24289438809?sp_atk=2a75d1b4-da4d-4f7b-a614-0e86c9bd1bc8",
        topedLink: "",
        tiktokLink: ""
    },

]

export default products