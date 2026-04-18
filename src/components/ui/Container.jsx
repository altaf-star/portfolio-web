export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 ${className}`}>
      {children}
    </div>
  )
}
