export const APPLICATION_OPEN_DATE = new Date('2026-06-01T00:00:00')

export const isApplicationsOpen = () => 
  new Date() >= APPLICATION_OPEN_DATE