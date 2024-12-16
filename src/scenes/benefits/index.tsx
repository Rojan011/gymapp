import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "../../shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "The Glory of Arts",
    description:
      "Did you even know that the Gold's Gym in Venice Beach, California is called the meccah of bodybuilding",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "Mostly Friendly Members",
    description:
      "This gym is considered one of the best since it has one of the most friendliest members that you could have ever asked for!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Professional Trainers",
    description:
      "All of the trainers here are certified and all of them have atleast one bodybuilding title for themselves",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header Section */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="py-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphics"
          />

          {/* Description */}
          <div>
            {/* Title*/}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF MEMBERS GETTING FIT{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* Descipt */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay:0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores quae nesciunt vel, cum incidunt veniam dicta labore,
                id, ex unde sequi molestiae ipsa sapiente. Incidunt nostrum
                eveniet vel commodi similique.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                iure dolorum dolores accusamus hic. Nostrum nesciunt
                accusantium, dicta, omnis voluptatibus et deserunt doloremque in
                odit necessitatibus amet, nisi hic repellat?
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
