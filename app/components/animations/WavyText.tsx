import { motion } from "framer-motion"

export default function WavyText({ text } : any){
    const words = text.split(" ")

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
                words.map((word : any , index : number) => {
                    if(word != " "){
                        return (
                            <motion.span    variants={childe}
                                            className="mr-2 xs:text-xs lg:text-xl"
                                            key={index}>
                                {word == " " ? "" : word}
                            </motion.span>
                        )
                    }
                        
                })
            }
        </motion.div>
    )
}