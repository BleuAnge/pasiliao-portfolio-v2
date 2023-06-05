import { motion } from "framer-motion";

export default function MySkills(){
    return(
        <motion.h1  initial={{ opacity : 0 , x : 40 }}
                    whileInView={{ opacity : 1 , x : 0 }}
                    exit={{ opacity : 0 , x : 40 }}>
            Skills
        </motion.h1>
    )
}