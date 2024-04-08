import { Container } from '@/components/Container'
export function SecondaryFeatures() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Discover, Match, Meet – Safely and Seamlessly
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              At the heart of Friendly is our commitment to creating meaningful,
              safe, and comfortable meeting opportunities for everyone. Our
              innovative algorithm doesn't just stop at matching; it also
              suggests common and public venues for your meetups, taking into
              account preferences and safety to ensure that your first
              interaction is as seamless as it is memorable.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
