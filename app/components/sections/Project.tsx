import { motion } from "framer-motion";

export default function Project(){
    return(
        <motion.h1  initial={{ opacity : 0 , x : 40 }}
                    whileInView={{ opacity : 1 , x : 0 }}
                    exit={{ opacity : 0 , x : 40 }}>
            Project
        </motion.h1>
    )
}