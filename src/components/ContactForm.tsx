import React, {useState} from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const form = new FormData(e.target as HTMLFormElement)
        const payload = {
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message')
        }

        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {  'Content-Type': 'application/json'  },
                body: JSON.stringify(payload)
            })
            if (!res.ok) throw new Error('Network error')
            setSent(true)
        } catch (err: unknown) {
            if (err instanceof Error)
                setError(err.message)
            else 
                setError('Error')
        } finally {
            setLoading(false)
        }
    }

    if (sent) return <div className="p-4 bg-green-100 rounded">Message sent — thank you!</div>

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 max-w-xl">
      <input name="name" required placeholder="Your name" className="input" />
      <input name="email" type="email" required placeholder="Email" className="input" />
      <textarea name="message" required placeholder="Message" className="input h-32" />
      <button type="submit" disabled={loading} className="px-4 py-2 bg-black text-white rounded">
        {loading ? 'Sending...' : 'Send'}
      </button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}