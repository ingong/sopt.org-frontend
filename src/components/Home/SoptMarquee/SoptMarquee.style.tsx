import styled from '@emotion/styled';

interface StyleProps {
  isReverse?: boolean;
}

export const StyleWrap = styled.div<StyleProps>`
  & > * {
    background-color: ${(props: StyleProps) =>
      props.isReverse ? 'transparent' : ({ theme }) => theme.colors.mainColor};

    padding: 7px 0px;
    line-height: 110%;
    color: ${(props: StyleProps) =>
      props.isReverse
        ? ({ theme }) => theme.colors.mainColor
        : ({ theme }) => theme.colors.soptWhite};

    font-family: 'SUIT', arial;
    font-size: 24px;
    font-weight: 900;
  }
`;
