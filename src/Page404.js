import AlertBox from "./styles/AlertBox.styled";

const Page404 = () => {
  return (
    <AlertBox animation="shake">
      <img src="/assets/error404.png" alt="paimon"></img>
      <h2>Whoops...</h2>
      <p>This page may not be ready yet! ;)</p>
    </AlertBox>
  );
};
export default Page404;
