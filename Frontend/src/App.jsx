import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./Utils/UserContext"
import EditProfilePage from "./Pages/EditProfilePage"
import RiwayatPage from "./Pages/RiwayatPage"
import Homepage from "./Pages/Homepage"
import Elearning from "./Pages/Elearning"
import Mentoring from "./Pages/Mentoring"
import Login from "./Pages/Login"
import RegisterForm from "./Pages/RegisterForm"
import VideoLearningPlatform from "./Pages/video/VideoLearningPlatform"
import PaymentPage from "./Pages/pembayaran/PaymentPage"
import CourseReviewPage from "./Pages/review-cv/CourseReviewPage"
import Artikel from "./Pages/Artikel/Artikel"
// import Artikel1 from "./Pages/Artikel/ArtikelBaca1"
// import Artikel2 from "./Pages/Artikel/ArtikelBaca2"
// import Artikel3 from "./Pages/Artikel/ArtikelBaca3"
import QuizLogika from "./Pages/Soal/QuizLogika"
import Dashboard from "./PagesAdmin/Dashboard"
import DataMentor from "./PagesAdmin/Datamentor"
import DataPeserta from "./PagesAdmin/Datapeserta"
import DetailContent1 from "./Pages/DetailContent1"
import DetailContent2 from "./Pages/DetailContent2"
import DetailContent3 from "./Pages/DetailContent3"
import YouTubeVideo from "./Pages/youtube"
import DetailArtikel from "./Pages/Artikel/DetailArtikel"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Homepage />}/>  
            <Route path="/editprofile" element={<EditProfilePage />}/>
            <Route path="/riwayat" element={<RiwayatPage />}/>
            <Route path="/elearning" element={<Elearning />}/>
            <Route path="/mentoring" element={<Mentoring />}/>
            <Route path="/artikel" element={<Artikel />}/>
            {/* <Route path="/artikelBaca1" element={<Artikel1 />}/>
            <Route path="/artikelBaca2" element={<Artikel2 />}/>
            <Route path="/artikelBaca3" element={<Artikel3 />}/> */}
            <Route path="/soal" element={ <QuizLogika />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/video" element={<VideoLearningPlatform />}/>
            <Route path="/payment" element={<PaymentPage />}/>
            <Route path="/coursereview" element={<CourseReviewPage />}/>
            <Route path="/admin" element={<Dashboard />}/>
            <Route path="/datamentor" element={<DataMentor />}/>
            <Route path="/datapeserta" element={<DataPeserta />}/>
            <Route path="/elearning1/:slug" element={<DetailContent1 />}/>
            <Route path="/elearning2/:slug" element={<DetailContent2 />}/>
            <Route path="/elearning3/:slug" element={<DetailContent3 />}/>
            <Route path="/detailartikel/:slug" element={<DetailArtikel />}/>
            <Route path="/youtube" element={<YouTubeVideo />}/>
          </Routes>  
        </UserProvider>      
      </BrowserRouter>
    </>
  )
}

// function App () {
//   return (
//     <>
//       <BrowserRouter>
//         <UserProvider>
//           <Routes>
//             <Route path="/"  element={<Profile1 />}/>
                          {/* <Route path="/"  element={<ProductPage />}/>
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />}/>
            <Route path="/reactform" element={<ReactForm />}/>
            <Route path="/postapp" element={<PostApp />}/> */}
//           </Routes>  
//         </UserProvider>      
//       </BrowserRouter>
//     </>
//   )
// }



export default App
