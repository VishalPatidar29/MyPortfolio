import React from "react";

function Home() {
  return (
    <div className="bg-white rounded-xl mt-8 md:mt-0 last:px-5 py-5">
      <div className=" flex  items-center gap-5">
        <h2 className="text-2xl font-semibold font-sans whitespace-nowrap">
          ABOUT ME
        </h2>
        <span className="block bg-gradient-to-r from-[#FF9C1A] to-[#E80505] h-[2px] w-[40%]"></span>
      </div>
      <div className="mt-5">
        <p>
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>

      <div>
        <div className="mt-7">
          <h2 className="text-2xl font-semibold font-sans whitespace-nowrap">
            What I do!
          </h2>
        </div>

        <div className="xl:flex xl:gap-8">
          <div className="bg-[#FFEBD1] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
            <div className="flex gap-2">
              <div>
                <img src="/src/assets/images/code icon.png" alt="" />
              </div>
              <div className="font-semibold text-lg">Web Development</div>
            </div>
            <div className="mt-1">
              <p>
                As a developer, I find myself most captivated by the power and
                flexibility of NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and discover innovative ways to
                create fast, scalable, and user-friendly applications.
              </p>
            </div>
          </div>

          <div className="bg-[#F2F7FC] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
            <div className="flex gap-2">
              <div>
                <img src="/src/assets/images/App.png" alt="" />
              </div>
              <div className="font-semibold text-lg">App Development</div>
            </div>
            <div className="mt-1">
              <p>
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives. Let's turn ideas
                into reality and shape the future together.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:gap-8 mt-4">
          <div className="bg-[#F2F7FC] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
            <div className="flex gap-2">
              <div>
                <img src="/src/assets/images/App.png" alt="" />
              </div>
              <div className="font-semibold text-lg">UI/UX Designing</div>
            </div>
            <div className="mt-1">
              <p>
                Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.
              </p>
            </div>
          </div>
          <div className="bg-[#FFEBD1] mt-3 px-4 py-4 rounded-xl xl:w-[50%]">
            <div className="flex gap-2">
              <div>
                <img src="/src/assets/images/code icon.png" alt="" />
              </div>
              <div className="font-semibold text-lg">Mentorship</div>
            </div>
            <div className="mt-1">
              <p>
                I have also found great joy in sharing my knowledge with others.
                Being a technical mentor allows me to give back to the community
                that has supported me throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
