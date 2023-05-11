import reactDOM from "react-dom";

type Props = {
    children:React.ReactNode
}

export default function ModalPortal({children}:Props){
    // SSR 제외
    if(typeof window ==='undefined'){
        return null;
    }
    const node = document.getElementById('portal') as Element;

    return reactDOM.createPortal(children,node);

}