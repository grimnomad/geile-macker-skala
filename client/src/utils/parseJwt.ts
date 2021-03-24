interface ParsedToken {
  exp: number;
  handle: string;
  iat: number;
}

function parseJwt(token: string): ParsedToken | null {
  if (token.length === 0) {
    return null;
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const parsed: ParsedToken = JSON.parse(jsonPayload);

  return parsed;
}

export { parseJwt };
