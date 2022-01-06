import styled from "styled-components";

const Styles = styled.div`
  color: white;
  font-size: 17px;

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

export default function TxtSnackBar({ text }: { text: string }) {
  return <Styles>{text}</Styles>;
}
