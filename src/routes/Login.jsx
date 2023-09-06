import { Button, Flex } from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";

import { Link } from "react-router-dom";

export default function Login() {
  function handleClick() {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  }
  return (
    <Flex
      direction={"column"}
      gap={"md"}
      style={{ width: "250px", margin: "auto" }}
    >
      <Button
        onClick={handleClick}
        leftIcon={<IconBrandGoogle size={"1rem"} />}
        color="blue.6"
      >
        Continue with Google
      </Button>
      <Link to="/dashboard">
        <Button style={{ width: "100%" }}>Go to dashboard</Button>
      </Link>
    </Flex>
  );
}
