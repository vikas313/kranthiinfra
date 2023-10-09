import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import firebaseapp from "@/configs/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDatabase, set, ref } from "firebase/database";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    locality: "",
    email: "",
    mobile: "", // Added mobile field
  });
  const db = getFirestore(firebaseapp);
  const database = getDatabase(firebaseapp);

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    locality: "",
    email: "",
    mobile: "", // Added mobile field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields manually
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "Name is required";
    }
    if (!formData.locality) {
      errors.locality = "Locality is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile Number is required"; // Validation for mobile
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      errors.mobile = "Invalid mobile number"; // Adjust this validation as needed
    }

    // Set errors and prevent form submission if there are errors
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission here
      setFormErrors(errors);
      setFormData({
        firstName: "",
        locality: "",
        email: "",
        mobile: "",
      });
      try {
        // await setDoc(doc(db, "description", "Q2B9lA7fQKUKCy7SKPke"), formData, {
        //   merge: true,
        // });
        await set(ref(database, "usersData/" + formData.firstName), {
          formData,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="firstName"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Locality"
                name="locality"
                variant="outlined"
                value={formData.locality}
                onChange={handleChange}
                error={!!formErrors.locality}
                helperText={formErrors.locality}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                variant="outlined"
                value={formData.mobile}
                onChange={handleChange}
                error={!!formErrors.mobile}
                helperText={formErrors.mobile}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "16px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UserDataForm;
