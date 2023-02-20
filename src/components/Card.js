import Image from "next/image";
import Select from "@/components/Select";

export default function Card() {
    return (
        <div className='inline-block mr-[18.67px] mt-7'>
            <Image src='/card_image.svg' width={182} height={182} alt='card'></Image>
            <Select />
        </div>
    )
}