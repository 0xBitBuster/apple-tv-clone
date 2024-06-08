import Button from "../components/Button";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn"

function UspsSection() {
    return (
        <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
        <FadeIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>
        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>
        <FadeIn>
          <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
        </FadeIn>
        <FadeIn>
          <p>Share a single subscription with up to five people.</p>
        </FadeIn>
        <FadeIn>
            <div className="flex sm:flex-row flex-col text-center sm:text-left gap-6">
                <div className="flex-1 text-lg">
                    <h3 className="mb-1">Buy an Apple device</h3>
                    <h2 className="text-2xl font-semibold mb-1">3 months free.</h2>
                    <p className="text-gray-400 text-sm mb-4">Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.</p>
                    <Button size="medium" className="font-semibold">Check eligibility</Button>
                </div>
                <div className="flex-1 text-lg">
                    <h3 className="mb-1">Free 7-day trial</h3>
                    <h2 className="text-2xl font-semibold mb-1">$9.99/mo.</h2>
                    <p className="text-gray-400 text-sm mb-4">A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.</p>
                    <Button size="medium" className="font-semibold">Try it free</Button>
                </div>
                <div className="flex-1 text-lg">
                    <h3 className="mb-1">Free 1-month trial</h3>
                    <h2 className="text-2xl font-semibold mb-1">Apple One</h2>
                    <p className="text-gray-400 text-sm">Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy for less. </p>
                    <a className="text-sm text-blue-400 block" href="/">Learn more &gt;</a>
                    <Button size="medium" className="mt-4 font-semibold">Try Apple One free</Button>
                </div>
            </div>
        </FadeIn>
  
      </Container>
      );
}

export default UspsSection;
