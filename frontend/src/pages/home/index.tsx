import { useTheme } from "styled-components";
import { IconButton, Input, Text, Button, Box } from "../../components";
import { Container, Content } from "./style";
import { Eye } from "lucide-react";

export const Home = () => {
  const theme = useTheme();

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
            helperText="Teste"
            error
          />
          <Text size="5">text</Text>
          <Text size="12">title</Text>
        </Content>
        <Input legend="fullWidth" isFullWidth />
        <Content>
          <Input
            legend="eye"
            endProps={() => (
              <IconButton>
                <Eye size={theme.size[5]} />
              </IconButton>
            )}
          />
          <IconButton>
            <Eye size={theme.size[5]} />
          </IconButton>
          <Button variant="standart">button standart</Button>
          <Button>button container</Button>
        </Content>
        <Box>dsadasd</Box>
      </Container>
    </>
  );
};
