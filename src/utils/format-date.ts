export function formatDate(availableAt: Date) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }).format(new Date(availableAt))

  return formattedDate
}
