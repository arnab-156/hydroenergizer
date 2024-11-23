import Link from 'next/link';
import type { NextPage } from 'next';

export type OutlineButtonComponent = {
    title: string;
    // onClick?: () => {};
    url: string;
    backgroundColor: string;
    textColor?: string;
}


const OutlinedButton: NextPage<OutlineButtonComponent> = ({
    title,
    url,
    backgroundColor,
    textColor = "commanderBlue",
}) => {
    return (
        <div className={`border rounded-md border-${backgroundColor}`}>
            <Link className={
                `uppercase flex justify-center items-center rounded-md 
                text-${textColor} bg-${backgroundColor}
                scale-x-95 scale-y-90 
                p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out`}
                href={url}>
                {title}
            </Link>
        </div>
    )
}

export default OutlinedButton;