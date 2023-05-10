type Props = {
    image?:string | null ;
    size?:'sm'|'normal', 
    highlight?:boolean }

export default function Avatar({image,size='normal',highlight=false}:Props){
    return(
        <div className={getContainerStyle(size, highlight)}>
            {/* 외부 url사용, resource의 정확한 url을 외부 확인안될때 */}
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img className={`rounded-full bg-white ${getImageSizeStyle(size)}`} 
                alt="user profile" 
                src={image ?? undefined}
                referrerPolicy="no-referrer"/>
        </div>
    )
}

function getContainerStyle(size:string,highlight:boolean):string{
    const base = 'rounded-full flex justify-center items-center';
    const hightLiteStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
                                    :'';
    const sizeStyle = size ==='sm' ? 'w-9 h-9' : 'w-[68px] h-[68px]'
    return `${base} ${hightLiteStyle} ${sizeStyle} `
}

function getImageSizeStyle(size:string):string{
    return size === 'sm' ? 'w-[34px] h-[34px] p-[0.1rem]':' w-16 h-16 p-[0.2rem]';
}