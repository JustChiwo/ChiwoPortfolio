function Contact() {
  return (
    <div
      id="Contact"
      className="mt-35 min-h-screen bg-gray-100 flex flex-col items-center p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Send a Message</h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          Get in touch with me,
          <br /> We could be the next big thing in the tech world.
          <br /> Let's make it happen.
        </p>
      </div>
    </div>
  );
}

export default Contact;
