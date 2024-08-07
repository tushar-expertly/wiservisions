import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
import startupPng from "../../Assets/startup.jpg";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'

function Home() {
  return (
    <Layout>
      <div class="py-16 bg-green-100">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={startupPng}
                alt="imagae"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Explore Our Webinar Solutions
              </h2>
              <p class="mt-6 text-gray-600">
                At Wiservisions, we are committed to the transformative power of
                education. Our goal is to empower people and organizations
                globally with top-notch online training programs that unlock
                potential and drive success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Purpose</h2>
          {/* <p className="mt-4 text-gray-600">
        We provide exceptional features that will assist you in creating an outstanding
        website.
      </p> */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">
                Guiding Your Skill Development.
              </h3>
              <p className="mt-4 text-gray-600">
                Our team of experienced professionals and educational
                specialists assemble a dynamic collection of online courses
                designed for quick and impactful learning. We value your time,
                offering microlearning modules that enable you to acquire
                essential skills efficiently.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">
                Memorable Learning Experiences.
              </h3>
              <p className="mt-4 text-gray-600">
                Say goodbye to monotonous lectures and overwhelming information.
                Our courses are designed to be engaging and interactive. We use
                advanced technologies like simulations, gamification, and
                AI-driven assessments to provide an immersive learning
                experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">
                Beyond Traditional Courses.
              </h3>
              <p className="mt-4 text-gray-600">
                We are committed to creating a supportive learning atmosphere.
                Engage with other learners in our lively online community, ask
                questions directly to our instructors, and gain valuable
                insights from industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
