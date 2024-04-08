import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gradient-to-r from-yellow-300 via-violet-600 to-pink-500 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready to Experience the Real Connection?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Friendly is more than an app; it's a movement towards nurturing
            genuine human connections in a digital-first world. Join us on this
            journey and discover the endless possibilities of meeting,
            connecting, and building relationships that transcend the screen.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-white">
            Become a part of the Friendly community today – where real
            connections are just a meet-up away.
          </h3>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
