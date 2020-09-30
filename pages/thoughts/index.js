import LeftNavLayout from "../../components/LeftNavLayout";

import ThoughtLink from "../../components/ThoughtLink";

export default function Thoughts({ thoughts }) {
  return (
    <LeftNavLayout>
      {thoughts.map((thought) => (
        <ThoughtLink thought={thought} />
      ))}
    </LeftNavLayout>
  );
}

Thoughts.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/thoughts");
  const thoughts = await data.json();
  return {
    thoughts,
  };
};
