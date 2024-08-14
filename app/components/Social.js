import {LinkedInIcon, Logo} from "../icons/Icons.js"
import {MailIcon} from "../icons/Icons.js";
import {FacebookIcon} from "../icons/Icons.js";
import {InstagramIcon} from "../icons/Icons.js";
import {LinkPreview} from "./link-preview";

export default function Social() {

    const words = [
        "Szia!", // Hungarian
        "Hi!", // English
        "Hallo!", // German
        "Ciao!", // Italian
        "Hola!", // Spanish
        "Salut!", // French
        "Oi!", // Portuguese
        "Hej!", // Swedish
        "Hei!", // Norwegian
        "Hej!", // Danish
        "Tere!", // Estonian
        "Sveiki!", // Latvian
        "Labas!", // Lithuanian
        "Cześć!", // Polish
        "Ahoj!", // Czech
        "Привет!", // Russian
        "Здраво!", // Serbian
        "Zdravo!", // Croatian
        "Pozdrav!", // Bosnian
        "Merhaba!", // Turkish
        "Γεια!", // Greek
        "Hallo!", // Dutch
        "Hei!", // Finnish
        "Halló!", // Icelandic
        "Dia duit!", // Irish
        "Hai!", // Romanian
        "Привет!", // Bulgarian
        "Ahoj!", // Slovak
        "Zdravo!", // Slovenian
        "Shalom!", // Hebrew
        "Salam!", // Arabic
    ];

    return (
        <>
            <div className="flex flex-row gap-4 w-full justify-center items-center pb-3 animate__animated animate__fadeInUp"
                 style={{zIndex: 3, position: "fixed", bottom: "10px"}}>
                <LinkPreview url="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-guly%C3%A1s-630407246/">
                    <LinkedInIcon/>
                </LinkPreview>
                <LinkPreview url="mailto:gulyas_laszlo@outlook.com" imageSrc="/mailto.png" isStatic>
                    <MailIcon/>
                </LinkPreview>
                <LinkPreview url="https://www.facebook.com/glacig/" >
                    <FacebookIcon/>
                </LinkPreview>
                <LinkPreview url="https://www.instagram.com/_g_laci_?igsh=M2R4MXVmZjh6d3Q1">
                    <InstagramIcon/>
                </LinkPreview>
            </div>
            <div className="flex w-full pr-2 justify-end" style={{zIndex: 2, position: "fixed", bottom: "10px"}}>
                <Logo/>
            </div>
        </>
    )
}