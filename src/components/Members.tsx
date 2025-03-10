import { nanoid } from "nanoid";
import React, { useState } from "react";
import { TMember } from "types/shared/member";

const MEMBERS_DEFAULT: TMember[] = [
  {
    id: nanoid(),
    photo: require("./assets/jassim.jpg"),
    name: "Professor Sabah Jassim",
    position: "Software Engineer",
    bio: "Expert in React and Node.js",
    status: "Active",
  },
  {
    id: nanoid(),
    photo: require("./assets/Aras-Asaad.png"),
    name: "Dr Aras Asaad",
    position: "Data Scientist",
    bio: "Specializes in AI & ML",
    status: "Inactive",
  },
  // More mock members...
];
const Members = () => {
  const [members, setMembers] = useState<TMember[]>(MEMBERS_DEFAULT);
 
  const [newMember, setNewMember] = useState<Omit<TMember, 'id'>>({
    photo: null,
    name: "",
    position: "",
    bio: "",
    status: "",
  });
 
  // Handle add member
  const handleAddMember = () => {
    setMembers([...members, { ...newMember, id: nanoid() }]);
    setNewMember({ photo: null, name: "", position: "", bio: "", status: "" }); // Clear form
  };
 
  // Handle delete member
  const handleDeleteMember = (id: TMember['id']) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };
 
  // Handle input change for new member
  const handleNewMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 
  // Handle change for existing member (image, status)
  const handleMemberChange = (id: TMember['id'], field: keyof TMember, value: string) => {
    const updatedMembers = members.map((member) =>
      member.id === id ? { ...member, [field]: value } : member
    );
    setMembers(updatedMembers);
  };
 
  // Handle image upload for new member
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewMember((prev) => ({
        ...prev,
        photo: imageUrl,
      }));
    }
  };
 
  // Handle image upload for existing member
  const handleMemberImageUpload = (id: TMember['id'], e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleMemberChange(id, "photo", imageUrl); // Update image for specific member
    }
  };
 
  return (
    <div className="content">
      <div className="members-container">
        <h1 className="members-header">MEMBERS</h1>
 
        {/* New Member Form */}
        <div className="add-member-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newMember.name}
            onChange={handleNewMemberChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newMember.position}
            onChange={handleNewMemberChange}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={newMember.bio}
            onChange={handleNewMemberChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={newMember.status}
            onChange={handleNewMemberChange}
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleAddMember}>Add Member</button>
        </div>
 
        {/* Members Table */}
        <table className="members-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Position</th>
              <th>Bio</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleMemberImageUpload(member.id, e)}
                  />
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="member-photo"
                      width="50"
                    />
                  )}
                </td>
                <td>{member.name}</td>
                <td>{member.position}</td>
                <td>{member.bio}</td>
                <td>
                  <select
                    value={member.status}
                    onChange={(e) =>
                      handleMemberChange(member.id, "status", e.target.value)
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDeleteMember(member.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Members;