import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're on a mission to make AI accessible to everyone. Our team of dedicated professionals works tirelessly to create intelligent solutions that enhance human capabilities.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To provide intelligent, accessible, and ethical AI solutions that empower individuals and organizations to achieve more.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Team at work"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border p-6">
                <h3 className="font-bold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/placeholder.svg",
  },
]

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI technology.",
  },
  {
    title: "Ethics",
    description: "We believe in developing AI responsibly with human values at the core.",
  },
  {
    title: "Accessibility",
    description: "We make advanced AI technology accessible to everyone.",
  },
]

