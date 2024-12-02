import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";

const Datapeserta = () => {
    return (
        <div>
            <NavbarAdmin />
            <div className="flex flex-col mx-[150px] mt-[104px] mb-[40px]">
            <table className="table-auto w-full border-collapse border border-black">
                <thead>
                    <tr className="h-[60px] bg-gray-100">
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">ID</th>
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">Tanggal</th>
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">Email</th>
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">Nama</th>
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">Jumlah Kelas</th>
                    <th className="px-4 py-2 text-black text-lg font-semibold font-['Plus Jakarta Sans']">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000001</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">22/10/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Kevinsusanto@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Kevin Susanto</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">1</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#adffeb] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#23ffca] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Ongoing</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000002</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">01/11/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Floria@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Floria</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">1</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#adffeb] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#23ffca] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Ongoing</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000003</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">30/10/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Akmal@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Akmal</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">3</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#adffeb] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#23ffca] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Ongoing</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000004</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">22/10/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">cryl@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">cryl</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">1</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#fdab7f] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#fb6816] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Selesai</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000005</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">19/7/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Vivit@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Vivit</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">1</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#fdab7f] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#fb6816] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Selesai</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000006</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">20/5/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">wildan@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">wildan</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">1</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#fdab7f] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#fb6816] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">selesai</span>
                        </div>
                    </td>
                    </tr>
                    <tr className="h-[60px] border-t border-b border-black">
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">000007</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">12/4/2024</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">rehan@gmail.com</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">rehan</td>
                    <td className="px-4 py-2 text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">2</td>
                    <td className="px-4 py-2">
                        <div className="px-2 py-1 bg-[#fdab7f] rounded-[15px] flex items-center justify-center gap-2.5">
                        <div className="w-4 h-4 bg-[#fb6816] rounded-full"></div>
                        <span className="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Selesai</span>
                        </div>
                    </td>
                    </tr>
                    {/* Tambahkan baris lainnya di sini */}
                </tbody>
                </table>

            </div>
            
            <Footer />
        </div>
    );
};

export default Datapeserta;