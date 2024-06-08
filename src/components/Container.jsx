import { twMerge } from "tailwind-merge";

function Container({ children, className = "" }) {
    return (
        <div className={twMerge("mx-auto max-w-[980px] px-6", className)}>
            {children}
        </div>
    );
}

export default Container;
