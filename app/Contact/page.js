"use client";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Info.</h2>
          <p className="text-sm text-gray-500 mb-8">
            Some information that you may want to know
          </p>

          {/* Phone */}
          <div className="flex gap-4 mb-6">
            <FaPhoneAlt className="text-orange-500 mt-1" />
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-sm text-gray-700">
                +91 82743333384 (For WhatsApp Only)
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 mb-6">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                7A floor,thumb building ,budha road
                New Delhi, Delhi, 110059.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <FaEnvelope className="text-orange-500 mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-700">
                support@books.com
              </p>
              <p className="text-sm text-gray-700">
                bookstore@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Leave Your Message
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Feel free to contact with us by using the form below
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              SEND US
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
