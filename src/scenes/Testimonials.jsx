import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';

const Testimonials = () => {
   const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
   before:absolute before:top-[-120px] before:ml-[-110px] before:left-1/2`;

   return (
      <section id='testimonials' className='pt-32 pb-16'>
         <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 },
            }}
         >
            <p className="font-playfair font-semibold text-4xl mb-5 text-red">
               TESTIMONIALS
            </p>
            <LineGradient width="mx-auto w-2/4" />
            <p className="mt-10">
               Testing Text Apapun itu bro
            </p>
         </motion.div>

         {/* TESTIMONIALS */}
         <div className='md:flex md:justify-between gap-8'>
            <motion.div
               className={`bg-blue ${testimonialStyles} before:content-person1`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
               }}
            >
               <p className="font-playfair text-6xl">“</p>
               <p className='text-center text-xl'>
                  Testing lagi aja ini mah bro
               </p>
            </motion.div>

            <motion.div
               className={`bg-red ${testimonialStyles} before:content-person2`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
               }}
            >
               <p className="font-playfair text-6xl">“</p>
               <p className='text-center text-xl'>
                  Testing lagi aja ini mah bro
               </p>
            </motion.div>

            <motion.div
               className={`bg-yellow ${testimonialStyles} before:content-person3`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ delay: 0.4, duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
               }}
            >
               <p className="font-playfair text-6xl">“</p>
               <p className='text-center text-xl'>
                  Testing lagi aja ini mah bro
               </p>
            </motion.div>
         </div>
      </section>
   );
}

export default Testimonials;