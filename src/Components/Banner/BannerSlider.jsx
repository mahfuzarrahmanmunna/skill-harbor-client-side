// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const slides = [
    {
        title: "Welcome to Our Course Platform",
        subtitle: "Learn at your own pace with top instructors",
        image: "https://png.pngtree.com/thumb_back/fh260/background/20221226/pngtree-dark-green-financial-management-fund-course-learning-banner-background-image_1496024.jpg",
    },
    {
        title: "Build Real World Skills",
        subtitle: "Master full stack development, data science, and more",
        image: "https://thumbs.dreamstime.com/b/golf-course-fire-landscape-red-sunset-sky-dark-clouds-51355587.jpg",
    },
    {
        title: "Join Thousands of Learners",
        subtitle: "Boost your career with modern skillsets",
        image: "https://thumbs.dreamstime.com/b/education-technology-e-learning-online-training-webinar-seminar-knowledge-business-personal-development-144808360.jpg",
    },
];

export default function BannerSlider() {
    const [index, setIndex] = useState(0);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-xl">
            <img
                src={slides[index].image}
                alt="banner"
                className="absolute inset-0 h-full w-full object-cover brightness-50"
            />
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slides[index].title}
                </h1>
                <p className="text-lg md:text-xl max-w-xl mb-6">
                    {slides[index].subtitle}
                </p>
                {/* <Button variant="secondary" size="lg">
                    Explore Courses
                </Button> */}
            </motion.div>

            <div className="absolute top-4 right-4 z-20">
                {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                        setTheme((prev) => (prev === "light" ? "dark" : "light"))
                    }
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </Button> */}
            </div>
        </div>
    );
}
