import Link from "next/link";
import Image from "next/image";

import brasil from "@/img/bandeiras/brasil.jpg"
import usa from "@/img/bandeiras/estados-unidos.png"

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link href={""}></Link></li>
                <li><Link href={""}></Link></li>
                <li><Link href={""}></Link></li>
                <li><Link href={""}></Link></li>
                <li><Image src={brasil} alt="Selecionar lingua"/></li>
            </ul>
        </nav>
    </header>
  )
}
