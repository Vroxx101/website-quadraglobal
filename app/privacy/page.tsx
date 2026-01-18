import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kebijakan Privasi | PT. QUADRA GLOBAL NUSANTARA",
    description: "Kebijakan privasi PT. QUADRA GLOBAL NUSANTARA menjelaskan bagaimana kami mengumpulkan dan melindungi data pelanggan kami.",
}

export default function PrivacyPolicyPage() {
    const t = {
        title: "Kebijakan Privasi",
        lastUpdated: "Terakhir diperbarui: 18 Januari 2026",
        intro:
            'PT. Quadra Global Nusantara ("kami") berkomitmen untuk melindungi dan menghormati privasi pengunjung website kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan melalui website ini.',

        sections: [
            {
                title: "1. Informasi yang Kami Kumpulkan",
                content:
                    "Kami hanya mengumpulkan informasi pribadi yang Anda berikan secara sukarela melalui formulir kontak di website ini, antara lain:\n• Nama lengkap\n• Alamat email\n• Nomor telepon\n• Informasi terkait kebutuhan atau jenis proyek\n\nWebsite ini tidak mengumpulkan data sensitif secara otomatis."
            },
            {
                title: "2. Penggunaan Informasi",
                content:
                    "Informasi yang kami terima digunakan untuk:\n• Menanggapi pertanyaan, permintaan informasi, atau konsultasi proyek\n• Menghubungi Anda terkait layanan konstruksi yang kami sediakan\n• Keperluan komunikasi bisnis dan tindak lanjut kerja sama\n\nKami tidak menggunakan data Anda untuk tujuan pemasaran massal tanpa persetujuan."
            },
            {
                title: "3. Perlindungan Data",
                content:
                    "Kami berupaya menjaga keamanan informasi pribadi Anda dengan menerapkan langkah-langkah perlindungan yang wajar. Informasi yang dikirimkan melalui formulir website diterima melalui sistem yang aman dan hanya diakses oleh pihak internal yang berwenang."
            },
            {
                title: "4. Pembagian Informasi kepada Pihak Ketiga",
                content:
                    "PT. Quadra Global Nusantara tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga. Informasi hanya dapat dibagikan apabila:\n• Diperlukan untuk kepentingan proyek atas persetujuan Anda\n• Diminta oleh instansi pemerintah atau penegak hukum sesuai peraturan yang berlaku"
            },
            {
                title: "5. Hak Pengguna",
                content:
                    "Sebagai pengguna website, Anda berhak untuk:\n• Mengetahui informasi pribadi apa yang kami miliki\n• Meminta pembaruan atau perbaikan data yang tidak akurat\n• Meminta penghapusan data pribadi Anda dari catatan kami\n\nPermintaan terkait data pribadi dapat diajukan melalui kontak resmi kami."
            },
            {
                title: "6. Perubahan Kebijakan Privasi",
                content:
                    "Kebijakan Privasi ini dapat diperbarui sewaktu-waktu untuk menyesuaikan dengan perubahan layanan atau ketentuan hukum. Setiap perubahan akan ditampilkan pada halaman ini dengan tanggal pembaruan terbaru."
            },
            {
                title: "7. Hubungi Kami",
                content:
                    "Jika Anda memiliki pertanyaan terkait Kebijakan Privasi ini, silakan hubungi:\n\nPT. Quadra Global Nusantara\nEmail: ptquadraglobalnusantara@gmail.com\nTelepon: +62 851 6315 2629\nAlamat: Kp. Pabuaran, Desa Cicadas, Kec. Gunung Putri, Kab. Bogor, Jawa Barat 16964"
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
