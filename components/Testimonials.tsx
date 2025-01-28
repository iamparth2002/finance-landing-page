"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Sample testimonial data
const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
        author: "Michele",
        role: "CEO",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
        author: "Teressa",
        role: "Lead Developer",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
        author: "Tony Stark",
        role: "CTO",
        image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
        author: "Steve Rogers",
        role: "Designer",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]

export default function TestimonialCarousel() {
    return (
        <div className="bg-[#d1ff00] ">
            <div className="container mx-auto px-4 pt-16 pb-32 md:py-32">
                <div className="mb-12 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl mb-4 text-black font-semibold">Testimonials</h2>
                        <h2 className="text-3xl md:text-6xl font-bold text-black max-w-xl">Global businesses love FinanceX</h2>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    {/* Carousel Content with Peek Effect */}
                    <CarouselContent className="-ml-2 md:-ml-4 ">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="bg-black/90 text-white p-16 rounded-none min-h-[300px] flex flex-col justify-between">
                                    <p className="text-sm md:text-base mb-6  leading-[20px]">{testimonial.text}</p>
                                    <div className="flex items-center gap-3">
                                        {/* Wrapper div for the image */}
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={`${testimonial.author}'s profile picture`}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium">{testimonial.author}</p>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Arrows for Desktop */}
                    <div className="hidden md:flex absolute right-16 top-[-80px]">
                        <CarouselPrevious className="relative bg-black hover:bg-black/90 text-white hover:text-white rounded-full w-12 h-12 -mr-16" />
                        <CarouselNext className="relative bg-black hover:bg-black/90 hover:text-white text-white rounded-full w-12 h-12" />
                    </div>

                    {/* Arrows for Mobile */}
                    <div className="md:hidden absolute left-12 flex mt-16">
                        <CarouselPrevious className="relative bg-black hover:bg-black/90 hover:text-white text-white rounded-full w-16 h-16" />
                        <CarouselNext className="relative bg-black hover:bg-black/90 hover:text-white text-white rounded-full w-16 h-16 -ml-16" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}