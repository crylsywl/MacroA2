import { Link } from "react-router-dom";
const ArtikelSamping = (props) => {
    const {Img,Judul,To} = props;
    return (
        <div>
             <div className="self-stretch h-[119px] pl-[13px] pr-[21px] py-[15px] border-b border-black flex-col justify-start items-start gap-2.5 flex">
                 <div className="justify-start items-start gap-4 inline-flex">
                 <img className="w-[90px] self-stretch rounded-[10px]" src={Img} />
                <div className="w-[223px] flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[19px]">{Judul}</div>
                    <div className="w-[101px] border-b border-black justify-center items-center gap-2.5 inline-flex">
                        <Link to={To} className="w-[101px] text-black text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight hover:text-orange-600 transition cursor-pointer ">Selengkapnya</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
 }
 export default ArtikelSamping;