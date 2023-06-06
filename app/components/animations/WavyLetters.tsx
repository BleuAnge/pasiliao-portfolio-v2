import { motion } from "framer-motion"

export default function WavyLetters({ text } : any){
    const letters = Array.from(text)

    const container = {
        hidden : { opacity : 0 },
        visible : (i = 1) => ({
            opacity : 1,
            transition : { delay : 0.25 , staggerChildren : 0.12 , delayChildren : 0.5 * i}
        })
    }

    const childe = {
        hidden : {
            opacity : 0,
            y : 20,
            transition : {
                type : "spring",
                damping : 12,
                stiffness : 100,
            }
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                type : "spring",
                damping : 12,
                stiffness : 100,
            }
        }
    }

    return (
        <motion.div variants={container}
                    initial="hidden"
                    whileInView="visible"
                    className="overflow-hidden flex justify-center">
            {
                letters.map((letter : any , index : number) => {
                    return (
                        <motion.span    variants={childe}
                                        key={index}
                                        className="xs:text-5xl lg:text-9xl">      
                            {letter == " " ? "\u00A0" : letter}
                        </motion.span>
                    )
                })
            }
        </motion.div>
    )
}