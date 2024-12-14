import { useEffect, useRef } from "react";

export default function useOutsideClick(onClose, capturing = true) {
    const ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("click", handleClick, true,);

        return () => document.removeEventListener("click", handleClick, true, capturing);
    }, [onClose, capturing]);
    return ref;
}