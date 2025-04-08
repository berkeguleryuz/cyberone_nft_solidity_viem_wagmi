"use client";

import React, { useRef, useState } from "react";
import { Shield, Zap, Globe, Trophy } from "lucide-react";

export const FeaturesSection = () => {
  const featuresRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Secure Raffles",
      description:
        "All raffles are secured through smart contracts, ensuring fairness and transparency.",
      color: "from-blue-500 to-blue-800",
      highlight:
        "Smart contracts guarantee that all outcomes are verifiable and cannot be manipulated.",
    },
    {
      title: "Fast Transactions",
      description:
        "Lightning-fast transaction processing with minimal fees on the blockchain.",
        color: "from-blue-500 to-blue-800",
      highlight:
        "Process thousands of entries per second with our optimized layer-2 solution.",
    },
    {
      title: "Global Network",
      description:
        "Join thousands of NFT enthusiasts from around the world on our platform.",
        color: "from-blue-500 to-blue-800",
      highlight:
        "Connect with users across 150+ countries in our thriving community.",
    },
    {
      title: "Exclusive NFTs",
      description:
        "Access to exclusive and limited edition NFTs that you can't find anywhere else.",
        color: "from-blue-500 to-blue-800",
      highlight:
        "Partner with leading artists and brands for truly unique digital assets.",
    },
  ];

  return (
    <section ref={featuresRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              CyberOne
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our platform offers the best experience for NFT raffles with
            cutting-edge technology and user-centric design tailored for the
            future of digital collectibles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="space-y-1">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-4 group 
                    ${
                      activeFeature === index
                        ? `bg-gradient-to-r ${feature.color} text-white`
                        : "hover:bg-white/5"
                    }`}>
                  <div
                    className={`${
                      activeFeature === index
                        ? "bg-white text-black"
                        : "bg-black/30 border border-primary/20 text-primary"
                    } 
                    p-3 rounded-lg transition-all aspect-square duration-300`}>
                    {index === 0 && <Shield className="w-6 h-6" />}
                    {index === 1 && <Zap className="w-6 h-6" />}
                    {index === 2 && <Globe className="w-6 h-6" />}
                    {index === 3 && <Trophy className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg transition-all duration-300 
                      ${
                        activeFeature === index
                          ? "text-white"
                          : "text-white group-hover:text-primary"
                      }`}>
                      {feature.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-10 rounded-3xl blur-3xl transition-all duration-700`}></div>
            </div>

            <div className="relative z-10 w-full h-full px-6 py-8">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center aspect-square mb-8`}>
                  {activeFeature === 0 && (
                    <Shield className="w-6 h-6 text-white" />
                  )}
                  {activeFeature === 1 && (
                    <Zap className="w-6 h-6 text-white" />
                  )}
                  {activeFeature === 2 && (
                    <Globe className="w-6 h-6 text-white" />
                  )}
                  {activeFeature === 3 && (
                    <Trophy className="w-6 h-6 text-white" />
                  )}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {features[activeFeature].title}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                <div className="mt-auto">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="text-primary text-2xl mt-1">✦</div>
                      <p className="text-gray-200 mt-2 text-center italic">
                        {features[activeFeature].highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                activeFeature === index
                  ? "bg-primary w-8"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
