export class ApiClientError extends Error {
  public readonly code: string;

  public constructor(message: string, code: string) {
    super(message);
    this.name = 'ApiClientError';
    this.code = code;
  }
}

type ApiErrorEnvelope = {
  error: {
    code: string;
    message: string;
  };
};

const isApiErrorEnvelope = (value: unknown): value is ApiErrorEnvelope => {
  if (typeof value !== 'object' || value === null || !('error' in value)) return false;
  const error = value.error;
  return typeof error === 'object' && error !== null && 'code' in error && 'message' in error;
};

export const apiRequest = async <T>(path: string, init: RequestInit = {}): Promise<T> => {
  const response = await fetch(`/api/v1${path}`, {
    ...init,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...init.headers },
  });
  const payload: unknown = response.status === 204 ? undefined : await response.json();

  if (!response.ok) {
    if (isApiErrorEnvelope(payload))
      throw new ApiClientError(payload.error.message, payload.error.code);
    throw new ApiClientError('The request could not be completed.', 'REQUEST_FAILED');
  }

  return payload as T;
};
