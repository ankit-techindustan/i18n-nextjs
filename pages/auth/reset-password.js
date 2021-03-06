import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Truckbook - Reset Password</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <main>
          <h1>Reset Password</h1>
          <Link href="/auth/login"><a>Login</a></Link><br />
          <Link href="/auth/forgot-password"><a>Forgot Password</a></Link>
        </main>

        <footer>

        </footer>

        <style jsx>{`
        
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </div>
    </Layout>
  )
}
