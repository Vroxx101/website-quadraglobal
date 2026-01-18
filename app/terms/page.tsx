import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Syarat & Ketentuan | PT. QUADRA GLOBAL NUSANTARA",
    description: "Syarat dan ketentuan layanan PT. QUADRA GLOBAL NUSANTARA untuk jasa konstruksi dan infrastruktur.",
}

export default function TermsOfServicePage() {
    const t = {
        title: "Syarat dan Ketentuan",
        lastUpdated: "Terakhir diperbarui: 18 Januari 2026",
        intro:
            "Halaman ini mengatur syarat dan ketentuan penggunaan website resmi PT. Quadra Global Nusantara. Dengan mengakses dan menggunakan website ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum di bawah ini.",

        sections: [
            {
                title: "1. Ruang Lingkup Penggunaan",
                content:
                    "Website ini disediakan sebagai media informasi mengenai profil perusahaan, layanan, proyek, dan sarana komunikasi PT. Quadra Global Nusantara. Informasi yang ditampilkan bersifat umum dan tidak dimaksudkan sebagai penawaran yang mengikat secara hukum."
            },
            {
                title: "2. Layanan Perusahaan",
                content:
                    "PT. Quadra Global Nusantara bergerak di bidang konstruksi dan infrastruktur, antara lain:\n• Pekerjaan Hotmix Aspal\n• Pekerjaan Beton dan Betonisasi\n• Konstruksi dan Perbaikan Jalan\n• Konstruksi Jembatan\n• Pekerjaan Paving Block\n• Penyediaan Material Konstruksi\n\nPelaksanaan setiap layanan tunduk pada perjanjian kerja atau kontrak proyek terpisah yang disepakati oleh para pihak."
            },
            {
                title: "3. Penggunaan Website",
                content:
                    "Pengguna website setuju untuk:\n• Menggunakan website ini hanya untuk tujuan yang sah dan sesuai hukum\n• Tidak menyalahgunakan informasi atau konten yang tersedia\n• Tidak mencoba mengakses sistem secara tidak sah\n• Tidak mengirimkan konten yang bersifat melanggar hukum, merugikan, atau mengganggu operasional website\n• Memberikan informasi yang benar saat menghubungi kami melalui formulir kontak"
            },
            {
                title: "4. Hak Kekayaan Intelektual",
                content:
                    "Seluruh konten yang terdapat pada website ini, termasuk namun tidak terbatas pada teks, gambar, logo, desain, dan dokumentasi proyek, merupakan milik PT. Quadra Global Nusantara atau digunakan dengan izin yang sah. Penggunaan, penyalinan, atau distribusi konten tanpa persetujuan tertulis dilarang."
            },
            {
                title: "5. Informasi Proyek dan Penawaran",
                content:
                    "Informasi proyek, portofolio, dan layanan yang ditampilkan di website ini bersifat informatif. Permintaan penawaran atau konsultasi yang dilakukan melalui website tidak serta-merta membentuk hubungan kontraktual sebelum adanya perjanjian tertulis yang ditandatangani oleh para pihak."
            },
            {
                title: "6. Tanggung Jawab dan Batasan",
                content:
                    "PT. Quadra Global Nusantara berupaya menjaga keakuratan informasi di website ini, namun tidak menjamin bahwa seluruh konten selalu bebas dari kesalahan atau pembaruan. Kami tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul akibat penggunaan informasi dari website ini."
            },
            {
                title: "7. Force Majeure",
                content:
                    "Perusahaan tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan pekerjaan yang disebabkan oleh keadaan di luar kendali wajar, termasuk namun tidak terbatas pada bencana alam, kebijakan pemerintah, gangguan keamanan, atau kondisi darurat lainnya."
            },
            {
                title: "8. Perubahan Ketentuan",
                content:
                    "PT. Quadra Global Nusantara berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan ditampilkan pada halaman ini dengan tanggal pembaruan terbaru. Penggunaan website secara berkelanjutan dianggap sebagai persetujuan atas perubahan tersebut."
            },
            {
                title: "9. Hukum yang Berlaku",
                content:
                    "Syarat dan ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia."
            },
            {
                title: "10. Kontak Perusahaan",
                content:
                    "Apabila Anda memiliki pertanyaan terkait syarat dan ketentuan ini, silakan menghubungi:\n\nPT. Quadra Global Nusantara\nEmail: ptquadraglobalnusantara@gmail.com\nTelepon: +62 851 6315 2629\nAlamat: Kp. Pabuaran, Desa Cicadas, Kec. Gunung Putri, Kab. Bogor, Jawa Barat 16964"
            }
        ]
    }


    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Beranda
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h1>
                    <p className="text-white/80 text-sm">{t.lastUpdated}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        {t.intro}
                    </p>

                    <div className="space-y-8">
                        {t.sections.map((section, index: number) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
