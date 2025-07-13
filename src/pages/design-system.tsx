import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Input,
  ListItem,
  Switch,
} from "@/components/ui";
import { Select } from "@/components/ui/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface GroupProps {
  title: string;
  children: React.ReactNode;
}

function Group({ title, children }: GroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function DesignSystem() {
  const navigate = useNavigate();

  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full p-10">
      <div className="flex gap-4 mb-10 w-full justify-start">
        <Button onClick={() => navigate("/")}>Go to home</Button>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-medium">Design System</h1>
        <Group title="Buttons">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="blue">Blue</Button>
          <Button variant="realms">Realms</Button>
        </Group>
        <Group title="Input">
          <Input placeholder="Input" />
        </Group>
        <Group title="List Items">
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </Group>
        <Group title="Select">
          <Select className="w-40">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </Group>
        <Group title="Switch">
          <Switch
            label="Switch"
            checked={switchValue}
            onChange={(checked) => setSwitchValue(checked)}
          />
        </Group>
        <Group title="Card">
          <Card>
            <CardHeader>Header</CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Group>
      </div>
    </div>
  );
}
