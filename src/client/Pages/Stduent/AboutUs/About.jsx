import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    {/* Header */}
    <header className="bg-blue-500 text-white text-center py-8">
      <h1 className="text-4xl font-bold">About Us</h1>
    </header>

    {/* About Section */}
    <section className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700">
          Welcome to our company! We are dedicated to providing quality
          products/services and ensuring customer satisfaction.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 ">
          Reach Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <ul>
            <li>Instagram</li>
            <li>E</li>
           </ul>

          
          {/* Team Member 1 */}
          {/* <div className="bg-gray-200 p-6 rounded-lg">
            <img
              src="https://placekitten.com/200/200"
              alt="Team Member 1"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div> */}

          {/* Team Member 2 */}
          {/* <div className="bg-gray-200 p-6 rounded-lg">
            <img
              src="https://placekitten.com/201/201"
              alt="Team Member 2"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div> */}

          {/* Team Member 3 */}
          {/* <div className="bg-gray-200 p-6 rounded-lg">
            <img
              src="https://placekitten.com/202/202"
              alt="Team Member 3"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Alice Johnson</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div> */}
        </div>
      </div>
    </section>
  </div>
    
   
  )
}

export default About
