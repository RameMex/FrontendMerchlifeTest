'use client';

export default function Creators() {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          justifyContent: 'items',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '40px'
        }}
      >
        <div
          style={{
            width: '400px'
          }}
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Create, Share, Earn.
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Transform your unique ideas into products that resonate with your audience. We bridge
              the gap between your creativity and commerce.
            </p>
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Join Us Today
            </button>
          </div>
        </div>
        <div
          style={{
            width: '400px'
          }}
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Connect with Your Audience through Social Media{' '}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Amplify your reach by linking your Merchlife store with your social media profiles.
              Engage directly with your fans and followers, and watch as your creations capture
              hearts and minds across platforms.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '400px'
          }}
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Free to Start, Boundless Opportunities{' '}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Dive in without any upfront costs. Our platform is built on the belief that your
              creativity should be your only investment. Earn a competitive commission on every sale
              as your creations capture the market.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: '40px'
        }}
      >
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/slides/041.webp"
              alt=""
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              How it works: Create, Connect, Succeed
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Create: Let your imagination run wild. Our platform is your canvas for next-level
              product designs.
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Connect: Leverage the power of social media. Share your story and products with a
              global audience.
            </p>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Succeed: Enjoy the satisfaction of each sale. Grow your brand and income as your
              fanbase expands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
