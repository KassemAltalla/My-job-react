import "./OrgCard.css";

const OrgCard = ({ Org, onEdit, onDelete }) => {
  return (
    <div>
      <div className="person-card">
        <p className="personFullname"> {Org.fullName}</p>
        <div className="person-info">
          <p className="personEmail">Email: {Org.email}</p>
          <p className="personPhone">Phone Number: {Org.phoneNumber}</p>
          <p className="personspecialty">specialty : {Org.specialty}</p>
        </div>
        <p className="personabout">about : {Org.about}</p>

        {/* Add more person details here */}
        <div className="btn-group">
          <button onClick={() => onEdit(Org)}>Edit</button>
          <button onClick={() => onDelete(Org)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrgCard;
