export function truncateText(text: string | null | undefined | number, maxLength: number) {
    if( typeof text === 'string') {
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    } else {
      return ''
    } 
  }