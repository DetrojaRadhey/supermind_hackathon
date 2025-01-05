import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Hero Section
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-yellow-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Enhance Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Social Media Impact
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Leverage AI-powered analytics to gain actionable insights, optimize social media engagement, and drive organic audience growth.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors">
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                to="https://youtu.be/TGx_P_ZqODM"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                Demo Video
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl blur-2xl opacity-20 transform rotate-3"></div>
            <img
              src="/hero.png"
              alt="Analytics Dashboard"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
