import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type FormData = { name: string; email: string; message: string }

export function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormData>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Say hi to Shihab</h2>
        <p className="section-lede">Tell me about the product, story, or experiment you are dreaming up and I will reply within a day.</p>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" {...register('name', { required: true })} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" {...register('email', { required: true })} />
          </label>
          <label className="full">
            <span>Message</span>
            <textarea rows={5} placeholder="Say hello..." {...register('message', { required: true })} />
          </label>
          <button className="btn primary" type="submit" disabled={formState.isSubmitting || status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && <p className="success">Thanks! I will reply soon.</p>}
          {status === 'error' && <p className="error">Could not send. Try again later.</p>}
        </form>
      </div>
    </section>
  )
}


