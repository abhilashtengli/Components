import x from "./assets/x-icon.png";
function App() {
  const row1 = [
    {
      name: "Rahul sharma",
      userName: "rahulsharma",
      image:
        "https://static.vecteezy.com/system/resources/previews/031/719/102/large_2x/ai-generated-studio-portrait-of-handsome-indian-man-on-colour-background-photo.jpg",
      feedback:
        " The service was exceptional from start to finish. Every detail was carefully considered, and the final outcome was delivered on time and surpassed my expectations"
    },
    {
      name: "Mark warn",
      userName: "markwarn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGcZoh8oFxxLODywTUCwVy4aaHSzflR13VA&s",
      feedback:
        "The level of professionalism and dedication to quality was outstanding. Communication was clear throughout the process, making everything run smoothly."
    },
    {
      name: "Kevin Smith",
      userName: "kevinsmith",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDssqKCBvJALvqCQd_QCRItN8zImpbCi-RfjXo3doElLNSdEJvlBheDJQ3FKiGtOeWJlg&usqp=CAU",
      feedback:
        "I was amazed by the attention to detail and innovative approach. They turned my vague ideas into a beautifully crafted result that exceeded my vision"
    },
    {
      name: "Sunil Shekhar",
      userName: "sunilshekhar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUu02GMqlK_Sa-PNOrFhUDajpCcaRYtysT3TI18aCrahjBO-duGW1njipCZYsfAiNI2Y4&usqp=CAU",
      feedback:
        "The process was seamless, and they were incredibly responsive to feedback. Their expertise shone through in every aspect of the work."
    },
    {
      name: "Andrew Turner",
      userName: "andrewturner",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHDdeqkEm5r5_aywVqbKjeJXUIiYKrg2xIg&s",
      feedback:
        "Not only did they deliver a high-quality product, but they also provided helpful suggestions and insights that improved the overall outcome. Highly recommend!"
    }
  ];

  const row2 = [
    {
      name: "Emma Carter",
      userName: "emmacarter",
      image:
        "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/bltc86e7943bcc0e006/6569cbef0b642304079a348b/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0",
      feedback:
        "Creative, professional, and efficient! The result was better than I could have imagined, and their ability to bring ideas to life was incredible."
    },
    {
      name: "Liam Bennett",
      userName: "liambennet",
      image:
        "https://img.freepik.com/premium-photo/face-smiling-indian-man_130568-534.jpg?w=360",
      feedback:
        "The turnaround time was impressive without compromising on quality. They truly listened to my needs and executed everything perfectly."
    },
    {
      name: "Noah Mitchell",
      userName: "noahmitchell",
      image:
        "https://img.freepik.com/premium-photo/face-smiling-indian-man_130568-535.jpg?w=360",
      feedback:
        "Their ability to problem-solve and deliver innovative solutions was truly remarkable. I felt supported and confident throughout the project."
    },
    {
      name: "Mason Reed",
      userName: "masonreed",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfj75SNs7XfI8Lc49Vk6ITMBUSG6er3A4cA&s",
      feedback:
        "From the initial consultation to the final delivery, the process was handled with care and expertise. They exceeded my expectations at every step."
    },
    {
      name: "Ethan Brooks",
      userName: "ethanbrooks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLC-r8qDp0yT1OWyVUsWrvLl9KfuKRxB2HOQ&s",
      feedback:
        "The attention to detail and commitment to excellence made this an outstanding experience. I couldn’t be more pleased with the results!"
    }
  ];

  return (
    <>
      <div className="relative w-full h-full py-20 lg:py-0 sm:py-0 xl:py-0 lg:h-screen sm:h-screen xl:h-screen flex items-center justify-center  border-red-600 bg-black text-white">
      
        <div className="w-full  flex flex-col items-center justify-center">
          <div className="lg:text-3xl text-2xl font-medium text-[#3486d2] text-center  mb-2">
            Testimonials That Inspire
          </div>
          <div className="lg:text-lg font-semibold text-center text-zinc-600 mb-10 px-3">
            Read what our clients say about their experiences and the impact of
            our services!
          </div>

          <div
            style={{
              maskImage:
                "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))"
            }}
            className=" border-red-500 mask-image-gradient"
          >
            <div className="flex overflow-hidden w-[250px] sm:w-[700px] lg:w-[1000px] py-3 mb-4  border-red-400 select-none mask-image-gradient">
              <div className="flex animate-marquee">
                {row1.map((el, index) => (
                  <div
                    key={index}
                    className=" lg:mx-7 mx-3 border-t border-r w-44 lg:w-72 h-fit min-h-64 lg:min-h-48 overflow-hidden hover:scale-105 duration-300 rounded-lg px-3 lg:px-5 py-3 border-zinc-600  bg-gradient"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex lg:space-x-2 space-x-1">
                        <img
                          alt="image"
                          src={el.image}
                          className="lg:w-12 lg:h-12 w-8 h-8  rounded-full object-cover"
                        />
                        <div className="lg:text-sm text-xs font-sans">
                          <h1>{el.name}</h1>
                          <h3 className="text-zinc-400">@{el.userName}</h3>
                        </div>
                      </div>
                      <span>
                        <img
                          src={x}
                          alt="x-icon"
                          className="lg:w-8 lg:h-8 w-6 h-6"
                        />
                      </span>
                    </div>
                    <h2 className="mt-3 font-sans text-sm text-zinc-200">
                      {el.feedback}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="flex animate-marquee ">
                {row1.map((el, index) => (
                  <div
                    key={index}
                    className=" lg:mx-7 mx-3 border-t border-r w-44 lg:w-72 h-fit overflow-hidden min-h-64 lg:min-h-48 hover:scale-105 duration-300 rounded-lg px-3 lg:px-5 py-3 border-zinc-600  bg-gradient"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex lg:space-x-2 space-x-1">
                        <img
                          alt="image"
                          src={el.image}
                          className="lg:w-12 lg:h-12 w-8 h-8  rounded-full object-cover"
                        />
                        <div className="lg:text-sm text-xs font-sans">
                          <h1>{el.name}</h1>
                          <h3 className="text-zinc-400">@{el.userName}</h3>
                        </div>
                      </div>
                      <span>
                        <img
                          src={x}
                          alt="x-icon"
                          className="lg:w-8 lg:h-8 w-6 h-6"
                        />
                      </span>
                    </div>
                    <h2 className="mt-3 font-sans text-sm text-zinc-200">
                      {el.feedback}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex overflow-hidden w-[250px] sm:w-[700px] lg:w-[1000px] py-3 mb-4  border-red-400 select-none mask-image-gradient">
              <div className="flex animate-marquee-reverse">
                {row2.map((el, index) => (
                  <div
                    key={index}
                    className=" lg:mx-7 mx-3 border-t border-r w-44 lg:w-72 h-fit min-h-64 lg:min-h-48 overflow-hidden hover:scale-105 duration-300 rounded-lg px-3 lg:px-5 py-3 border-zinc-600  bg-gradient"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex lg:space-x-2 space-x-1">
                        <img
                          alt="image"
                          src={el.image}
                          className="lg:w-12 lg:h-12 w-8 h-8  rounded-full object-cover"
                        />
                        <div className="lg:text-sm text-xs font-sans">
                          <h1>{el.name}</h1>
                          <h3 className="text-zinc-400">@{el.userName}</h3>
                        </div>
                      </div>
                      <span>
                        <img
                          src={x}
                          alt="x-icon"
                          className="lg:w-8 lg:h-8 w-6 h-6"
                        />
                      </span>
                    </div>
                    <h2 className="mt-3 font-sans text-sm text-zinc-200">
                      {el.feedback}
                    </h2>
                  </div>
                ))}
              </div>
              <div className="flex animate-marquee-reverse ">
                {row2.map((el, index) => (
                  <div
                    key={index}
                    className=" lg:mx-7 mx-3 border-t border-r w-44 lg:w-72 h-fit overflow-hidden min-h-64 lg:min-h-48 hover:scale-105 duration-300 rounded-lg px-3 lg:px-5 py-3 border-zinc-600  bg-gradient"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex lg:space-x-2 space-x-1">
                        <img
                          alt="image"
                          src={el.image}
                          className="lg:w-12 lg:h-12 w-8 h-8  rounded-full object-cover"
                        />
                        <div className="lg:text-sm text-xs font-sans">
                          <h1>{el.name}</h1>
                          <h3 className="text-zinc-400">@{el.userName}</h3>
                        </div>
                      </div>
                      <span>
                        <img
                          src={x}
                          alt="x-icon"
                          className="lg:w-8 lg:h-8 w-6 h-6"
                        />
                      </span>
                    </div>
                    <h2 className="mt-3 font-sans text-sm text-zinc-200">
                      {el.feedback}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
