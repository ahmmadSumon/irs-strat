import React from 'react'

const Page = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-col justify-center items-center py-10 px-4'>
        <h1 className='text-2xl sm:text-4xl font-extrabold text-[#00205B] py-4 text-center'>SMALL BUSINESS TAXES</h1>
        <p className='max-w-5xl text-base sm:text-lg px-3 text-center'>Running a small business is challenging enough without having tax issues. At IRS-Freshstart.org we help you identify and get a solution in place for your small business taxes. There are numerous options to resolve small business taxes through the IRS Fresh Start program, and numerous options outside of it. The good news is that we are here to guide you each step of the way to provide affordable, timely, and quality services so that you can focus on your #1 priority – growing your business.</p>
        <button className='mt-4 bg-[#ff4438] py-2 px-5 text-white flex justify-center items-center gap-2 text-lg font-bold rounded text-center'>
          GET A FREE SMALL BUSINESS TAX CONSULTATION
        </button>
      </div>
      <div className="flex justify-center w-full px-4">
        <hr className="h-[2px] my-8 bg-[#DB5311] font-bold border-0 max-w-5xl dark:bg-gray-700 w-full" />
      </div>
      <div className='flex flex-col justify-center items-center py-10 px-4'>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#00205B] py-4 text-center'>Tax Preparation For Small Businesses</h2>
        <p className='max-w-5xl text-base sm:text-lg text-center'>Let us lighten the load by providing tax preparation services for the state, IRS, business and more. It’s a necessary detail that can derail a business if not done. And, we pride ourselves on providing the highest quality and affordable tax preparation services for small businesses.</p>
      </div>
      <div className='flex justify-center items-center mx-auto bg-[#2B3B68] py-10 px-4'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className='text-2xl sm:text-4xl text-center text-white font-bold'>Get A Free IRS Notice Consultation</h1>
          <button className='bg-[#ff4438] py-3 text-white flex justify-center items-center gap-2 w-full max-w-xs sm:max-w-sm text-lg sm:text-xl font-bold rounded text-center'>
            877 578 3520
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center py-10 px-4'>
        <h3 className='text-2xl sm:text-3xl font-bold text-[#00205B] py-4 text-center'>Solutions For Small Business Tax Issues</h3>
        <p className='max-w-5xl text-base sm:text-lg text-center'>If there was a mistake or issue in the past, it’s time to get a fresh start. Whether it was payroll taxes not made and a trust fund penalty assessed, a tax audit, back taxes owed, threatening letters from the IRS or something else, our experts are available to help you resolve these. When solved, you can focus with greater peace of mind on your business.</p>
      </div>
      <div className='flex flex-col items-center mb-10 px-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {['Tax Audit Help', 'Payroll Relief', 'Tax Negotiation'].map((title, index) => (
            <div key={index} className="w-full sm:w-[350px] h-[360px] relative flex flex-col justify-center items-center rounded-lg border p-4 hover:bg-[#00205B] hover:text-white transition-colors duration-300">
              <div className='h-[88px] w-[88px] flex justify-center items-center text-3xl absolute -top-[40px] bg-[#FF4438] text-white rounded-full'>
                <h2 className='flex justify-center items-center'>{index + 1}</h2>
              </div>
              <h4 className='py-3'>{title}</h4>
              <p className='text-center'>{
                title === 'Tax Audit Help' ? "Is the IRS or state auditing your business returns? Don’t risk making matters worse by handling it on your own. Our tax partners can help you prepare for your audit and even represent you during the investigation."
                  : title === 'Payroll Relief' ? "As an employer, you are required to pay payroll taxes. If you don’t send in the correct amount, however, it can result in hefty penalties and interest. Thankfully, there are various payroll relief options available to help you get back on track!"
                    : "If you’re in a financial bind and haven’t paid your taxes on time, a tax professional can negotiate with the IRS on your behalf. Depending on your situation, you could have your tax debt lowered or even eliminated."
              }</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center mx-auto bg-[#ABCAE9] py-10 my-10 px-4'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className='text-2xl text-center font-bold'>Explore Your Tax Relief Options</h1>
          <button className='bg-[#ff4438] py-3 px-5 text-white flex justify-center items-center gap-2 text-lg sm:text-xl font-bold rounded text-center'>
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
