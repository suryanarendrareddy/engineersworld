import { useParams } from 'react-router-dom'
import { jobs } from '../../data/jobs'
import { useJobApplication } from '../../hooks/useJobApplications'
import { JobHeader } from '../../components/jobs/JobHeader'
import { JobOverview } from '../../components/jobs/JobOverview'
import { JobResponsibilities } from '../../components/jobs/JobResponsibilities'
import { JobRequirements } from '../../components/jobs/JobRequirements'
import JobApplicationForm from '../../components/jobs/JobApplicationForm'

export default function JobDetails() {
  const { slug } = useParams()
  const job = jobs.find((j) => j.slug === slug)

  if (!job) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        Job not found
      </div>
    )
  }

  const application = useJobApplication(job)

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-24">
      <JobHeader title={job.title} />

      <main className="max-w-5xl mx-auto px-6 mt-16 space-y-16">
        <JobOverview description={job.description} />
        <JobResponsibilities items={job.responsibilities} />
        <JobRequirements items={job.requirements} />

        <JobApplicationForm
          form={application.form}
          submitting={application.submitting}
          isOpen={application.isOpen}
          onChange={application.handleChange}
          onSubmit={application.handleSubmit}
        />
      </main>
    </div>
  )
}
