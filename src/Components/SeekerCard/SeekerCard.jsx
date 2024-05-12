import "./SeekerCard.css";

const SeekerCard = ({ person, onEdit, onDelete }) => {
  return (
    <div>
      
      <div className="person-card">
        <p className="personFullname"> {person.fullName}</p>
        <div className="person-info">
          <p className="personEmail">Email: {person.email}</p>
          <p className="personPhone">Phone Number: {person.phoneNumber}</p>
          <p className="personspecialty">specialty : {person.specialty}</p>
        </div>
        <p className="personabout">about : {person.about}</p>
        <p className="personpractical">
          practical Experience Months Number :
          {person.practicalExperienceMonthsNumber}
        </p>
        <p className="personvolunteer">
          volunteer Experience Months Number :
          {person.volunteerExperienceMonthsNumber}
        </p>
        {/* Add more person details here */}
        <div className="btn-group">
          <button onClick={() => onEdit(person)}>Edit</button>
          <button onClick={() => onDelete(person)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SeekerCard;
