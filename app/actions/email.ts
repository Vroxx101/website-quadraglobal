'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
    // 1. Honeypot check
    const honeypot = formData.get('_honeypot')
    if (honeypot) {
        console.warn('Spam detected via honeypot')
        return { success: true } // Return success to fool the bot, but don't send anything
    }

    const name = (formData.get('name') as string)?.trim().slice(0, 100)
    const email = (formData.get('email') as string)?.trim().toLowerCase()
    const phone = (formData.get('phone') as string)?.trim().slice(0, 20)
    const projectType = formData.get('projectType') as string
    const message = (formData.get('message') as string)?.trim().slice(0, 2000)

    if (!name || !email || !message) {
        return { success: false, error: 'Nama, Email, dan Pesan wajib diisi.' }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { success: false, error: 'Format email tidak valid.' }
    }

    // Configure transport (Recommended: use environment variables for security)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Recommended to send from your own authenticated email
        to: 'ptquadraglobalnusantara@gmail.com',
        replyTo: email,
        subject: `Pesan Baru dari Website: ${projectType}`,
        html: `
            <h3>Informasi Kontak Baru</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Jenis Proyek:</strong> ${projectType}</p>
            <br/>
            <h3>Pesan:</h3>
            <p>${message}</p>
        `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Gagal mengirim email. Silakan coba lagi.' }
    }
}
