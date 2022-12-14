import {
    AiFillTwitterSquare,
    AiFillLinkedin,
    AiFillGithub,
} from "react-icons/ai";

function Footer() {
    return (
        <footer className="flex px-24 py-6 bg-sky-50 text-center items-center">
            <p className="mr-auto text-lg">© 2022 Ali Murtaza</p>
            <div className="flex items-center w-1/5 justify-between">
                <p className="text-xl">Follow Me</p>
                <a
                    href="https://www.twitter.com/alymurtazamemon"
                    target="_blank"
                >
                    <AiFillTwitterSquare size="36" color="#00acee" />
                </a>
                <a
                    href="https://www.linkedin.com/in/alymurtazamemon"
                    target="_blank"
                >
                    <AiFillLinkedin size="36" color="#0A66C2" />
                </a>
                <a
                    href="https://www.github.com/alymurtazamemon"
                    target="_blank"
                >
                    <AiFillGithub size="36" color="#171515" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
