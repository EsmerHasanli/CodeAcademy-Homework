import styled from "styled-components";

const ColStyled = styled.div`
  width: 100%;
  padding: 0px 16px;

  @media (min-width: 576px) {
    /* Extra small devices (phones) */
    width: calc(100% / 12 * ${props => props.xs || 12});
  }

  @media (min-width: 768px) {
    /* Small devices (tablets) */
    width: calc(100% / 12 * ${props => props.sm || 12});
  }

  @media (min-width: 992px) {
    /* Medium devices (desktops) */
    width: calc(100% / 12 * ${props => props.md || 12});
  }

  @media (min-width: 1200px) {
    /* Large devices (large desktops) */
    width: calc(100% / 12 * ${props => props.lg || 12});
  }
`;

const Col = (props) => {
  console.log(props);
  console.log(props.children);
  return <ColStyled {...props}>{props.children}</ColStyled>;
};

export default Col;
