import '../sass/globals.scss'
import { TransactionsProvider } from '@/context/TransactionContext'

export default function App({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
    </TransactionsProvider>
  )
}
