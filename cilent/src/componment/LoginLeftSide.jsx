
const LoginLeftSide = () => {
  return (
    <div className='flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200 items-center justify-center'>
      <div className='absolute top-30 -left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl'></div>
      <div>
        <h1 className='text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight'>Employee<br/>Management System</h1>
        <p className='text-slate-400 text-lg max-w-md leading-relaxed'>Stremline your workforce operations,track attendace, manage payroll, and empower your team securely.</p>
      </div>
    </div>
  )
}

export default LoginLeftSide
