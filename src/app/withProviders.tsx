"use client";

// react-query
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

// redux
import { Provider } from "react-redux"
import { store } from "@redux"

const queryClient = new QueryClient()

export default function WithProviders({ children }: {
  children: React.ReactNode
}) {
  return <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  </Provider>
}