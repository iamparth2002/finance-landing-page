import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowRight, CreditCardIcon, Facebook, GlobeIcon, Instagram, LocateIcon, Twitter, WalletIcon } from "lucide-react"
import TestimonialCarousel from "./Testimonials"
import ServicesGrid from "./ServiceGrid"

const services = [
  {
    title: "Local business finance",
    icon: <WalletIcon className="h-6 w-6" />, // Unique icon for each service
    description:
      "Empower your local business with tailored financial solutions. We provide loans, credit lines, and cash flow management tools to help your business thrive.",
  },
  {
    title: "Built for global payments",
    icon: <GlobeIcon className="h-6 w-6" />, // Unique icon for each service
    description:
      "Seamlessly send and receive payments across borders. Our platform supports multiple currencies and ensures fast, secure transactions worldwide.",
  },
  {
    title: "Make internet of Money",
    icon: <CreditCardIcon className="h-6 w-6" />, // Unique icon for each service
    description:
      "Experience the future of digital payments. Our platform integrates cutting-edge technology to make online transactions faster, safer, and more convenient.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            FinanceX
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:text-[#c1ff00]">
              Why FinanceX
            </Link>
            <Link href="#" className="hover:text-[#c1ff00]">
              Features
            </Link>
            <Link href="#" className="hover:text-[#c1ff00]">
              Update
            </Link>
            <Link href="#" className="hover:text-[#c1ff00]">
              Blog
            </Link>
          </div>
          <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600]">Sign up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-28 relative overflow-hidden">
        {/* Grid Gradient Background */}
        <div
          className="absolute inset-0 z-0 bg-[size:40px_40px]"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
      `,
            backgroundSize: '150px 150px',
            backgroundPosition: '10px 20px'
          }}
        ></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle, rgba(193, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          }}
        ></div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <p className="text-[#c1ff00] mb-4">Advanced Future Platform</p>
            <h1 className="text-4xl md:text-8xl font-bold mb-6">
              The World's <br /> Most Modern <br /> Card Platform
            </h1>
            <p className="text-gray-400 mb-8 text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis nihil molestias,
              esse quod vero officia pariatur provident et, suscipit, sint quis iusto impedit eligendi?
            </p>
            <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600] px-8 py-6 font-semibold">
              Get Started <ArrowRight className="h-4 w-4 ml-3" />
            </Button>
          </div>
          <div className="max-md:hidden">
            <Image
              src="/hero.png"
              alt="Credit Card"
              width={600}
              height={300}
              className="absolute z-10 right-0 -translate-y-1/2"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[#c1ff00]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-between items-center gap-8 max-md:gap-16">
            <Image src="/paypal.svg" alt="Webflow" width={50} height={50} />
            <Image src="/google.svg" alt="Google" width={120} height={40} />
            <Image src="/amazon.png" alt="Amazon" width={120} height={40} />
            <Image src="/webflow.svg" alt="Adobe" width={120} height={40} />
            <Image src="/adobe.svg" alt="Adobe" width={50} height={50} className="max-md:hidden" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Global Reach */}
      <section className="container mx-auto px-4 py-8 ">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#c1ff00]">Benefits</h2>
            <h3 className="text-3xl md:text-6xl font-bold mb-6">
              We have many users all over the <span className="text-[#c1ff00]">world</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, possimus. Quasi, sunt architecto? Inventore, repellat error, fugit hic magni ut sunt voluptatem neque magnam placeat beatae, consequuntur reprehenderit consequatur eligendi.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold">10M+</p>
                <p className="text-[#c1ff00]">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold">30+</p>
                <p className="text-[#c1ff00]">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-bold">$50M+</p>
                <p className="text-[#c1ff00]">Revenue</p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/map.png" alt="World Map" width={600} height={400} className="opacity-50" />
          </div>
        </div>
      </section>

      {/* Transaction Report */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#c1ff00]">Our Services</h2>
            <h3 className="text-3xl md:text-6xl font-bold mb-6">
              Real Time <br /><span className="text-[#c1ff00]">Transaction Report</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione amet, quas doloribus magnam a dolorum natus commodi voluptatem necessitatibus veritatis rem earum temporibus in iusto, omnis, voluptates sint dignissimos.
            </p>
            <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600] px-8 py-6 font-semibold">Get Started  <ArrowRight className="h-4 w-4 ml-3" /></Button>

          </div>
          <div className="relative ">
            {/* <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#c1ff00] rounded-full blur-3xl opacity-50"></div> */}
            <Image src="/service.png" alt="Credit Card" width={600} height={600} className="relative" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3">
          {services.map((service, i) => (
            <Card
              key={i}
              className="bg-black p-10 rounded-none border-[1px] border-gray-900 hover:cursor-pointer hover:bg-white/20 group"
            >
              <div className="bg-white p-4 inline-flex mb-4 transition-colors group-hover:bg-[#c1ff00]">
                {service.icon} {/* Dynamically render the icon */}
              </div>
              <h4 className="text-4xl font-bold mb-4 text-white">{service.title}</h4>
              <p className="text-white mb-4 text-pretty">{service.description}</p>
              <Button variant="link" className="text-[#c1ff00] p-0">
                Learn more →
              </Button>
            </Card>
          ))}
        </div>
      </section>


      {/* Testimonials */}


      <TestimonialCarousel />

      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#c1ff00]  p-16 text-center">
          <h2 className="text-3xl md:text-7xl font-bold text-black mb-8">Let's grow your business,<br /> together.</h2>
          <Button className="bg-black hover:bg-zinc-800 py-8 px-16 text-[#c1ff00] font-semibold">Get Started</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FinanceX</h3>
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex gap-4">

              <Twitter />
              <Instagram />
              <Facebook />


            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                About Us
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                Careers
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                Pricing
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                Templates
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                Tutorial
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-[#c1ff00]">
                Documentation
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Join Our Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-zinc-900" />
              <Button className="bg-[#c1ff00] text-black hover:bg-[#a8e600]">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Parth Gandhi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

