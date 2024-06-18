// Greeting function based on time of day
export function generateGreeting(): string {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 5 && hour < 8) {
    return 'Good Early Morning!'
  } else if (hour >= 5 && hour < 12) {
    return 'Good Morning!'
  } else if (hour >= 12 && hour < 18) {
    return 'Good Afternoon!'
  } else if (hour >= 18 && hour < 22) {
    return 'Good Evening!'
  } else if (hour >= 22) {
    return 'Good Late Evening!'
  } else {
    return 'Hey Night Owl!'
  }
}

// Format date to a readable string
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(date))
}
