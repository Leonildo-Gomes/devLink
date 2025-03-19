import { ReactNode } from 'react';
interface SocialProps {
    url: string;
    children: ReactNode;

}
export function  Social({ url, children}: SocialProps) {
    return (
        <a
           href={ url}
           target="_blank"
           rel="noopener noreferrer"
           
           className="transition-all duration-300 ease-in-out transform hover:scale-110"
        >
             {  children}
        </a>
    )

}