import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card className="card">
      <p>About Feedback App (c) 2022</p>
      <p>Version 1.0</p>
      <Link to="/">Return to home page</Link>
    </Card>
  );
}

export default AboutPage;
