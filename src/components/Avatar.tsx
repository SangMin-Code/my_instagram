type Size= 'sm'|'lg'|'md'|'xl';

type Props = {
    image?:string | null ;
    size?:Size; 
    highlight?:boolean }

export default function Avatar({image,size='lg',highlight=false}:Props){
    return(
        <div className={getContainerStyle(size, highlight)}>
            {/* 외부 url사용, resource의 정확한 url을 외부 확인안될때 */}
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img className={`object-cover rounded-full bg-white ${getImageSizeStyle(size).container}`} 
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
    return `${base} ${hightLiteStyle} ${getImageSizeStyle(size).image} `
}


type ImageSizeStyle = {
    container:string;
    image:string;
}

function getImageSizeStyle(size:Size):ImageSizeStyle{
    switch(size){
        case 'sm': 
            return {
                container:'w-9 h-9', 
                image:'w-[34px] h-[34px] p-[0.1rem]'};
        case 'md': 
            return {
                container:'w-11 h-11',
                image:'w-[42px] h-[42px] p-[0.1rem]'};
        case 'lg': 
            return {
                container:'w-[68px] h-[68px]',
                image:'w-16 h-16 p-[0.2rem]'};
        case 'xl' :
            return {
                container:'w-[142px] h-[142px]',
                image:'w-[138px] h-[138px] p-[0.3rem]'};
        default:
            throw new Error(`Unsupported Type size ${size}`)
    }
}
