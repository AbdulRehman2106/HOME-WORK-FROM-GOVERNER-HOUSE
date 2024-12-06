import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-zinc-200 hover:bg-white py-6">

        <div className="container mx-auto flex flex-col items-center space-y-4">

        <h1 className="text-3xl font-extrabold font-serif text-blue-400 hover:text-cyan-400 "><i>Abdul Rehman Car Dealer</i></h1>
        
        <div className="flex space-x-10">
            <a href="https://www.facebook.com/its.abdul.rehman.17?mibextid=ZbWKwL"
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"            
                width={56}
                height={56}
                className="hover:opacity-75"
            />
            </a>
            
            <a href="https://www.linkedin.com/in/abdul-rehman-2213012b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                alt="Linkedin"
                width={56}
                height={56}
                className="hover:opacity-75"
             />
            </a>

            <a href="https://github.com/AbdulRehman2106"
                target="_blank"
                rel="noopener noreferrer"
            >
            <Image
                src="data:image/png;base64,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"
                alt="Github"
                width={56}
                height={56}
                className="hover:opacity-75"
             />
            </a>
        </div>

        <nav className="flex flex-wrap justify-center space-x-4 text-md font-extrabold">
            <div className="hover:underline">
                About US
            </div>
            <div className="hover:underline">
                Services
            </div>
            <div className="hover:underline">
                Contact
            </div>
            <div className="hover:underline">
                Privacy Policy
            </div>
        </nav>
                <p className="text-lg text-purple-800 hover:text-red-700"> &copy; 2024 Abdul Rehman Car Dealer. All rights reserved </p>
        </div>
        </footer>
    )
}