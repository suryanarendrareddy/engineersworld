import { useState } from 'react'
import { toast } from 'sonner'
import { applyForJob } from '../services/jobService'
import { isApplicationsOpen } from '../utils/jobUtils'

export const useJobApplication = (job) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: '',
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setForm({ ...form, resume: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isApplicationsOpen()) {
      toast.error('Applications are closed. Reopening on June 1.')
      return
    }

    const { name, email, phone, message, resume } = form
    if (!name || !email || !phone || !message || !resume) {
      toast.error('All fields are required.')
      return
    }

    setSubmitting(true)
    const toastId = toast.loading('Submitting Application...')

    try {
      const formData = new formData()
      Object.entries({
        jobTitle: job.title,
        jobSlug: job.slug,
        name,
        email,
        phone,
        message,
      }).forEach(([k, v]) => formData.append(k, v))
      formData.append('resume', resume)

      await applyForJob(formData)
      toast.success('Application submitted successfully', { id: toastId })

      setForm({
        name: '',
        email: '',
        phone: '',
        resume: null,
        message: '',
      })
    } catch (err) {
      toast.error(err.message || 'Submission failed', { id: toastId })
    } finally {
      setSubmitting(false)
    }
  }
  return { form, submitting, handleChange, handleSubmit }
}
