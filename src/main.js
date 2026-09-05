import './style.css'

const PLACEHOLDER_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

/**
 * Fades each section in as it scrolls into view.
 * Sections are hidden by CSS only when the `js` class is present, so if this
 * script fails to load the page still renders — just without the animation.
 */
function initScrollReveal() {
  const sections = document.querySelectorAll('.reveal-on-scroll')

  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => observer.observe(section))
}

/**
 * Submits the contact form to Web3Forms without leaving the page.
 * Until a real access key is pasted in, the form refuses to submit and says so
 * rather than silently swallowing the message.
 */
function initContactForm() {
  const form = document.querySelector('#contact-form')
  if (!form) return

  const status = form.querySelector('#form-status')
  const button = form.querySelector('button[type="submit"]')
  const accessKey = form.querySelector('input[name="access_key"]')?.value

  const setStatus = (message, tone) => {
    status.textContent = message
    status.className = `mt-4 text-center text-base ${
      tone === 'error' ? 'text-red-600' : tone === 'success' ? 'text-green-700' : 'text-gray-500'
    }`
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!accessKey || accessKey === PLACEHOLDER_KEY) {
      setStatus(
        'This form is not connected yet. Add your Web3Forms access key in index.html to start receiving messages.',
        'error',
      )
      return
    }

    button.disabled = true
    setStatus('Sending…', 'neutral')

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const result = await response.json()

      if (response.ok && result.success) {
        form.reset()
        setStatus('Thanks! Your message is on its way.', 'success')
      } else {
        setStatus(result.message || 'Something went wrong. Please try again.', 'error')
      }
    } catch {
      setStatus('Could not reach the server. Check your connection and try again.', 'error')
    } finally {
      button.disabled = false
    }
  })
}

initScrollReveal()
initContactForm()
