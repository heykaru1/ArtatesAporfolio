import ProfilePicture from "./ProfilePicture/ProfilePicture";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

const Sidebar: React.FC = () => {
  return (
    <aside className="col-md-3 bg-light p-4">
      <ProfilePicture />
      <PersonalInfo />
      <Skills />
    </aside>
  );
};

export default Sidebar;
