const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [pagesOpen, setPagesOpen] = React.useState(false)
    const pageLinks = ["Page 1", "Page 2", "Page 3"]
function Home() {
    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>

            <header className='flex flex-col items-center justify-center px-4'>
                <nav className="flex flex-col items-center w-full" >
                    <div className="flex items-center justify-between p-4 md:px-24 lg:px-32 xl:px-40 md:py-4 w-full relative">
                        <a href="https://prebuiltui.com">
                            <svg width="151" height="36" viewBox="0 0 151 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.786 14.72q.696-.912 1.896-1.536t2.712-.624q1.728 0 3.144.864 1.44.84 2.256 2.376t.816 3.528-.816 3.576q-.816 1.56-2.256 2.448-1.416.864-3.144.864-1.512 0-2.688-.6-1.176-.624-1.92-1.536v8.208H36.05V12.776h2.736zm8.04 4.608q0-1.368-.576-2.352-.552-1.008-1.488-1.512a3.86 3.86 0 0 0-1.968-.528q-1.032 0-1.968.528-.912.528-1.488 1.536-.552 1.008-.552 2.376t.552 2.4q.576 1.008 1.488 1.536.936.528 1.968.528 1.056 0 1.968-.528.936-.552 1.488-1.584.576-1.032.576-2.4m8.226-4.632q.6-1.008 1.584-1.56 1.008-.576 2.376-.576v2.832h-.696q-1.608 0-2.448.816-.816.816-.816 2.832V26h-2.736V12.776h2.736zm18.595 4.368q0 .744-.096 1.344H63.447q.12 1.584 1.176 2.544t2.592.96q2.208 0 3.12-1.848h2.952q-.6 1.824-2.184 3-1.56 1.152-3.888 1.152-1.896 0-3.408-.84a6.3 6.3 0 0 1-2.352-2.4q-.84-1.56-.84-3.6t.816-3.576q.84-1.56 2.328-2.4 1.512-.84 3.456-.84 1.872 0 3.336.816a5.75 5.75 0 0 1 2.28 2.304q.816 1.464.816 3.384M70.79 18.2q-.024-1.512-1.08-2.424t-2.616-.912q-1.416 0-2.424.912-1.008.888-1.2 2.424zm8.284-3.456q.696-.96 1.896-1.56 1.224-.624 2.712-.624 1.752 0 3.168.84t2.232 2.4q.816 1.536.816 3.528t-.816 3.576q-.816 1.56-2.256 2.448-1.416.864-3.144.864-1.536 0-2.736-.6-1.176-.6-1.872-1.536V26H76.34V8.24h2.736zm8.04 4.584q0-1.368-.576-2.352-.552-1.008-1.488-1.512a3.86 3.86 0 0 0-1.968-.528q-1.032 0-1.968.528-.912.528-1.488 1.536-.552 1.008-.552 2.376t.552 2.4q.576 1.008 1.488 1.536.936.528 1.968.528 1.056 0 1.968-.528.936-.552 1.488-1.584.576-1.032.576-2.4m17.466-6.552V26h-2.736v-1.56q-.648.816-1.704 1.296a5.4 5.4 0 0 1-2.208.456q-1.56 0-2.808-.648-1.224-.648-1.944-1.92-.696-1.272-.696-3.072v-7.776h2.712v7.368q0 1.776.888 2.736.888.936 2.424.936t2.424-.936q.912-.96.912-2.736v-7.368zm5.002-1.752q-.744 0-1.248-.504a1.7 1.7 0 0 1-.504-1.248q0-.744.504-1.248a1.7 1.7 0 0 1 1.248-.504q.72 0 1.224.504t.504 1.248-.504 1.248a1.67 1.67 0 0 1-1.224.504m1.344 1.752V26h-2.736V12.776zm6.328-4.536V26h-2.736V8.24zm6.784 6.768v7.32q0 .744.336 1.08.36.312 1.2.312h1.68V26h-2.16q-1.848 0-2.832-.864t-.984-2.808v-7.32h-1.56v-2.232h1.56V9.488h2.76v3.288h3.216v2.232zm17.714-2.232V26h-2.736v-1.56q-.648.816-1.704 1.296a5.4 5.4 0 0 1-2.208.456q-1.56 0-2.808-.648-1.224-.648-1.944-1.92-.696-1.272-.696-3.072v-7.776h2.712v7.368q0 1.776.888 2.736.888.936 2.424.936t2.424-.936q.912-.96.912-2.736v-7.368zm5.002-1.752q-.744 0-1.248-.504a1.7 1.7 0 0 1-.504-1.248q0-.744.504-1.248a1.7 1.7 0 0 1 1.248-.504q.72 0 1.224.504t.504 1.248-.504 1.248a1.67 1.67 0 0 1-1.224.504m1.344 1.752V26h-2.736V12.776z" fill="#000" /><path d="m7.25 10.86 6 3.366 6-3.367m-12 20.176v-6.721l-6-3.367m24 0-6 3.367v6.72M1.61 14.42l11.64 6.54 11.64-6.54M13.25 34V20.947m12 5.18v-10.36c0-.454-.124-.9-.358-1.293a2.63 2.63 0 0 0-.975-.947l-9.333-5.18a2.73 2.73 0 0 0-2.667 0l-9.333 5.18a2.63 2.63 0 0 0-.976.947 2.54 2.54 0 0 0-.358 1.293v10.36c0 .454.124.9.358 1.293s.57.72.976.947l9.333 5.18a2.73 2.73 0 0 0 2.667 0l9.333-5.18a2.63 2.63 0 0 0 .975-.947 2.53 2.53 0 0 0 .358-1.293" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        </a>
                        <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/25 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-7.5 text-sm`}>
                            <div className="group relative max-md:flex max-md:flex-col max-md:items-center">
                                <button type="button" onClick={() => setPagesOpen((prev) => !prev)} className="flex items-center gap-1 text-gray-800 hover:text-gray-600" >
                                    Pages
                                    <svg className={`transition-transform duration-200 md:group-hover:rotate-180 ${pagesOpen ? 'rotate-180' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5 7.5 5 5 5-5" stroke="#1e2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </button>
                                <div className={`${pagesOpen ? 'mt-3 flex' : 'hidden'} flex-col gap-1 md:absolute md:left-1/2 md:top-full md:mt-2 md:flex md:min-w-32 md:-translate-x-1/2 md:rounded-2xl md:border md:border-gray-200 md:bg-white md:p-1.5 md:shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:opacity-0 md:invisible md:-translate-y-2 md:transition-all md:duration-200 md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                                    {pageLinks.map((page) => (
                                        <a key={page} href="#" onClick={() => { setPagesOpen(false); setMobileOpen(false) }} className="rounded-lg px-3 py-2 text-center text-gray-700 transition hover:bg-gray-50 hover:text-gray-900">
                                            {page}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-gray-600">Features</a>
                            <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-gray-600">Blogs</a>
                            <a href="#" onClick={() => setMobileOpen(false)} className="text-gray-800 hover:text-gray-600">Pricing</a>

                            <button id="close-menu" onClick={() => { setMobileOpen(false); setPagesOpen(false) }} className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <button className="hidden md:flex items-center gap-1 border border-gray-400 hover:bg-gray-50 px-6 py-2.5 rounded-3xl text-sm transition cursor-pointer group">
                            Book a demo
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.685 14.164 8.122-8.333M5.685 5.83h8.122v8.334" stroke="#6a7282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <div className="flex flex-wrap items-center justify-center gap-2 pl-2.5 pr-4 py-1.5 mt-30 rounded-full border border-gray-300">
                    <p className='px-2 py-0.5 rounded-full border border-green-600 bg-green-100 text-xs text-green-700'>NEW</p>
                    <p className="text-sm text-gray-700">Introducing Platform 2.0</p>
                </div>

                <h1 className="text-5xl md:text-[64px]/18 text-center font-medium text-gray-900 bg-clip-text leading-tight max-w-[700px] mt-4">
                    The Platform Powering Modern Businesses
                </h1>
                <p className="text-sm md:text-base text-center max-w-[500px] mt-2.5 text-gray-800">
                    A powerful platform designed to help teams streamline workflows, manage operations and scale faster.
                </p>

                <div className='flex gap-3.5 mt-11'>
                    <button className="flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition cursor-pointer">
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                    <button className="flex items-center gap-1 border border-gray-200 hover:bg-gray-50 text-gray-950 font-medium px-5 py-2.5 rounded-xl text-sm transition cursor-pointer">
                        Learn more
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6 12 4-4-4-4" stroke="#030712" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>

                <div className="w-full px-4 md:px-24 lg:px-32 xl:px-40 mt-13">
                    <img className="max-h-64 md:max-h-96 object-cover object-top w-full max-w-6xl mx-auto border border-gray-200 rounded-[20px]" src="https://assets.prebuiltui.com/components/hero-section/hero-modern-dashboard.png" alt="dashboard" />
                </div>
            </header>
        </>
    )
}

export default Home