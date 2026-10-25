import axios, { type AxiosRequestConfig } from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function POST_API<TResponse = unknown, TData = unknown>(
  url: string,
  data?: TData,
  config?: AxiosRequestConfig<TData>
): Promise<TResponse> {
  try {
    const response = await apiClient.post<TResponse>(url, data, config);
    return response.data;
  } catch (error) {
    console.error("POST_API request failed", { url, error });
    throw error;
  }
}
