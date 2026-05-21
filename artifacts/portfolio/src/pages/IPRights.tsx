import { motion } from "framer-motion";
import { Link } from "wouter";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

const hkiData = [
  {
    id: "01",
    title: "Video Profil Riset Pengembangan Sistem Peringatan Dini Mitigasi Bencana Pergerakan Tanah Terkoneksi Web berbasis Analisis Sensor Akselerometer 3-Sumbu",
    code: "EC00202169316",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "02",
    title: "Instalasi PLTS di Kalurahan Serut Program PTDM UAD 2021",
    code: "EC00202155553",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "03",
    title: "Project Based-Learning Roket Air Berbasis IoT",
    code: "EC00202426666",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "04",
    title: "Implementasi Teknologi PLTS on-Grid di Sendang Banyurip Gunung Kidul",
    code: "EC002022113067",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "05",
    title: "Pengabdian kepada Masyarakat Implementasi teknologi IoT pada Tampungan Air Induk Kalurahan Serut",
    code: "EC002022113065",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "06",
    title: "CO2 Detection System For Mitigate Forest Fires Remotely with Sensors MQ-135",
    code: "EC00202227420",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "07",
    title: "Leaflet Pengabdian kepada Masyarakat Internasional Pengemasan Madu Taman Kelulut Ayoh Ku Malaysia",
    code: "EC00202393587",
    link: "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
];

export default function IPRights() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back button */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-green/60 hover:text-gold transition-colors text-sm font-medium"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 bg-gold/15 text-gold text-xs font-bold tracking-widest uppercase rounded-full mb-5">
            HKI Terdaftar
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-green leading-tight mb-4">
            Hak Kekayaan<br />
            <em className="text-gold not-italic">Intelektual (HKI)</em>
          </h1>
          <p className="text-dark-green/60 max-w-2xl leading-relaxed text-sm">
            Kumpulan karya inovasi dan pengembangan teknologi yang telah terdaftar sebagai Hak Kekayaan Intelektual di Direktorat Jenderal Kekayaan Intelektual.
          </p>
        </motion.div>

        {/* Tutorial guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-green/5 border border-dark-green/10 rounded-2xl p-5 mb-12"
        >
          <p className="text-dark-green/50 text-xs font-bold uppercase tracking-widest mb-3">Panduan</p>
          <p className="text-dark-green/80 text-sm font-medium mb-2">Cara cek data Hak Cipta ini di PDKI:</p>
          <ol className="space-y-1.5 text-dark-green/60 text-sm list-decimal list-inside">
            <li>
              Buka situs{" "}
              <a
                href="https://pdki-indonesia.dgip.go.id/search?keyword=EC00202169316&type=copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline break-all"
              >
                pdki-indonesia.dgip.go.id
              </a>
            </li>
            <li>Pilih kategori <strong className="text-dark-green/80">Hak Cipta</strong> di kolom pencarian.</li>
            <li>Masukkan Kode HKI, lalu klik <strong className="text-dark-green/80">Pencarian Data</strong>.</li>
          </ol>
        </motion.div>

        {/* Timeline list */}
        <div className="space-y-4">
          {hkiData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.07 }}
              className="group flex items-center gap-6 bg-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-gold/30 border border-transparent transition-all duration-300"
            >
              {/* Left: number */}
              <div className="shrink-0 w-14 text-center">
                <span className="font-heading text-4xl font-bold text-dark-green/10 group-hover:text-gold/30 transition-colors duration-300 select-none">
                  {item.id}
                </span>
              </div>

              {/* Divider */}
              <div className="shrink-0 w-px h-12 bg-dark-green/10" />

              {/* Middle: title + code */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-dark-green text-sm leading-snug mb-2 group-hover:text-dark-green transition-colors">
                  {item.title}
                </p>
                <span className="inline-block px-2.5 py-0.5 bg-gold/10 text-gold text-[11px] font-bold tracking-wide rounded-md">
                  {item.code}
                </span>
              </div>

              {/* Right: button */}
              <div className="shrink-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-dark-green text-cream text-xs font-semibold rounded-full hover:bg-gold transition-colors duration-300 whitespace-nowrap"
                >
                  Lihat Detail
                  <FiExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
