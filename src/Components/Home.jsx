import cable from '../../public/cable-pulling.jpg'

export default function Hero() {
  return (
    <div className='my-5 overflow-hidden'>
      <div className="bg-[#f8f7f7] flex md:flex-row flex-col-reverse items-center">
        <div className='justify-start px-6 md:px-20 md:w-1/2'>
          <h1 className='text-4xl md:text-6xl font-semibold py-4 text-start'>
            Ghaffar Technical Services
          </h1>
          <p className='text-[#6B7280] py-2 text-start text-base md:text-lg'>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className='px-8 md:px-10 my-8 font-sans py-3 rounded-full text-white bg-gradient-to-r from-[#54f584] to-[#28c9ed] hover:opacity-65 transition-all'>
            Request Invite
          </button>
        </div>
        <div className='md:w-1/2 bg-cover bg-[url(../../src/assets/images/bg-intro-desktop.svg)] md:h-[28rem]'>
          <img
            src={cable}
            alt="mobile pics"
            className='md:h-[30rem]'
          />
        </div>
      </div>
    </div>
  );
}
