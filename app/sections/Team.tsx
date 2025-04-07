import Mem1 from "@/app/assets/mem1.avif";
import Mem2 from "@/app/assets/mem2.avif";
import Mem3 from "@/app/assets/mem3.avif";
import Mem4 from "@/app/assets/mem4.avif";
import TeamCard from "../component/TeamCard";

const Team = () => {
  const team = [
    { image: Mem1, name: "Michael Brown", role: "Founder & CEO" },
    { image: Mem2, name: "Sarah White", role: "UI/UX Designer" },
    { image: Mem3, name: "John Smith", role: "Founder & CEO" }, // Changing the name for diversity
    { image: Mem4, name: "Emily Johnson", role: "Founder & CEO" }, // Different name
  ];

  return (
    <section className="mt-60">
      <div className="text-center">
        <div>
          <span>
            <i className="fa-solid fa-user-group text-yellow-300"></i>
          </span>
          <span className="md:text-2xl">Our Team</span>
        </div>
        <h1 className="text-6xl font-bold mt-6">Our Team Members</h1>
      </div>
      <TeamCard team={team} />
    </section>
  );
};

export default Team;
