import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
// import '@szhsin/react-accordion/dist/index.css';
import axios from 'axios';
import Fallback from '../../Components/Fallback/Fallback';



const FrequentlyAsk = () => {
    const [faqs, setFaqs] = useState([])
    const [loading, setLoading] = useState(true)
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        axios.get('./ask.json')
            .then(res => {
                setFaqs(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log('Error fetching FAQs', err);
                setLoading(false)
            })
    }, [])
    if (loading) return <Fallback />

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-4 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
                        >
                            {faq.question}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 p-4' : 'max-h-0 p-0'
                                } bg-gray-50 dark:bg-gray-900 dark:text-gray-300`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FrequentlyAsk;