
export function formattedDateTime(date: string | null | undefined ) { 
  if(date && !isNaN(new Date(date).getDay()) ) {
    return new Date(date)
    .toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/\./g, '.')
  }
  return '00.00.00, 00:00';
}
