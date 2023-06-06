import { motion } from "framer-motion";
import WavyText from "../animations/WavyText";
import WavyLetters from "../animations/WavyLetters";

export default function Main(){
    const welcomeNote = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit", 
        "Minus quo autem nobis eum, consectetur voluptatibus", 
        "hic corporis quasi facilis distinctio assumenda sit fugiat",
        "adipisci velit non qui atque? Porro, dolor?"
    ]
    return(
        <motion.div initial={{ opacity : 0 , y : 4000 }}
                    animate={{ opacity : 1 , y : 0 }}
                    exit={{ opacity : 0 , y : 4000 }}
                    className="bg-blue-300 w-full h-full flex justify-center">
            <div className="m-8 w-full h-full flex flex-col justify-center">
                <WavyLetters text="Hello There"/>
                <WavyText text={welcomeNote[0]} />
                <WavyText text={welcomeNote[1]} />
                <WavyText text={welcomeNote[2]} />
                <WavyText text={welcomeNote[3]} />
            </div>
            
        </motion.div>
    )
}