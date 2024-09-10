import { FC } from "react";
import member from "./member.json";

interface member {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

// const teamMembers: Member[] = Array.from({ length: 36 }, (_, i) => ({
//   id: i + 1,
//   name: `Team Member ${i + 1}`,
//   role: "Developer",
//   imageUrl: `https://i.pravatar.cc/150?img=${i + 1}`,
// }));

const Member: FC = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {member.map((member) => (
            <div
              key={member.id}
              className="transform rounded-lg bg-base-200 p-6 text-center shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Member;
