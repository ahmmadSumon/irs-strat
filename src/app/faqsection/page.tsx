"use client";

import React, { useEffect } from 'react';

const Page: React.FC = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('[id^="question"]');
    const handleClicks: (() => void)[] = [];

    buttons.forEach((button, index) => {
      const handleClick = () => {
        const answer = document.getElementById(`answer${index + 1}`) as HTMLElement;
        const arrow = document.getElementById(`arrow${index + 1}`) as HTMLElement;

        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          arrow.style.transform = 'rotate(0deg)';
        } else {
          answer.style.display = 'none';
          arrow.style.transform = 'rotate(-180deg)';
        }
      };

      handleClicks.push(() => button.removeEventListener('click', handleClick));
      button.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      handleClicks.forEach(removeEventListener => removeEventListener());
    };
  }, []);

  return (
    <div>
      <section className=" mt-24 py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
             FAQS
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question1"
                data-state="closed"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                In What Ways Can We Help?
                </span>
                <svg
                  id="arrow1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="answer1"
                style={{ display: 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>
                IRS-Freshtart.org will connect you with one of the most experienced tax firms, with licensed and experienced enrolled agents to see if your unique case may qualify for the IRS Fresh Start Program or another program.
                </p>
              </div>
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question2"
                data-state="closed"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                Are You Connected With Or Part Of This Internal Revenue Service (IRS)?
                </span>
                <svg
                  id="arrow2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="answer2"
                style={{ display: 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>
                No, this site is independently operated and not affiliated with the Internal Revenue Service (IRS). The tax professionals and/or enrolled agents we will refer you to are licensed by the IRS to assist tax payers with IRS Fresh Start qualification and in resolving other tax issues.
                </p>
              </div>
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question3"
                data-state="closed"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                How Can I Call And Speak With An IRS Representative?
                </span>
                <svg
                  id="arrow3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="answer3"
                style={{ display: 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>
                To speak with an IRS representative, you can follow these steps: <br />

Contact the IRS by Phone: <br />
The main IRS phone number is 1-800-829-1040. This is the general hotline for individual inquiries. Note that the availability of this number may vary based on your location and the time of day. <br />
Prepare Relevant Information:<br />
Before calling, have your Social Security number or Taxpayer Identification Number (TIN), your filing status, and any relevant tax documents ready. This information will help the IRS representative assist you more efficiently.<br />
 

Choose the Right Menu Option:<br />
When you call the main IRS phone number, you may encounter an automated menu system. Follow the prompts to select the appropriate option for your inquiry. For example, you might be prompted to choose options related to refunds, payments, or general information.<br />
Be Patient and Persistent:<br />
The IRS phone lines can be busy, especially during peak times such as tax-filing season. Be patient and persistent. You may need to wait on hold, but eventually, you should connect with an IRS representative.<br />
Use the IRS Appointment Scheduler (Optional):<br />
The IRS offers an appointment scheduling tool on its website for certain in-person services. If you need face-to-face assistance at an IRS Taxpayer Assistance Center, you can use this tool to schedule an appointment.<br />
Contact Your Local IRS Office:<br />
If you prefer in-person assistance, you can visit your local IRS Taxpayer Assistance Center. You can find the nearest office and its contact information on the IRS website.<br />
Check IRS Social Media Channels:<br />
The IRS sometimes provides updates and information through its social media channels. While you may not be able to speak directly with a representative through social media, you can find helpful resources and updates.<br />
 
Consider Professional Assistance:<br />
If you have complex tax issues or need specialized assistance, you may want to consider hiring a tax professional, such as an enrolled agent, CPA, or tax attorney. These professionals can provide personalized guidance and representation.<br />
Remember that IRS representatives are there to assist you, but wait times and availability may vary. It’s advisable to call during non-peak hours and be prepared with the necessary information to streamline the conversation. Additionally, for certain inquiries, the IRS website and online resources can be valuable sources of information.<br />
                </p>
              </div>
            </div>
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                id="question4"
                data-state="closed"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                How Do I Check My IRS Refund?
                </span>
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="answer4"
                style={{ display: 'none' }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>
                To check the status of your IRS refund, you can use the “Where’s My Refund?” tool provided by the IRS. Here’s a step-by-step guide on how to check your IRS refund:

Wait for Processing Time:
After you file your tax return, it takes some time for the IRS to process it. The standard processing time is usually within 21 days for electronic filers and six weeks for paper filers.
Gather Required Information:
Before checking your refund status, have the following information ready:
Your Social Security Number or Individual Taxpayer Identification Number (ITIN)
Your filing status
The exact amount of your refund
Access the IRS “Where’s My Refund?” Tool:
Visit the official IRS website (irs.gov) and click on the “Refunds” tab. Alternatively, you can use the direct link to the “Where’s My Refund?” tool: Where’s My Refund?
Enter Your Information:
On the “Where’s My Refund?” page, enter your Social Security Number or ITIN, your filing status, and the exact refund amount as shown on your tax return. Click on the “Submit” or “Check My Refund” button.
Check Your Refund Status:
The tool will display the status of your refund. It will provide one of the following statuses:
Received: The IRS has received your tax return.
Approved: Your refund has been approved and is being processed.
Sent: Your refund has been sent to your bank or mailing address.
Understand Status Messages:
If there is a delay or issue with your refund, the tool may provide additional messages or instructions. For example, it might indicate if more information is needed or if there is a potential issue that requires attention.
Use the IRS2Go Mobile App:
If you prefer, you can also check your refund status using the IRS2Go mobile app, available for download on iOS and Android devices.
Contact the IRS:
If you encounter difficulties or have specific questions about your refund, you can contact the IRS at 1-800-829-1040. Be prepared to provide your Social Security Number or ITIN, filing status, and the exact amount of your refund.
Remember that the status of your refund is typically updated once a day, usually overnight. It’s recommended to check the status periodically for updates. If there are any issues or delays, the tool will often provide guidance on the necessary steps to resolve them.
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 textbase mt-9">
            Still have questions?
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
