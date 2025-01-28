import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ServicesGrid() {
  const services = [
    {
      title: "Checking Accounts",
      description:
        "Enjoy easy access to your money with our no-fee checking accounts. Manage your finances seamlessly with online banking, mobile check deposit, and 24/7 customer support.",
    },
    {
      title: "Savings Accounts",
      description:
        "Grow your savings with competitive interest rates. Our savings accounts offer flexibility, security, and tools to help you reach your financial goals faster.",
    },
    {
      title: "Credit Cards",
      description:
        "Experience the convenience of cashless payments with our range of credit cards. Earn rewards, enjoy low interest rates, and benefit from fraud protection.",
    },
    {
      title: "Personal Loans",
      description:
        "Get the funds you need for life’s big moments. Our personal loans come with flexible repayment terms, low interest rates, and quick approval processes.",
    },
    {
      title: "Mortgage Services",
      description:
        "Make your dream home a reality with our mortgage solutions. We offer competitive rates, personalized advice, and a hassle-free application process.",
    },
    
  ];

  return (
    <div className=" bg-black p-4 md:p-8 py-8 md:my-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {/* First cell */}
          <div className="bg-black py-8">
            <p className="text-[#ADFF00] mb-4 text-sm">Our Services</p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">
              Browse our <br className="hidden md:block" />
              services & <span className="text-[#ADFF00]">offerings</span>
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#ADFF00] text-black px-6 py-3 mt-8 hover:bg-[#9BE500] transition-colors"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service cards */}
          {services.map((service, i) => (
            <Link
              key={i}
              href="#"
              className="group border border-white/10 p-8 flex flex-col justify-between hover:bg-zinc-800 transition-colors"
            >
              <div>
                <hr className="w-10 mb-8"/>
                <h3 className="text-white text-xl mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </div>
              <div className="mt-8 self-end">
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-700 group-hover:border-[#ADFF00] transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#ADFF00]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

