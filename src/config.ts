export const config = {
  adminPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  baseUrl: process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3000',
};
