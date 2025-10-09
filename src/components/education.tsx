import Navbar from './navbar';
import { motion } from 'framer-motion';
import { EduCard } from './Cards/eduCard';
import { CoreClasses } from './Cards/coreClasses';

const coreClasses = [
    {
        courseNum: 'CSE 11',
        courseDescription: 'Introduction to Programming and Computational Problem-Solving: Accelerated Pace ',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    },
    {
        courseNum: 'CSE 12',
        courseDescription: ' Basic Data Structures and Object-Oriented Design',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    },
    {
        courseNum: 'CSE 29',
        courseDescription: 'CSE 29. Systems Programming and Software Tools',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    }, 
    {
        courseNum: 'CSE 20', 
        courseDescription: 'Discrete Mathematics',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    },
    {
        courseNum: 'CSE 21', 
        courseDescription: 'Mathematics for Algorithms and Systems',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    }, 
    {
        courseNum: 'CSE 30', 
        courseDescription: 'Computer Organization',
        Link: 'https://catalog.ucsd.edu/courses/CSE.html',
    }, 
    {
        courseNum: 'MATH 20C', 
        courseDescription: 'Calculus and Analytic Geometry for Science and Engineering',
        Link: 'https://catalog.ucsd.edu/courses/MATH.html',
    },
    {
        courseNum: 'MATH 18', 
        courseDescription: 'Linear Algebra',
        Link: 'https://catalog.ucsd.edu/courses/MATH.html',
    },
    

];

export default function Education() {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-wrap items-start justify-start px-10 pt-16 gap-10">
                <motion.div
                    className="max-w-md w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <EduCard />
                </motion.div>
                
                <motion.div
                    className="flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                >
                    <h2 className="text-2xl text-white mb-4">Core Classes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {coreClasses.map((course, index) => (
                            <CoreClasses
                                key={index}
                                courseNum={course.courseNum}
                                courseDescription={course.courseDescription}
                                Link={course.Link}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}