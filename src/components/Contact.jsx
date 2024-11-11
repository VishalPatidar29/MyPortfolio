import React ,{useState} from 'react'
import Input from './Input'
import { useForm } from "react-hook-form"




function Contact() {


  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const onSubmit = data => console.log(data);

  return (
    <div className="bg-white rounded-xl mt-8 md:mt-0 last:px-5 py-5">


      <div className=" flex  items-center gap-5">
        <h2 className="text-2xl font-semibold font-sans whitespace-nowrap">
          Contact
        </h2>
        <span className="block bg-gradient-to-r from-[#FF9C1A] to-[#E80505] h-[2px] w-[40%]"></span>
      </div>

      <div className="xl:flex xl:gap-8">
        <div className="bg-[#FFEBD1] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
          <div className="flex gap-2">
            <div>
              <img src="/src/assets/images/contact-phone-icon.png" alt="" />
            </div>
            <div className="font-semibold text-lg">Phone: </div>
          </div>
          <div className="mt-1">
            <p>
              +918770669245
            </p>
          </div>
        </div>

        <div className="bg-[#F2F7FC] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
          <div className="flex gap-2 items-center">
            <div>
              <img src="/src/assets/images/contact-email-icon.png" alt="" />
            </div>
            <div className="font-semibold text-lg">Email:</div>
          </div>
          <div className="mt-1">
            <p>
              er.vishalpatidar29@gamil.com
            </p>
          </div>
        </div>
      </div>


      <div className='bg-[#F8FBFB] rounded-lg md:mt-8 mt-4 px-4 py-4'>

        <div >
          <p>I am always open to discussing <span className='font-bold'>new projects, opportunities in tech world,
            partnerships</span> and more so <span className='font-bold'>mentorship.</span> </p>
        </div>

        <div className='mt-4'>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
            <div className='mb-4'>

              <Input
                label="Name: "
                placeholder="Enter Your Name"
                type="text"
                {...register("name", {
                  required: true
                })}
              />

            </div>
            <div className='mb-4'>
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                })}
              />
            </div>
            <div className='mb-4'>
              <Input
                label="Message: "
                placeholder="Enter your Message"
                type="text"
                {...register("message", {
                  required: true
                })}
              />
            </div>

            <div className='mb-4'>
            <button type='submit' className="bg-gradient-to-r from-[#FF9C1A] to-[#E80505] px-7 py-2 rounded-3xl text-white">Submit</button>
            </div>
          </form>
        </div>




      </div>



    </div>
  )
}

export default Contact