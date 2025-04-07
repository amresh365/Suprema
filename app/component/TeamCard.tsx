// TeamCard.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

type TeamMember = {
  image: StaticImageData;
  name: string;
  role: string;
};

interface TeamCardProps {
  team: TeamMember[];
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="flex flex-wrap flex-row mt-28">
      {team.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-[22rem]  m-2 border border-white/10 border-1 rounded-3xl overflow-hidden"
        >
          <Image src={member.image} alt={member.name} className="w-full" />
          <div className="flex flex-row items-center justify-between p-6 bg-white/5 w-full pt-7">
            <div className="ml-3">
              <h3 className="md:text-2xl">{member.name}</h3>
              <p className="md:text-2xl text-white/60 mt-2">{member.role}</p>
            </div>
            <span className="md:text-2xl mr-3">
              <i className="fa-brands fa-x-twitter"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
