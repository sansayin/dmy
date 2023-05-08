import Footer from '@/components/footer'
import NavBar from '@/components/navbar'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (

    <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <NavBar />
      {children}
    </main>
  )
}

export default LayoutWrapper
