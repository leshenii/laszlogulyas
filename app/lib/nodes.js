const nodes = [
    {
        "id": "14",
        "data": {
            "label": "Programozás",
            "progress": "done",
            "url": "https://www.inf.elte.hu/dstore/document/1030/Programoz%C3%A1s.pdf",
            "family": "programming",
            "id": "14"
        },
        "position": {
            "x": -210,
            "y": 60
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": 60
        },
        "dragging": false
    },
    {
        "id": "15",
        "data": {
            "label": "Imperatív programozás",
            "url": "https://www.inf.elte.hu/dstore/document/1031/Imperativ%20programoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "15"
        },
        "position": {
            "x": -210,
            "y": -15
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": -15
        },
        "dragging": false
    },
    {
        "id": "16",
        "data": {
            "label": "Számítógépes rendszerek",
            "url": "https://www.inf.elte.hu/dstore/document/1029/Sz%C3%A1m%C3%ADt%C3%B3g%C3%A9pes%20rendszerek.pdf",
            "family": "programming",
            "progress": "done",
            "id": "16"
        },
        "position": {
            "x": -210,
            "y": -90
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": -90
        },
        "dragging": false
    },
    {
        "id": "17",
        "data": {
            "label": "Funkcionális programozás",
            "url": "https://www.inf.elte.hu/dstore/document/1038/Funkcion%C3%A1lis%20programoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "17"
        },
        "position": {
            "x": -210,
            "y": -165
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": -165
        },
        "dragging": false
    },
    {
        "id": "18",
        "data": {
            "label": "Matematikai alapok",
            "url": "https://www.inf.elte.hu/dstore/document/1039/Matematikai%20alapok.pdf",
            "family": "math",
            "progress": "done",
            "id": "18"
        },
        "position": {
            "x": -210,
            "y": 120
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": 120
        },
        "dragging": false
    },
    {
        "id": "19",
        "data": {
            "label": "Web-fejlesztés",
            "url": "https://www.inf.elte.hu/dstore/document/1045/Web%20fejleszt%C3%A9s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "19"
        },
        "position": {
            "x": 40,
            "y": -150
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": -150
        },
        "dragging": false
    },
    {
        "id": "20",
        "data": {
            "label": "Operációs rendszerek",
            "url": "https://www.inf.elte.hu/dstore/document/1050/Oper%C3%A1ci%C3%B3s%20rendszerek.pdf",
            "family": "programming",
            "progress": "done",
            "id": "20"
        },
        "position": {
            "x": 540,
            "y": -90
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": -90
        },
        "dragging": false
    },
    {
        "id": "21",
        "data": {
            "label": "Programozási nyelvek (Java)",
            "url": "https://www.inf.elte.hu/dstore/document/1042/Programoz%C3%A1si%20nyelvek%20I..pdf",
            "family": "programming",
            "progress": "done",
            "id": "21"
        },
        "position": {
            "x": 40,
            "y": -55
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": -45
        },
        "dragging": false
    },
    {
        "id": "22",
        "data": {
            "label": "Analízis I.",
            "url": "https://www.inf.elte.hu/dstore/document/1048/Anal%C3%ADzis%20I.pdf",
            "family": "math",
            "progress": "done",
            "id": "22"
        },
        "position": {
            "x": 40,
            "y": 240
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": 240
        },
        "dragging": false
    },
    {
        "id": "23",
        "data": {
            "label": "Algoritmusok és adatszerkezetek I.",
            "url": "https://www.inf.elte.hu/dstore/document/1046/Algoritmusok%20%C3%A9s%20adatszerkezetek%20I.pdf",
            "family": "science",
            "progress": "done",
            "id": "23"
        },
        "position": {
            "x": 40,
            "y": 90
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": 90
        },
        "dragging": false
    },
    {
        "id": "24",
        "data": {
            "label": "Objektumelvű programozás",
            "url": "https://www.inf.elte.hu/dstore/document/1044/Objektum%20elv%C5%B1%20programoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "24"
        },
        "position": {
            "x": 40,
            "y": 15
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": 15
        },
        "dragging": false
    },
    {
        "id": "25",
        "data": {
            "label": "Diszkrét matematika I.",
            "url": "https://www.inf.elte.hu/dstore/document/1047/Diszkr%C3%A9t%20matematika%20I.pdf",
            "family": "math",
            "progress": "done",
            "id": "25"
        },
        "position": {
            "x": 40,
            "y": 165
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "dragging": false,
        "positionAbsolute": {
            "x": 40,
            "y": 165
        }
    },
    {
        "id": "26",
        "data": {
            "label": "Webprogramozás",
            "url": "https://www.inf.elte.hu/dstore/document/1036/Webprogramoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "26"
        },
        "position": {
            "x": 290,
            "y": -150
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 290,
            "y": -150
        },
        "dragging": false
    },
    {
        "id": "27",
        "data": {
            "label": "Programozási technológia",
            "url": "https://www.inf.elte.hu/dstore/document/1035/Programoz%C3%A1si%20technol%C3%B3gia.pdf",
            "family": "programming",
            "progress": "done",
            "id": "27"
        },
        "position": {
            "x": 290,
            "y": -15
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 290,
            "y": -15
        },
        "dragging": false
    },
    {
        "id": "28",
        "data": {
            "label": "Algoritmusok és adatszerkezetek II.",
            "url": "https://www.inf.elte.hu/dstore/document/1049/Algoritmusok%20%C3%A9s%20adatszerkezetek%20II..pdf",
            "family": "science",
            "progress": "done",
            "id": "28"
        },
        "position": {
            "x": 290,
            "y": 90
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 290,
            "y": 90
        },
        "dragging": false
    },
    {
        "id": "29",
        "data": {
            "label": "Diszkrét modellek alkalmazásai",
            "url": "https://www.inf.elte.hu/dstore/document/1077/Diszkr%C3%A9t%20modellek%20alkalmaz%C3%A1sai.pdf",
            "family": "math",
            "progress": "done",
            "id": "29"
        },
        "position": {
            "x": 290,
            "y": 225
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 290,
            "y": 225
        },
        "dragging": false
    },
    {
        "id": "30",
        "data": {
            "label": "Analízis II.",
            "url": "https://www.inf.elte.hu/dstore/document/1076/Anal%C3%ADzis%20II%20%28szoftverfejleszt%C5%91%29.pdf",
            "family": "math",
            "progress": "active",
            "id": "30"
        },
        "position": {
            "x": 290,
            "y": 300
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 290,
            "y": 300
        },
        "dragging": false
    },
    {
        "id": "31",
        "data": {
            "label": "Innovatív vállalkozás menedzsment",
            "url": "https://www.inf.elte.hu/dstore/document/1041/Innovat%C3%ADv%20v%C3%A1llalkoz%C3%A1s%20menedzsment.pdf",
            "family": "other",
            "progress": "done",
            "id": "31"
        },
        "position": {
            "x": -210,
            "y": 210
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": -210,
            "y": 210
        },
        "dragging": false
    },
    {
        "id": "32",
        "data": {
            "label": "Jogi ismeretek",
            "url": "https://www.inf.elte.hu/dstore/document/1055/Jogi%20ismeretek.pdf",
            "family": "other",
            "progress": "done",
            "id": "32"
        },
        "position": {
            "x": 40,
            "y": 300
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 40,
            "y": 300
        },
        "dragging": false
    },
    {
        "id": "33",
        "data": {
            "label": "Kliensoldali webprogramozás",
            "url": "https://www.inf.elte.hu/dstore/document/1089/Kliensoldali%20webprogramoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "33"
        },
        "position": {
            "x": 540,
            "y": -240
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": -240
        },
        "dragging": false
    },
    {
        "id": "34",
        "data": {
            "label": "Szoftvertechnológia",
            "url": "https://www.inf.elte.hu/dstore/document/1080/Szoftvertechnol%C3%B3gia%20%28szoftverfejleszt%C5%91%29.pdf",
            "family": "programming",
            "progress": "done",
            "id": "34"
        },
        "position": {
            "x": 540,
            "y": -15
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": -15
        },
        "dragging": false
    },
    {
        "id": "35",
        "data": {
            "label": "Adatbázisok I.",
            "url": "https://www.inf.elte.hu/dstore/document/1051/Adatb%C3%A1zisok%20I..pdf",
            "family": "science",
            "progress": "done",
            "id": "35"
        },
        "position": {
            "x": 540,
            "y": 90
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": 90
        },
        "dragging": false
    },
    {
        "id": "36",
        "data": {
            "label": "A számításelmélet alapjai I.",
            "url": "https://www.inf.elte.hu/dstore/document/1078/A%20sz%C3%A1m%C3%ADt%C3%A1selm%C3%A9let%20alapjai%20I..pdf",
            "family": "science",
            "progress": "active",
            "id": "36"
        },
        "position": {
            "x": 540,
            "y": 195
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": 195
        },
        "dragging": false
    },
    {
        "id": "37",
        "data": {
            "label": "Numerikus módszerek",
            "url": "https://www.inf.elte.hu/dstore/document/1079/Numerikus%20m%C3%B3dszerek%20I-F.pdf",
            "family": "math",
            "progress": "future",
            "id": "37"
        },
        "position": {
            "x": 540,
            "y": 270
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": 270
        },
        "dragging": false
    },
    {
        "id": "38",
        "data": {
            "label": "Konkurens programozás",
            "url": "https://www.inf.elte.hu/dstore/document/1052/Konkurens%20programoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "active",
            "id": "38"
        },
        "position": {
            "x": 790,
            "y": -60
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": -60
        },
        "dragging": false
    },
    {
        "id": "39",
        "data": {
            "label": "Mesterséges intelligencia",
            "url": "https://www.inf.elte.hu/dstore/document/1054/Mesters%C3%A9ges%20intelligencia.pdf",
            "family": "science",
            "progress": "future",
            "id": "39"
        },
        "position": {
            "x": 790,
            "y": 180
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": 180
        },
        "dragging": false
    },
    {
        "id": "40",
        "data": {
            "label": "Adatbázisok II.",
            "url": "https://www.inf.elte.hu/dstore/document/1081/Adatb%C3%A1zisok%20II..pdf",
            "family": "science",
            "progress": "active",
            "id": "40"
        },
        "position": {
            "x": 790,
            "y": 120
        },
        "type": "custom",
        "width": 150,
        "height": 39,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": 120
        },
        "dragging": false
    },
    {
        "id": "41",
        "data": {
            "label": "Telekommunikációs hálózatok",
            "url": "https://www.inf.elte.hu/dstore/document/1053/Telekommunik%C3%A1ci%C3%B3s%20h%C3%A1l%C3%B3zatok.pdf",
            "family": "programming",
            "progress": "done",
            "id": "41"
        },
        "position": {
            "x": 790,
            "y": 45
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": 45
        },
        "dragging": false
    },
    {
        "id": "42",
        "data": {
            "label": "A számításelmélet alapjai II.",
            "url": "https://www.inf.elte.hu/dstore/document/1082/A%20sz%C3%A1m%C3%ADt%C3%A1selm%C3%A9let%20alapjai%20II..pdf",
            "family": "science",
            "progress": "future",
            "id": "42"
        },
        "position": {
            "x": 790,
            "y": 255
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": 255
        },
        "dragging": false
    },
    {
        "id": "43",
        "data": {
            "label": "Valószínűségszámítás és statisztika",
            "url": "https://www.inf.elte.hu/dstore/document/1083/Val%C3%B3sz%C3%ADn%C5%B1s%C3%A9gsz%C3%A1m%C3%ADt%C3%A1s%20%C3%A9s%20statisztika%20%28F%29.pdf",
            "family": "math",
            "progress": "future",
            "id": "43"
        },
        "position": {
            "x": 790,
            "y": 330
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": 330
        },
        "dragging": false
    },
    {
        "id": "44",
        "data": {
            "label": "Full stack webprogramozás",
            "url": "https://www.inf.elte.hu/dstore/document/1091/Full-stack%20webprogramoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "44"
        },
        "position": {
            "x": 790,
            "y": -195
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 790,
            "y": -195
        },
        "dragging": false
    },
    {
        "id": "45",
        "data": {
            "label": "Szerveroldali webprogramozás",
            "url": "https://www.inf.elte.hu/dstore/document/1090/Szerveroldali%20webprogramoz%C3%A1s.pdf",
            "family": "programming",
            "progress": "done",
            "id": "45"
        },
        "position": {
            "x": 540,
            "y": -165
        },
        "type": "custom",
        "width": 150,
        "height": 57,
        "selected": false,
        "positionAbsolute": {
            "x": 540,
            "y": -165
        },
        "dragging": false
    }
]

export default nodes;