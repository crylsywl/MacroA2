import Button from '../../Components/Elements/Button/Index'
import Navbar from '../../Components/Elements/Navbar/Navbar'
import RadioButton from '../../Components/Elements/RadioButton/RadioButton'
import CardArtikel from '../../Components/Elements/CardArtikel/CardArtikel'
import Footer from '../../Components/Elements/Footer/Footer'
const Artikel = () =>{
    const RadioButtonOpts = [
    
        {
          label: 'All',
          value: 'all'
        },
        {
          label: 'Science',
          value: 'Science'
        },
        {
          label: 'Engineer',
          value: 'Engineer'
        },
        {
          label: 'Industrial',
          value: 'Industrial'
        },
        {
          label: 'Data',
          value: 'Data'
        },
        {
            label: 'Designer',
            value: 'Designer'
          },
      ]
    return (
        <div>
            <Navbar />
            <img src="/src/assets/artikelbanner.png" alt="" className="w-full h-[300px] object-cover mt-[62px]" />
            <div className='flex justify-center items-center bg-[#fffff0]'>
                <div className='w-full px-[150px] absolute top-[340px]'>
                    <div className="grow shrink basis-0 self-stretch p-1 justify-start items-center flex">
                        <div className='items-center shadow-md rounded-tl-md rounded-bl-md p-1 bg-[#fffff0] flex'>
                        <img src="/src/assets/menu.svg" className="w-10 h-10 flex-col bg-[#fffff0] justify-center items-center gap-2.5 inline-flex"/>
                        </div>
                        <div className="grow shrink basis-0 shadow-md self-stretch bg-[#fffff0] justify-start items-center gap-2.5 flex">
                            <input
                                type="text"
                                name="search" 
                                placeholder='Hinted search text...'  
                                className="text-[#49454f] text-sm font-bold font-['Plus Jakarta Sans'] border-black px-[20px] leading-[19px] tracking-tight h-[30px] w-full bg-[#fffff0]"/>
                        </div>
                        <div className="justify-end items-center shadow-md rounded-tr-md rounded-br-md p-2 bg-[#fffff0] flex">
                            <img src="/src/assets/search.svg" className="w-8 h-8  flex-col bg-[#fffff0] justify-center items-center gap-2.5 inline-flex"/>
                        </div>
                    </div>
                </div>
            </div>
        <div className="h-[19px] justify-center items-center gap-2.5 flex mt-[50px]">
            <h1 className="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[19px]">Kategori</h1>
        </div>
        <div className='flex justify-center mt-[23px] gap-4'>
            <RadioButton options={RadioButtonOpts}/>
        </div>

    <div className='grid grid-cols-1 mt-[20px] ml-[150px]'>

            <CardArtikel
            Img = "/src/assets/cardlist1.png"
            Judul = "Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir"
            Isi = "Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya."
            To ='/artikelbaca1'
            />
              <CardArtikel
            Img = "/src/assets/cardlist2.png"
            Judul = "Data Analyst: Peran Penting dan Skill Wajib dalam Pengambilan Keputusan"
            Isi = "Profesi Data Analyst memiliki peran penting dalam membantu perusahaan membuat keputusan berdasarkan data yang akurat."
            To='/artikelbaca2'
            />
            <CardArtikel
            Img = "/src/assets/cardlist3.png"
            Judul = "Digital Marketing Specialist: Memahami Tugas, Skill, dan Prospek di Era Digital"
            Isi = "Salah satu peran yang semakin penting dalam upaya bisnis untuk menjangkau pelanggan secara digital adalah Digital Marketing Specialist."
            />


        {/* <div className="h-[247px] w-[589px] p-4 bg-[#fffff0] rounded-[10px] shadow-xl mb-[20px] justify-start items-center gap-4 inline-flex">
            <img src="/src/assets/cardlist1.png" alt="" className='w-[233px] h-[215px] relative rounded-md' />
            <div className='grow shrink basis-0 self-stretch px-2 py-3 flex-col justify-start items-start gap-2 inline-flex'>
                <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-3 flex'>
                    <h1 className="self-stretch text-black text-lg font-semibold font-sans leading-snug line-clamp-2">Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir</h1>
                    <p className='self-stretch text-black text-base font-normal font-sans leading-[19px] line-clamp-6'>Di era digital saat ini, tampilan dan pengalaman pengguna menjadi salah satu faktor utama kesuksesan sebuah produk digital, baik itu aplikasi, website, maupun software lainnya.</p>
                </div>
                <Button type ='Link'to='/' classname='justify-center mt-[4px] items-center gap-2 flex bg-[#fb6816] text-[#fffff0] border-2 border-slate-900'> Selengkapnya </Button>
            </div>
        </div> */}
     </div>
                    <div className=" absolute top-[535px] ml-[850px] w-[489px] h-[420.37px] px-7 py-[30px] bg-[#a49af6] rounded-[10px] shadow flex-col justify-start items-center gap-[47px] inline-flex">
                    <img src='/src/assets/cardungu.svg' className="w-[201.80px] h-[153.37px] relative"/>
                    <div className="self-stretch h-40 flex-col justify-start items-center gap-[17px] flex">
                        <div className="self-stretch h-[108px] flex-col justify-start items-center gap-5 flex">
                            <h1 className="self-stretch text-center text-black text-xl font-semibold font-['Plus Jakarta Sans'] leading-snug tracking-tight">Apa itu program JobReady CV?</h1>
                            <p className="self-stretch text-center text-black text-lg font-normal font-['Plus Jakarta Sans'] leading-snug">Bingung  gimana cara bikin CV yang tepat dan sesuai sama posisi yang kamu lamar? JobReady CV bisa menjadi solusi dan jawaban kamu!</p>
                        </div>
                            <Button type ='Link'to='/mentoring' classname=" bg-teal-300 item-center flex justify-center text-center border-blue-700 border-4">Selengkapnya</Button>
                    </div>
                    <div className="w-[476px] h-[177px] flex-col justify-start items-start gap-4 inline-flex mt-[72px]">
                            <div className="justify-start items-center gap-2.5 inline-flex">
                                <div className="w-[404px] text-black text-xl font-semibold font-['Plus Jakarta Sans'] leading-snug tracking-tight">Akses E-learning Untuk Tingkatkan Kesiapan Karier Kamu!</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-3.5 flex">
                                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                                    <div className="w-[453px] text-black text-lg font-normal font-['Plus Jakarta Sans'] leading-snug">Lihat kumpulan materi dan latihan soal yang dapat meningkatkan persiapan lamaran kamu supaya lebih matang dan berpeluang lebih besar diterima kerja!</div>
                                </div>
                            </div>
                            <div className="w-[167px] px-6 py-2 bg-[#fb6816] rounded-[20px] shadow-inner justify-center items-center gap-2 inline-flex">
                                <Button type ='Link'to='/elearning' className="text-center text-[#fffff0] text-sm font-bold font-['Plus Jakarta Sans'] leading-[19px] tracking-tight">E-Learning</Button>
                            </div>
                        </div>
                </div>
                <Footer />
    </div>
    
    )
}
export default Artikel