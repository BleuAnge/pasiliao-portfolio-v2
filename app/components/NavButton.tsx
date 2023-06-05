import { motion } from "framer-motion"

export default function NavButton({handleClickScroll , currentSection} : any){
    const headerButton = [
        { title : 'About Me' },
        { title : 'My Skill Sets' },
        { title : 'My Projects' },
        { title : 'My Contacts' }
      ]
      
    return (
        <div className='xs:w-full sm:w-full md:w-3/4 lg:w-1/2 h-full flex justify-between p-4 text-white'>
          {
            headerButton.map((item, index) => {
              return (
                <motion.button className='relative' onClick={() => {
                  handleClickScroll(index + 1)}}>
                  {
                    currentSection == index + 1 ?
                        <motion.span layoutId='underline' className="absolute left-0 top-full block h-[2px] bg-white w-full" />
                    : null
                  }
                  <h1>{item.title}</h1>
              </motion.button>)
            })
          }
        </div>
    )
}