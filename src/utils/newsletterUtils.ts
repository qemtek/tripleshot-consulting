export async function subscribeToNewsletter(email: string): Promise<void> {
  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const response = await fetch(`${apiBaseUrl}/api/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Failed to subscribe' }));
    throw new Error(errorData.error || 'Failed to subscribe to newsletter');
  }

  return response.json();
}