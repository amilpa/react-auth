import { Flex, Button, Title } from "@mantine/core";

export default function Dashboard() {
  function handleClick() {
    window.open(`${import.meta.env.VITE_API_URL}/auth/logout`, "_self");
  }
  return (
    <Flex direction="column" style={{ width: "50%", margin: "auto" }}>
      <Title>Dashboard</Title>
      <Button onClick={handleClick} color="red">
        Logout
      </Button>
    </Flex>
  );
}
