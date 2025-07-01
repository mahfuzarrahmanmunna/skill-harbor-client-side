import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import usePageTitle from "../../Hooks/usePageTitle";

const Pricing = () => {
    usePageTitle()
    const pricingPlans = [
        {
            title: "Basic",
            price: "$19/month",
            features: [
                "1 User",
                "5GB Storage",
                "Email Support",
                "Basic Features",
            ],
            buttonLabel: "Get Started",
        },
        {
            title: "Pro",
            price: "$49/month",
            features: [
                "5 Users",
                "20GB Storage",
                "Priority Support",
                "Advanced Features",
            ],
            buttonLabel: "Start Free Trial",
        },
        {
            title: "Enterprise",
            price: "$99/month",
            features: [
                "Unlimited Users",
                "100GB Storage",
                "24/7 Support",
                "All Features",
            ],
            buttonLabel: "Contact Sales",
        },
    ];

    return (
        <motion.section
            className="min-h-screen  py-12 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto max-w-6xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
                <motion.h1
                    className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Our Pricing Plans
                </motion.h1>

                <motion.p
                    className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Choose the best plan that suits your needs. All plans come with a 14-day free trial.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-4">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{plan.title}</h3>
                                <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">{plan.price}</p>
                            </div>
                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <CheckCircle size={20} className="mr-2 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {plan.buttonLabel}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Pricing;
