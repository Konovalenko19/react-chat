import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthBox from "../../components/AuthBox";

const SignupModule = () => {
  return (
    <AuthBox
      title="Sign Up"
      component="form"
      onSubmit={e => {
        e.preventDefault();
        alert("Submit!");
      }}>

      <div style={{ marginBottom: ".5rem" }}>
        <Input
          fullWidth
          placeholder="Full Name"
        />
      </div>

      <div style={{ marginBottom: ".5rem" }}>
        <Input
          fullWidth
          type="email"
          placeholder="Email"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Input
          fullWidth
          type="password"
          placeholder="Password"
        />
      </div>

      <Button
        fullWidth
        type="submit"
        color="white"
        variant="outlined">
        Sign Up
      </Button>

    </AuthBox>
  );
};

export default SignupModule;