type Size= 'sm'|'lg'|'md';

type Props = {
    image?:string | null ;
    size?:Size; 
    highlight?:boolean }

export default function Avatar({image,size='lg',highlight=false}:Props){
    return(
        <div className={getContainerStyle(size, highlight)}>
            {/* 외부 url사용, resource의 정확한 url을 외부 확인안될때 */}
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img className={`object-cover rounded-full bg-white ${getImageSizeStyle(size)}`} 
                alt="user profile" 
                src={image ?? undefined}
                referrerPolicy="no-referrer"/>
        </div>
    )
}

function getContainerStyle(size:Size,highlight:boolean):string{
    const base = 'rounded-full flex justify-center items-center';
    const hightLiteStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
                                    :'';
    return `${base} ${hightLiteStyle} ${getContainerSizeStyle(size)} `
}

function getContainerSizeStyle(size:Size):string{
    switch(size){
        case 'sm': return 'w-9 h-9';
        case 'md': return 'w-11 h-11';
        case 'lg': return 'w-[68px] h-[68px]'
    }
}

function getImageSizeStyle(size:Size):string{
    switch(size){
        case 'sm': return 'w-[34px] h-[34px] p-[0.1rem]';
        case 'md': return 'w-[42px] h-[42px] p-[0.1rem]'
        case 'lg': return 'w-16 h-16 p-[0.2rem]';
    }
}