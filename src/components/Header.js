import Image from "next/image";

function Header() {
    return (
        <header>
            {/* Top nav */}
            <div>
                <div>
                    {/*Next.js image tag, it optimazes iamge*/}
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                    />
                </div>
            </div>

            {/* Bottom nav */}
            <div>

            </div>
        </header>
    )
}

export default Header
