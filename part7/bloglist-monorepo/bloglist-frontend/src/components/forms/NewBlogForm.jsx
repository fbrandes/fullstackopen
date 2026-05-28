import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";
import { Button, TextField } from "@mui/material";
import NotificationContext from "../contexts/NotificationContext.jsx";
import UserContext from "../contexts/UserContext.jsx";

const NewBlogForm = ({ handleBlogAddition }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const { notification } = useContext(NotificationContext);
  const { isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            return navigate("/");
        }
    }, [isLoggedIn, navigate]);

  const addBlog = (event) => {
    event.preventDefault();

    handleBlogAddition({ title, author, url });
  };

  return (
    <form onSubmit={addBlog}>
      <h2>Create new blog</h2>
      <Notification notification={notification} />
      <div>
          <TextField {...title} style={{ marginBottom: 10 }} />
      </div>
      <div>
          <TextField {...author} style={{ marginBottom: 10 }} />
      </div>
      <div>
          <TextField {...url} style={{ marginBottom: 10 }} />
      </div>
      <Button type="submit" variant="contained" style={{ marginTop: 10 }}>
        create
      </Button>
    </form>
  );
};

export default NewBlogForm;
