import { IconButton } from "@mui/material";
import { Input, Text } from "../../components";
import { Container, Content } from "./style";
import { Eye } from "lucide-react";

export const Home = () => {
  return (
    <>
      <Container>
        <Content>
          <Input legend="outline" />
          <Input legend="standart" variant="standart" />
          <Input legend="outline error" error helperText="Teste" />
          <Input
            legend="standart error"
            variant="standart"
            error
            helperText="Teste"
          />
          <Text size="md">dasdads</Text>
        </Content>

        <Input legend="fullWidth" isFullWidth />
        <Content>
          <Input
            legend="eye"
            endProps={() => (
              <IconButton>
                <Eye width={"1rem"} height={"1rem"} />
              </IconButton>
            )}
          />
        </Content>
      </Container>
    </>
  );
};
