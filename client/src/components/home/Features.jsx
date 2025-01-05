import React from "react";
import { motion } from "framer-motion";
import { PieChart, Layers, TrendingUp, Layout, RefreshCw, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <big>1</big>,
      title: "Predictive Engagement Insights",
      description:
        "Utilize AI-driven predictions to forecast engagement trends and optimize your content strategy for maximum impact.",
    },
    {
      icon: <big>2</big>,
      title: "Post Format Optimization",
      description:
        "Identify the most effective post formats using data analytics and improve content performance across all platforms.",
    },
    {
      icon: <big>3</big>,
      title: "Platform-Specific Recommendations",
      description:
        "Receive tailored recommendations for each social media platform to align with unique audience behaviors and preferences.",
    },
    {
      icon: <big>4</big>,
      title: "Customizable Metrics Dashboard",
      description:
        "Build a personalized dashboard to visualize key performance metrics and track your progress in one place.",
    },
    {
      icon: <big>5</big>,
      title: "Comparative Performance Analysis",
      description:
        "Compare engagement metrics across different post types and campaigns to refine your social media strategy.",
    },
    {
      icon: <big>6</big>,
      title: "AI-Enhanced Workflow Integration",
      description:
        "Streamline your analytics and insights workflow by integrating AI for faster, more accurate decision-making.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI plays a crucial role in analyzing social media data, unlocking valuable insights for better decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
