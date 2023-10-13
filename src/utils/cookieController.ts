export const setServerCookie = async (key: string, value: string, options?: { expires?: Date }) => {
  const { cookies } = await import('next/headers');
  cookies().set(key, value, {
    expires: options?.expires,
  });
  return;
}

export const setClientCookie = (key: string, value: string, options?: { expires?: Date }) => {
  document.cookie = `${key}=${value}; path=/; ${options?.expires ? `expires=${options.expires.toUTCString()}` : ''
    }`;
}

export const getClientCookie = (key: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  return parts.pop()?.split(';').shift();
};

export const getServerCookie = async (key: string) => {
  const { cookies } = await import('next/headers');
  return cookies().get(key);
}


export const removeServerCookie = async (key: string) => {
  const { cookies } = await import('next/headers');
  cookies().set(key, '');
  return;

}
export const removeClientCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;
}