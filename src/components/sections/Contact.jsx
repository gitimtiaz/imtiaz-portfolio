'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import SectionHeader from '@/components/ui/SectionHeader'
import { fadeUp, slideLeft, slideRight } from '@/lib/motion'
import {
  Mail, MapPin, Phone, Github, Linkedin,
  ExternalLink, Send, CheckCircle, AlertCircle, Loader2,
} from 'lucide-react'

const contactDetails = [
  { icon: Mail,    label: 'Email',    value: 'imtiazp32@gmail.com',          href: 'mailto:imtiazp32@gmail.com'                        },
  { icon: Phone,   label: 'Phone',    value: '+880 1303-317901',              href: 'tel:+8801303317901'                                },
  { icon: MapPin,  label: 'Location', value: 'Dhaka, Bangladesh',             href: null                                                },
]

const socialLinks = [
  { icon: Github,      label: 'GitHub',    href: 'https://github.com/gitimtiaz'                        },
  { icon: Linkedin,    label: 'LinkedIn',  href: 'https://www.linkedin.com/in/imtiaz-cse-ahamed/'      },
  { icon: ExternalLink,label: 'BeeCrowd',  href: 'https://judge.beecrowd.com/en/profile/785422'        },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-[#0c0e16]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          subtitle="Available for internships and junior developer roles. Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ─── Left: Info (2 cols) ─── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact rows */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-800 dark:text-slate-200 hover:underline underline-offset-2"
                        style={{ textDecorationColor: 'var(--accent)' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-800 dark:text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Social links */}
            <div>
              <p className="eyebrow mb-4">Find me online</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors group"
                  >
                    <Icon size={15} />
                    <span className="group-hover:underline underline-offset-2" style={{ textDecorationColor: 'var(--accent)' }}>
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div
              className="rounded-md p-4 border text-sm"
              style={{ background: 'var(--accent-muted)', borderColor: 'var(--accent)', borderOpacity: 0.3 }}
            >
              <p className="font-medium" style={{ color: 'var(--accent)' }}>
                🟢 Currently open to work
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                Looking for internship or junior MERN/Next.js developer roles.
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* ─── Right: Form (3 cols) ─── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-7 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name" name="from_name" type="text" placeholder="Your Name" required />
                <Field label="Your Email" name="from_email" type="email" placeholder="yourmail@example.com" required />
              </div>
              <Field label="Subject" name="subject" type="text" placeholder="Internship opportunity / Project enquiry" required />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-slate-500 dark:text-slate-400">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about the role, project, or anything you'd like to discuss..."
                  className="
                    w-full px-4 py-3 rounded-md text-sm resize-none
                    bg-slate-50 dark:bg-slate-900/60
                    border border-slate-200 dark:border-slate-700
                    text-slate-900 dark:text-slate-100
                    placeholder:text-slate-400 dark:placeholder:text-slate-600
                    focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400
                    transition-colors duration-200
                  "
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  flex items-center justify-center gap-2.5
                  px-6 py-3 rounded-md text-sm font-medium
                  text-white disabled:opacity-60
                  hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0
                  transition-all duration-200
                "
                style={{ background: 'var(--accent)' }}
              >
                {status === 'sending' ? (
                  <><Loader2 size={15} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Try emailing me directly at imtiazp32@gmail.com
                </motion.div>
              )}

              {/* Setup note — remove after configuring EmailJS */}
              {!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && (
                <p className="text-xs text-slate-400 dark:text-slate-600 font-mono border-t border-slate-100 dark:border-slate-800 pt-3">
                  Thank you for checking out the contact form!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function Field({ label, name, type, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono text-slate-500 dark:text-slate-400">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          w-full px-4 py-3 rounded-md text-sm
          bg-slate-50 dark:bg-slate-900/60
          border border-slate-200 dark:border-slate-700
          text-slate-900 dark:text-slate-100
          placeholder:text-slate-400 dark:placeholder:text-slate-600
          focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400
          transition-colors duration-200
        "
      />
    </div>
  )
}
