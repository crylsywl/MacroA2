import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/elearning.css';
import '../CSS/styleguide1.css';
import Navbar from '../Components/Elements/Navbar/Navbar';
import RadioButton from '../Components/Elements/RadioButton/RadioButton';
const Elearning = () => {
  const RadioButtonOpts = [
    
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'CV',
      value: 'CV'
    },
    {
      label: 'Portfolio',
      value: 'Portfolio',
    },
    {
      label: 'Interview',
      value: 'Interview',
    },
  ]

  return (
    <>
    <Navbar />
<div className="e-learning">
  <div className="div">
    <div className="frame">
      <div className="frame-2">
        <p className="persiapkan-diri">Persiapkan Diri Lebih Baik, <br />Mulai Karier dengan Percaya Diri!</p>
        <p className="text-wrapper">
          Dapatkan panduan lengkap membuat CV yang menarik, membangun portfolio profesional, dan
          menghadapi
          interview kerja dengan percaya diri. Pelajari juga soal-soal umum psikotes untuk semakin siap
          memasuki
          dunia kerja.
        </p>
      </div>
    </div>
    <Link to="/video" className="frame-3">
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39 (1).svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Menulis CV yang Menarik</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline" />
                <div className="lorem-ipsum">Tiara Dewi</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star" />
                <div className="lorem-ipsum">4,6/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39_Siska.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Struktur CV yang Efektif</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline" />
                <div className="lorem-ipsum">Siska Larasati</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star" />
                <div className="lorem-ipsum">5/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39 (1).svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Membangun Portfolio Profesional</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline" />
                <div className="lorem-ipsum">Maya Putri</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star" />
                <div className="lorem-ipsum">4,9/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39_raka.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Menyesuaikan Portfolio untuk Pekerjaan</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline" />
                <div className="lorem-ipsum">Raka Nugraha</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star" />
                <div className="lorem-ipsum">4.6/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    <div className="frame-7">
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 340.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Persiapan Sebelum Interview</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline-2" />
                <div className="lorem-ipsum">Rian Utama</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star-2" />
                <div className="lorem-ipsum">4,8/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39_nadia.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Menguasai Teknik Menjawab Pertanyaan</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline-2" />
                <div className="lorem-ipsum">Nadia Kurnia</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star-2" />
                <div className="lorem-ipsum">4,7/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39_Rian.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Menguasai Teknik Menjawab Pertanyaan</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline-2" />
                <div className="lorem-ipsum">Rian Utama</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star-2" />
                <div className="lorem-ipsum">4,9/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="default-wrapper">
        <div className="default">
          <img className="rectangle" src="assets/Rectangle 39_raka.svg" />
          <div className="frame-4">
            <div className="lorem-ipsum-dolor-wrapper">
              <div className="lorem-ipsum-dolor">Desain Portfolio yang Menarik</div>
            </div>
            <div className="frame-5">
              <div className="frame-6">
                <div className="icon-person-outline-2" />
                <div className="lorem-ipsum">Raka Nugraha</div>
              </div>
              <div className="frame-6">
                <img className="img" src="assets/Vector.svg" />
                <div className="lorem-ipsum">3 Video</div>
              </div>
              <div className="frame-6">
                <div className="icon-star-2" />
                <div className="lorem-ipsum">4,9/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="frame-8">
      <a href="soal">
        <div className="default-wrapper">
          <div className="default">
            <img className="rectangle" src="assets/Rectangle 39_tes logika.svg" />
            <div className="frame-4">
              <div className="lorem-ipsum-dolor-wrapper">
                <p className="lorem-ipsum-dolor">Tes Logika Penalaran (Logical Reasoning)</p>
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" src="assets/timer.svg" />
                  <div className="lorem-ipsum">10 Menit</div>
                </div>
                <div className="frame-6">
                  <img className="img" src="assets/Vector.svg" />
                  <div className="lorem-ipsum">10 Soal</div>
                </div>
                <div className="frame-6">
                  <div className="icon-star-2" />
                  <div className="lorem-ipsum">5/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="soal.html">
        <div className="default-wrapper">
          <div className="default">
            <img className="rectangle" src="assets/Rectangle 39_tes kemapuan.svg" />
            <div className="frame-4">
              <div className="lorem-ipsum-dolor-wrapper">
                <p className="lorem-ipsum-dolor">Tes Kemampuan Verbal (Verbal Ability)</p>
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" src="assets/timer.svg" />
                  <div className="lorem-ipsum">5 Menit</div>
                </div>
                <div className="frame-6">
                  <img className="img" src="assets/timer.svg" />
                  <div className="lorem-ipsum">5 Soal</div>
                </div>
                <div className="frame-6">
                  <div className="icon-star-2" />
                  <div className="lorem-ipsum">4,9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="soal.html">
        <div className="default-wrapper">
          <div className="default">
            <img className="rectangle" src="assets/Rectangle 39_tes numerik.svg" />
            <div className="frame-4">
              <div className="lorem-ipsum-dolor-wrapper">
                <p className="lorem-ipsum-dolor">Tes Numerik (Numerical Ability Test)</p>
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" src="assets/timer.svg" />
                  <div className="lorem-ipsum">15 Menit</div>
                </div>
                <div className="frame-6">
                  <img className="img" src="assets/Vector.svg" />
                  <div className="lorem-ipsum">10 Soal</div>
                </div>
                <div className="frame-6">
                  <div className="icon-star-2" />
                  <div className="lorem-ipsum">4,8/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="soal.html">
        <div className="default-wrapper">
          <div className="default">
            <img className="rectangle" src="assets/Rectangle 39_tes kemampuan.svg" />
            <div className="frame-4">
              <div className="lorem-ipsum-dolor-wrapper">
                <p className="lorem-ipsum-dolor">Tes Kemampuan Spasial (Spatial Ability)</p>
              </div>
              <div className="frame-5">
                <div className="frame-6">
                  <img className="img" src="assets/timer.svg" />
                  <div className="lorem-ipsum">5 Menit</div>
                </div>
                <div className="frame-6">
                  <img className="img" src="assets/Vector.svg" />
                  <div className="lorem-ipsum">5 Soal</div>
                </div>
                <div className="frame-6">
                  <div className="icon-star-2" />
                  <div className="lorem-ipsum">4,9/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className="frame-9">
    <RadioButton options={RadioButtonOpts} defaultValue={'all'} />
      {/* <div className="frame-wrapper">
        <div className="frame-10">
          <div className="lorem">CV</div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-10">
          <div className="lorem">Portfolio</div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-10">
          <div className="lorem">Interview</div>
        </div>
      </div> */}
    </div>
    <div className="frame-11">
      <div className="frame-12">
        <img className="vector" src="img/vector-2.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper-2">Bank Soal</div>
        </div>
      </div>
      <img className="vector-2" src="img/vector-1.svg" />
    </div>
    <div className="searchbar">
      <input className="frame-13" placeholder="Search" />
      <div className="icon-search-wrapper">
        <div className="icon-search" />
      </div>
    </div>
    <footer className="footer">
      <img className="logo-navbar" src="assets/Logo Navbar 2.svg" />
      <div className="frame-14">
        <div className="frame-15">
          <img className="img-2" src="assets/markunread.svg" />
          <div className="text-wrapper-4">Kontak</div>
        </div>
        <div className="frame-10">
          <img className="img-2" src="assets/assignment_ind.svg" />
          <div className="text-wrapper-5">Tentang Kami</div>
        </div>
        <div className="frame-15">
          <img className="img-2" src="assets/announcement.svg" />
          <div className="text-wrapper-4">Bantuan</div>
        </div>
      </div>
    </footer>
    {/* <div className="navbar">
      <a href="homepage.html">
        <img className="logo-navbar" src="assets/Logo Navbar 1.svg" />
      </a>
      <div className="div-2">
        <div className="div-2">
          <a href="mentoring.html">
            <div className="text-nav">
              <div className="lorem-ipsum-2">Mentoring</div>
            </div>
          </a>
          <a href="e-learning.html">
            <div className="text-nav">
              <div className="lorem-ipsum-2">E-Learning</div>
            </div>
          </a>
          <a href="artikel.html">
            <div className="text-nav">
              <div className="lorem-ipsum-2">Artikel Karier</div>
            </div>
          </a>
        </div>
      </div>
      <div className="icon-account-circle">
        <img className="icon-account-circle" src="/assets/4095d9d92b3c0ef33102043dddbd26ee.svg" alt />
      </div>
    </div> */}
  </div>
</div>
</>
  );
};

export default Elearning;

