import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      View
      <div>
        <Button
          onClick={() =>
            navigate(`/admin?headTab=profile&active=Update Profile`)
          }
        >
          Edit Profile
        </Button>
      </div>{" "}
    </div>
  );
};

export default ViewProfile;
